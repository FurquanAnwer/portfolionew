import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data);
        alert("Failed to send message!");
        return;
      }

      setSubmitted(true);
      setFormData({ email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card rounded-2xl p-8">
      {submitted ? (
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
              <Send size={24} className="text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Message Sent!
            </h3>
            <p className="text-muted-foreground">
              Thank you for reaching out. I&apos;ll get back to you soon.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full px-4 py-3 bg-accent/30 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="you@example.com"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              value={formData.subject}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, subject: e.target.value }))
              }
              className="w-full px-4 py-3 bg-accent/30 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="What's this about?"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              className="w-full px-4 py-3 bg-accent/30 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Your message..."
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
          >
            <Send size={18} />
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
