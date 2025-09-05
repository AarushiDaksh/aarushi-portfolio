export const runtime = "edge";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

/** Digital Twin API — OpenAI first, robust fallbacks, debug GET */

const persona = {
  name: "Aarushi Daksh",
  title: "Full-Stack Developer (BU'26)",
  location: "Greater Noida, India",
  focus: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind", "React Native", "Azure"],
  projects: [
    { name: "StuGig", blurb: "Student freelance marketplace (Next.js, MongoDB, NextAuth, Stripe in progress)." },
    { name: "SkillSlack", blurb: "Slack-style developer workspace with real-time code & GitHub PR feed." },
    { name: "Maniac", blurb: "AI agent to manage tasks- currently building" },
    { name: "3JS-Portfolio", blurb: "React Three Fiber room with interactive panels." },
  ],
  experiences: [
    {
      company: "Xebia",
      role: "Intern Trainee",
      duration: "May 2025 – July 2025",
      description:
        "Contributed to MERN applications, including a marketplace module under mentor guidance. Built visual editors and gained hands-on exposure to Microsoft Azure (AZ-204).",
    },
    {
      company: "EatOnTime",
      role: "Application Developer Intern",
      duration: "Oct 2024 – Jan 2025",
      description:
        "Worked on a food-delivery product at an early-stage startup. Helped design core flows, refine UI/UX, and ship key app features with the team.",
    },
  ],
  certificates: [
    {
      title: "Developer Solutions for Microsoft Azure (AZ-204)",
      year: 2025,
      link:
        "https://learn.microsoft.com/api/achievements/share/en-us/AarushiDaksh-3115/W24BWLZN?sharingId=5832313FE374D7BA",
    },
    {
      title: "Microsoft Azure Administrator",
      year: 2025,
      link:
        "https://learn.microsoft.com/api/achievements/share/en-us/AarushiDaksh-3115/8ZBG46GW?sharingId=5832313FE374D7BA",
    },
    {
      title: "Developer AI Solutions for Microsoft Azure",
      year: 2025,
      link:
        "https://learn.microsoft.com/api/achievements/share/en-us/AarushiDaksh-3115/NVJXYCZF?sharingId=5832313FE374D7BA",
    },
    { title: "ICPCT-2025 IEEE Paper Presentation – A MCDM Approach for E-Commerce", year: 2025 },
    { title: "Google Cloud Arcade Facilitator", year: 2025 },
    { title: "Member – Women in Tech (HerKey)", year: 2025 },
    { title: "Contributor and Mentor - GSSoC'25 (GirlScript Summer Of Code)", year: 2025 },
  ],
};

const systemRules = `
You are Aarushi Daksh’s digital twin (first-person “I”).
Be concise, confident, friendly. Use only persona + user facts; never invent.
`;

function redact(s?: string) {
  if (!s) return s;
  return s.replace(/[A-Za-z0-9_\-]{16,}/g, (m) => m.slice(0, 4) + "…" + m.slice(-4));
}

function buildMessages(
  userMessages: { role: string; content: string }[],
  facts: string[]
) {
  const prelude = [
    { role: "system", content: systemRules },
    { role: "system", content: `PERSONA:\n${JSON.stringify(persona, null, 2)}` },
    { role: "system", content: `EXTRA FACTS:\n${facts.map((f, i) => `${i + 1}. ${f}`).join("\n") || "(none)"}` },
  ];
  const tail = userMessages.map((m) => ({
    role: m.role === "assistant" ? "assistant" : "user",
    content: String(m.content || "").slice(0, 8000),
  }));
  return [...prelude, ...tail];
}

function isRetryable(status: number, text: string) {
  if ([401, 403, 408, 409, 425, 429, 500, 502, 503, 504].includes(status)) return true;
  if (status === 400 && /model|not\s*found|unknown|unsupported|max[_\s-]?tokens|required|missing|invalid/i.test(text || "")) {
    return true;
  }
  if (/insufficient[_\s-]?quota|rate[-\s]?limit|overloaded|try again/i.test(text)) return true;
  return false;
}

