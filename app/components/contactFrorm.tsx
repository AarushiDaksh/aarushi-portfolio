"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setFormStatus("success");
        reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-14">
      <h2 className="text-xl mb-6 text-center text-neutral-800 dark:text-neutral-200">
        🤝 Let's Connect
      </h2>

      {formStatus !== "idle" && (
                <div
          className={`text-center mb-4 px-4 py-2 text-sm rounded max-w-xl mx-auto border ${
            formStatus === "success"
              ? "bg-white text-black border-black dark:bg-zinc-900 dark:text-white dark:border-white"
              : "bg-white text-black border-black dark:bg-zinc-900 dark:text-white dark:border-white"
          }`}
        >
          {formStatus === "success"
            ? "Your message has been sent!"
            : "Failed to send message. Please try again."}
        </div>

      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          {...register("name")}
          className="w-full px-4 py-2 text-sm border rounded bg-white dark:bg-zinc-900 text-black dark:text-white"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

        <input
          type="email"
          placeholder="Your Email"
          {...register("email")}
          className="w-full px-4 py-2 text-sm border rounded bg-white dark:bg-zinc-900 text-black dark:text-white"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <textarea
          placeholder="Your Message - lets connect and  work together"
          rows={4}
          {...register("message")}
          className="w-full px-4 py-2 text-sm border rounded bg-white dark:bg-zinc-900 text-black dark:text-white"
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full text-sm px-4 py-2 rounded bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:shadow-md hover:shadow-orange-300/30 transition"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
