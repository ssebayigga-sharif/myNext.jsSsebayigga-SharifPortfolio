"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  Send,
  Loader2,
  User,
  Mail,
  MessageSquare,
  Tag,
  AlertTriangle,
} from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/constants";

const contactSchema = z.object({
  from_name: z.string().min(2, "Name must be at least 2 characters"),
  from_email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
const isEmailConfigured = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY,
);

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (!isEmailConfigured) {
      toast.error(
        `The contact form is not configured yet. Please email me directly at ${CONTACT_EMAIL}`,
        {
          duration: 7000,
          style: {
            background: "#1f1117",
            color: "#fce7f3",
            border: "1px solid #be185d",
          },
        },
      );
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.from_name,
          from_email: data.from_email,
          reply_to: data.from_email,
          subject: data.subject,
          message: data.message,
          to_name: "Ssebayigga Sharif",
        },
        EMAILJS_PUBLIC_KEY,
      );

      toast.success(
        "Message sent! I&apos;ll get back to you within 24 hours.",
        {
          duration: 5000,
          style: {
            background: "#1e1b4b",
            color: "#e0e7ff",
            border: "1px solid #4f46e5",
          },
        },
      );
      reset();
    } catch {
      toast.error(
        `Message failed to send. Please email me directly at ${CONTACT_EMAIL}`,
        {
          duration: 7000,
          style: {
            background: "#1f1117",
            color: "#fce7f3",
            border: "1px solid #be185d",
          },
        },
      );
    } finally {
      setIsLoading(false);
    }
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
      {!isEmailConfigured && (
        <div className="rounded-3xl border border-amber-700/60 bg-amber-950/30 p-4 text-sm text-amber-100">
          <div className="flex items-start gap-2 mb-2">
            <AlertTriangle size={16} className="text-amber-300 shrink-0" />
            <p className="font-semibold">
              Contact form configuration is required.
            </p>
          </div>
          <p>
            Please add your EmailJS credentials to the project environment
            variables to enable form delivery:
          </p>
          <ul className="mt-3 space-y-1 text-amber-200 list-disc list-inside">
            <li>NEXT_PUBLIC_EMAILJS_SERVICE_ID</li>
            <li>NEXT_PUBLIC_EMAILJS_TEMPLATE_ID</li>
            <li>NEXT_PUBLIC_EMAILJS_PUBLIC_KEY</li>
          </ul>
          <p className="mt-2">
            Until then, clients can email {CONTACT_EMAIL} directly.
          </p>
        </div>
      )}

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
          {...register("from_name")}
        />
        {errors.from_name && (
          <p className={errorClass}>{errors.from_name.message}</p>
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
          {...register("from_email")}
        />
        {errors.from_email && (
          <p className={errorClass}>{errors.from_email.message}</p>
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
          {...register("subject")}
        />
        {errors.subject && (
          <p className={errorClass}>{errors.subject.message}</p>
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
          {...register("message")}
        />
        {errors.message && (
          <p className={errorClass}>{errors.message.message}</p>
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
