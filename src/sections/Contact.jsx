import {
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/Button";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // success or error
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // to prevent the page reload
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // sending the form data through EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        // will be rendered if the mail was sent
        type: "success",
        message:
          "Deine Nachricht wurde versendet! Ich werde zeitnah mit dir in Kontakt treten.",
      });

      setFormData({ name: "", email: "", message: "" }); // resetting the form
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        // will be rendered if sending the mail failed
        type: "error",
        message:
          error.text ||
          "Leider ist ein Fehler aufgetreten. Bitte versuche es später erneut.",
      });
    } finally {
      setIsLoading(false); // to reset the button text and enable a new interaction with it
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-(--color-secondary-foreground)">
            Let's,
            <span className="font-serif italic font-normal text-white">
              {" "}
              build together.
            </span>
          </h2>
          <p className="text-(--color-muted-foreground) animate-fade-in animation-delay-200">
            <span className="text-(--color-secondary-foreground) text-sm font-md tracking-wider uppercase animate-fade-in">
              Interested?{" "}
            </span>
            Just send me a message!
          </p>
        </div>

        <div className="sm:w-full md:w-5/12 grid gap-12 max-5xl mx-auto ">
          <div className="glass p-8 rounded-3xl border border-(--color-primary) animate-fade-in animation-delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  required
                  placeholder="Your name..."
                  type="text"
                  className="w-full px-4 py-3 bg-(--color-surface) rounded-xl border border-(--color-border) focus:border-(--color-primary) outline-none transition-all"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  required
                  placeholder="your@email.com"
                  type="email"
                  className="w-full px-4 py-3 bg-(--color-surface) rounded-xl border border-(--color-border) focus:border-(--color-primary) outline-none transition-all"
                  value={formData.email}
                  // When an input occurs, setFormData creates a new object.
                  // The spread operator (...) preserves unchanged fields, then the updated field is set from e.target.value.
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  id="message"
                  required
                  placeholder="Got a message?"
                  className="w-full px-4 py-3 bg-(--color-surface) rounded-xl border border-(--color-border) focus:border-(--color-primary) outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button
                type="submit"
                className="flex w-full items-center justify-center"
                size="lg"
                disabled={isLoading} // to prevent spamming
              >
                {isLoading ? ( // If `isLoading` is true show sending text, otherwise show standard button text
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2" />
                  </>
                )}
              </Button>

              {submitStatus.type && ( // success || error
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-500"
                      : "bg-red-500/10 border border-red-500/20 text-red-500"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
        </div>
      </div>
    </section>
  );
};
