import { z } from "zod";

const contactSchema = z.object({
  from_name: z.string().min(2, "Name must be at least 2 characters"),
  from_email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

const apiResponseSchema = z.object({
  error: z.string().optional(),
});

export type ContactResult =
  | { status: "disabled" }
  | { status: "success" }
  | { status: "error"; message: string };

export const isContactFormEnabled =
  (process.env.NEXT_PUBLIC_CONTACT_FORM_ENABLED ?? "").toLowerCase() === "true";

export { contactSchema };

/**
 * Submits the contact form. Never throws — always resolves to a ContactResult
 * so callers don't need try/catch and can be tested with plain mocks.
 */
export async function submitContactForm(
  data: ContactFormData,
  signal?: AbortSignal,
): Promise<ContactResult> {
  if (!isContactFormEnabled) {
    return { status: "disabled" };
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      signal,
    });

    const rawJson: unknown = await response.json().catch(() => null);
    const parsed = apiResponseSchema.safeParse(rawJson);

    if (!response.ok) {
      const message =
        parsed.success && parsed.data.error
          ? parsed.data.error
          : `Request failed with status ${response.status}`;
      return { status: "error", message };
    }

    return { status: "success" };
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      // Component unmounted or user navigated away — not a real error.
      return { status: "error", message: "aborted" };
    }
    console.error("Contact form submission failed:", err);
    return {
      status: "error",
      message: err instanceof Error ? err.message : "Unknown network error",
    };
  }
}
