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
    const { error } = await supabase.from("contact_messages").insert(parsed.data);
    setLoading(false);
    if (error) {
      toast.error("Failed to send. Please try again.");
      return;
    }
    toast.success("Message sent! I'll be in touch soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's build something.</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md">
            Open to AI engineering, backend, and consulting opportunities. Drop a message and I'll
            reply within a day.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <a href="mailto:thihaa110@gmail.com" className="hover:text-primary transition-smooth">
                thihaa110@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <span>+66 935 078 500</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <span>Chiang Mai, Thailand</span>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="card-elegant border border-border rounded-2xl p-6 md:p-8 space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="w-full px-4 py-3 rounded-md bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-smooth"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="w-full px-4 py-3 rounded-md bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-smooth"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Message</label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={2000}
              className="w-full px-4 py-3 rounded-md bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-smooth resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-smooth glow disabled:opacity-50"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};
