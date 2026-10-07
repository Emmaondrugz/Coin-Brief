"use client";

import { useState, type FormEvent } from "react";

type NewsletterFormProps = {
  successLabel?: boolean;
  loadingLabel?: boolean;
};

export default function NewsletterForm({
  successLabel = false,
  loadingLabel = false,
}: NewsletterFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "subscribed">(
    "idle",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status !== "idle") return;

    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("subscribed");
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-80">
      <div className="relative flex h-12 w-full rounded-full bg-[#1a1a1a]">
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Email Address"
          aria-label="Email address"
          disabled={status !== "idle"}
          className="h-full w-full rounded-[inherit] bg-transparent py-2 pl-5 pr-14 text-white outline-0 placeholder:text-sm placeholder:text-gray-400 disabled:opacity-70"
        />
        <button
          type="submit"
          aria-label={
            status === "subscribed" ? "Subscribed" : "Subscribe by email"
          }
          disabled={status !== "idle"}
          className={`absolute right-1 top-1 flex h-10 min-w-12 items-center justify-center rounded-full bg-white text-black disabled:cursor-default ${
            (status === "subscribed" && successLabel) ||
            (status === "loading" && loadingLabel)
              ? "gap-2 px-3"
              : ""
          }`}
        >
          {status === "loading" ? (
            <svg
              aria-hidden="true"
              className="h-5 w-5 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="opacity-75"
                d="M21 12a9 9 0 0 0-9-9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          ) : status === "subscribed" ? (
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          )}
          {status === "loading" && loadingLabel && (
            <span className="whitespace-nowrap text-sm">Loading...</span>
          )}
          {status === "subscribed" && successLabel && (
            <span className="whitespace-nowrap text-sm">Subscribed</span>
          )}
        </button>
      </div>
      <span aria-live="polite" className="sr-only">
        {status === "loading" ? "Loading subscription" : ""}
        {status === "subscribed" ? "Subscribed" : ""}
      </span>
    </form>
  );
}
