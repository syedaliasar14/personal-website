"use client";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { Controller } from "react-hook-form";
import { Field, FieldGroup, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, LoaderCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
})

export default function ContactForm({ submitButtonText }: { submitButtonText?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof schema>) {
    setIsSubmitting(true);
    setSubmitted(false);
    setSubmitError(null);
    try {
      await axios.post("/api/contact", data);
      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitError("The message could not be sent. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="relative z-10 flex w-full flex-col text-foreground max-w-2xl" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className="gap-5">

        <Controller name="name" control={form.control} render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name} className="uppercase tracking-[0.18em]">Name</FieldLabel>
            <Input {...field} id={field.name} aria-invalid={fieldState.invalid} autoComplete="off" placeholder="Your Name" />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
        />

        <Controller name="email" control={form.control} render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name} className="uppercase tracking-[0.18em]">Email</FieldLabel>
            <Input {...field} type="email" id={field.name} aria-invalid={fieldState.invalid} autoComplete="off" placeholder="you@email.com" />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
        />

        <Controller name="message" control={form.control} render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name} className="uppercase tracking-[0.18em]">Project Details</FieldLabel>
            <Textarea {...field} id={field.name} aria-invalid={fieldState.invalid} rows={6} placeholder="What do you need help with, and what outcome are you aiming for?" />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
        />

      </FieldGroup>

      <button type="submit" className="mt-8 inline-flex items-center justify-center gap-2 self-start rounded-full border border-green-300 bg-green-300 px-6 py-3 text-sm font-medium uppercase tracking-[0.24em] text-slate-900 transition-colors duration-300 hover:bg-transparent hover:text-green-300 disabled:cursor-not-allowed disabled:opacity-70" disabled={isSubmitting}>
        {isSubmitting && <LoaderCircle className="h-4 w-4 animate-spin" />}
        {isSubmitting ? "Sending..." : submitButtonText || "Send Message"}
      </button>
      {submitted && (
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-green-200">
          <CheckCircle2 className="h-4 w-4" />
          Message sent successfully. I&apos;ll get back to you soon.
        </p>
      )}
      {submitError && <p className="mt-4 text-sm text-rose-300">{submitError}</p>}
    </form>
  );
}