const PROVIDERS = [
  {
    name: "openai",
    base: process.env.TWIN_MODEL_BASE_URL || "https://api.openai.com/v1",
    key: process.env.TWIN_MODEL_API_KEY || process.env.OPENAI_API_KEY,
    model: process.env.TWIN_MODEL || "gpt-4o-mini",
    headers: (key: string) => ({ Authorization: `Bearer ${key}` }),
  },
  {
    name: "groq",
    base: process.env.GROQ_BASE_URL || "https://api.groq.com/openai/v1",
    key: process.env.GROQ_API_KEY,
    model: process.env.GROQ_MODEL || "llama3-8b-8192",
    headers: (key: string) => ({ Authorization: `Bearer ${key}` }),
  },
  {
    name: "openrouter",
    base: process.env.OPENROUTER_BASE_URL || "https://openrouter.ai/api/v1",
    key: process.env.OPENROUTER_API_KEY,
    model: process.env.OPENROUTER_MODEL || "gpt-4o-mini",
    headers: (key: string) => ({
      Authorization: `Bearer ${key}`,
      "HTTP-Referer": process.env.SITE_URL || "http://localhost:3000",
      "X-Title": "Aarushi Digital Twin",
    }),
  },
];

export async function GET(req: Request) {
  const url = new URL(req.url);
  const providerOverride = url.searchParams.get("provider") || null;
  const view = PROVIDERS.map((p) => ({
    name: p.name,
    base: p.base,
    hasKey: !!p.key,
    model: p.model,
  }));
  return new Response(JSON.stringify({ providerOverride, providers: view }, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  let body: any = {};
  try {
    body = await req.json();
  } catch {}

  const url = new URL(req.url);
  const providerOverride = url.searchParams.get("provider");

  const { messages = [], facts = [] } = body || {};
  const basePayload = (model: string) => ({
    model,
    stream: true,
    temperature: 0.5,
    max_tokens: 512,
    messages: buildMessages(messages, facts),
  });

  let active = PROVIDERS.filter((p) => !!p.key);
  if (providerOverride) {
    active = active
      .filter((p) => p.name === providerOverride)
      .concat(active.filter((p) => p.name !== providerOverride));
  }

  if (active.length === 0) {
    return new Response(
      "No provider configured. Set OpenAI or a fallback (GROQ_API_KEY / OPENROUTER_API_KEY) in .env.local.",
      { status: 500 }
    );
  }

  for (const p of active) {
    try {
      const res = await fetch(`${p.base}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream",
          ...p.headers(p.key as string),
        },
        body: JSON.stringify(basePayload(p.model as string)),
      });

      if (res.ok && res.body) {
        const stream = new ReadableStream({
          async start(controller) {
            const reader = res.body!.getReader();
            const decoder = new TextDecoder();
            let buf = "";
            try {
              while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                buf += decoder.decode(value, { stream: true });
                const parts = buf.split("\n\n");
                buf = parts.pop() || "";
                for (const chunk of parts) {
                  for (const line of chunk.split("\n")) {
                    const t = line.trim();
                    if (!t.startsWith("data:")) continue;
                    const data = t.slice(5).trim();
                    if (data === "[DONE]") continue;
                    try {
                      const json = JSON.parse(data);
                      const token = json.choices?.[0]?.delta?.content || "";
                      if (token) controller.enqueue(new TextEncoder().encode(token));
                    } catch {}
                  }
                }
              }
            } finally {
              controller.close();
            }
          },
        });

        return new Response(stream, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-cache",
            "X-Twin-Provider": p.name,
          },
        });
      }

      const text = await res.text().catch(() => "");
      if (isRetryable(res.status, text)) {
        console.warn(`[twin] ${p.name} retryable ${res.status}: ${redact(text)}`);
        continue;
      }
      return new Response(text || "Upstream error", { status: res.status || 500 });
    } catch (err: any) {
      console.warn(`[twin] ${p.name} network error:`, redact(String(err?.message || err)));
      continue;
    }
  }

  return new Response("All providers failed or not configured.", { status: 503 });
}
