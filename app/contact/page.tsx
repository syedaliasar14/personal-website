import Footer from "@/components/footer";
import Header from "@/components/header";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full items-center px-4 pb-24 pt-16 max-w-6xl flex-grow">
        <section className="flex flex-col radial-card items-center max-w-3xl w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">Get in Touch</h1>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}