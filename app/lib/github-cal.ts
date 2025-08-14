// lib/github-calendar.ts
const GQL = `#graphql
query($login:String!) {
  user(login:$login) {
    contributionsCollection {
      contributionCalendar {
        weeks { contributionDays { date contributionCount } }
      }
    }
  }
}`;

export type Day = { date: string; count: number };

export async function getGitHubCalendar(login: string): Promise<Day[]> {
  const r = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN!}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: GQL, variables: { login } }),
    cache: "no-store",
  });
  if (!r.ok) throw new Error("GitHub GraphQL failed");
  const j = await r.json();
  const weeks = j.data.user.contributionsCollection.contributionCalendar.weeks as {
    contributionDays: { date: string; contributionCount: number }[];
  }[];
  return weeks.flatMap(w =>
    w.contributionDays.map(d => ({ date: d.date, count: d.contributionCount }))
  );
}
