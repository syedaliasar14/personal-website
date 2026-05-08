import Footer from "@/components/footer";
import Header from "@/components/header";
import ContactForm from "./contact-form";
import { Send } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full items-center px-4 py-24 max-w-6xl flex-grow">
        <section className="flex flex-col radial-card items-center max-w-3xl w-full">
          <span className="inline-flex text-pill mb-10">
            Contact
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground flex">
            Get in Touch
            <Send className="ml-2 text-green-300" size={20} strokeWidth={1.5} />
          </h1>
          <p className="text-slate-300 mb-8 text-center text-balance">Ready to work with me? Fill out the form below and I'll get back to you as soon as possible.</p>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}