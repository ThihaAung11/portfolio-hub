import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("contact_messages").insert(parsed.data as { name: string; email: string; message: string });
    setLoading(false);
    if (error) {
      toast.error("Failed to send. Please try again.");
      return;
    }
    toast.success("Message sent! I'll be in touch soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-divider bg-secondary/60 py-16 md:py-20">
      <div className="page-shell grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">Let's build something.</h2>
          <p className="mb-8 max-w-md text-lg text-muted-foreground">
            Open to AI engineering, backend, and consulting opportunities. Drop a message and I'll
            reply within a day.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card">
                <Mail className="h-4 w-4" />
              </div>
              <a href="mailto:thihaa110@gmail.com" className="text-foreground underline decoration-primary decoration-2 underline-offset-4 transition-smooth hover:text-primary">
                thihaa110@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card">
                <Phone className="h-4 w-4" />
              </div>
              <span>+66 935 078 500</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card">
                <MapPin className="h-4 w-4" />
              </div>
              <span>Chiang Mai, Thailand</span>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="sketch-card space-y-4 p-6">
          <div>
            <label className="mb-2 block font-label text-sm font-bold">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="retro-input"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-2 block font-label text-sm font-bold">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="retro-input"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-2 block font-label text-sm font-bold">Message</label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={2000}
              className="retro-input resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button type="submit" disabled={loading} className="retro-button w-full disabled:translate-x-0 disabled:translate-y-0 disabled:opacity-50">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};
