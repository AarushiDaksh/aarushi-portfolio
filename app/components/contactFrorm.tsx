// components/ContactForm.tsx
"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = (form.elements[0] as HTMLInputElement).value;
    const email = (form.elements[1] as HTMLInputElement).value;
    const message = (form.elements[2] as HTMLTextAreaElement).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Something went wrong");

      setFormStatus("success");
      setFormMessage("Message sent successfully!");
      form.reset();
    } catch (err) {
      console.error(err);
      setFormStatus("error");
      setFormMessage("Failed to send message.");
    }
  };

  return (
    <div className="mt-14">
      <h2 className="text-xl mb-6 text-center text-neutral-800 dark:text-neutral-200">
        🤝 Let's Connect
      </h2>

      {formStatus !== "idle" && (
        <div
          className={`text-center mb-4 px-4 py-2 text-sm rounded ${
            formStatus === "success"
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {formMessage}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 text-sm border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 text-sm border rounded"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          required
          className="w-full px-4 py-2 text-sm border rounded"
        />
        <button
          type="submit"
          className="w-full text-sm px-4 py-2 rounded bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:shadow-md hover:shadow-orange-300/30 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
