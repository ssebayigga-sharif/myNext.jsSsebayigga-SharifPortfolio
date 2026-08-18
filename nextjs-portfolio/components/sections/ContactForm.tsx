"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Send, Loader2, User, Mail, MessageSquare, Tag } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/constants";
import { toastTheme } from "@/lib/toast.theme";
import {
  contactSchema,
  submitContactForm,
  type ContactFormData,
} from "@/lib/contect.services";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // Cancel any in-flight request if the component unmounts.
  useEffect(() => {
    return () => abortControllerRef.current?.abort();
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    abortControllerRef.current = new AbortController();

    const result = await submitContactForm(
      data,
      abortControllerRef.current.signal,
    );

    switch (result.status) {
      case "disabled":
        toast.error(
          `The contact form is not configured yet. Please email me directly at ${CONTACT_EMAIL}`,
          { duration: 7000, style: toastTheme.error },
        );
        break;
      case "success":
        toast.success("Message sent! I'll get back to you within 24 hours.", {
          duration: 5000,
          style: toastTheme.success,
        });
        reset();
        break;
      case "error":
        if (result.message !== "aborted") {
          toast.error(
            `Message failed to send. Please email me directly at ${CONTACT_EMAIL}`,
            { duration: 7000, style: toastTheme.error },
          );
        }
        break;
    }

    setIsLoading(false);
  };

  const inputClass =
    "w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200";
  const errorClass = "text-red-400 text-xs mt-1 flex items-center gap-1";
  const labelClass =
    "text-gray-300 text-sm font-medium flex items-center gap-2 mb-1.5";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
      noValidate
    >
      <div>
        <label htmlFor="from_name" className={labelClass}>
          <User size={14} className="text-indigo-400" />
          Your Name
        </label>
        <input
          id="from_name"
          type="text"
          placeholder="Sharif Ssebayigga"
          className={inputClass}
          aria-invalid={!!errors.from_name}
          aria-describedby={errors.from_name ? "from_name-error" : undefined}
          {...register("from_name")}
        />
        {errors.from_name && (
          <p id="from_name-error" className={errorClass} role="alert">
            {errors.from_name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="from_email" className={labelClass}>
          <Mail size={14} className="text-indigo-400" />
          Your Email
        </label>
        <input
          id="from_email"
          type="email"
          placeholder="sharifsseba@example.com"
          className={inputClass}
          aria-invalid={!!errors.from_email}
          aria-describedby={errors.from_email ? "from_email-error" : undefined}
          {...register("from_email")}
        />
        {errors.from_email && (
          <p id="from_email-error" className={errorClass} role="alert">
            {errors.from_email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          <Tag size={14} className="text-indigo-400" />
          Subject
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Project inquiry, collaboration, etc."
          className={inputClass}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          {...register("subject")}
        />
        {errors.subject && (
          <p id="subject-error" className={errorClass} role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          <MessageSquare size={14} className="text-indigo-400" />
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell me about your project, timeline, or anything else..."
          className={`${inputClass} resize-none`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className={errorClass} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-900/40 text-sm mt-2"
      >
        {isLoading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
