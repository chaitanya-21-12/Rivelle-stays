import React, { useState } from "react";
import { MessageCircle, Phone, Mail, Send } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    checkin: "",
    checkout: "",
    room: "",
    message: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast({ title: "Missing details", description: "Please fill your name, phone and email.", variant: "destructive" });
      return;
    }
    toast({ title: "Enquiry sent", description: "Thank you \u2014 we will get back within a few hours." });
    setForm({ name: "", phone: "", email: "", checkin: "", checkout: "", room: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-muted/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="h-px w-8 bg-gerua/70" />
            <span className="text-[11px] tracking-widest-3 text-gerua font-medium">CONTACT & ENQUIRY</span>
            <span className="h-px w-8 bg-gerua/70" />
          </div>
          <h2 className="font-display text-ink text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
            Talk to us <span className="italic text-gerua-dark">directly.</span>
          </h2>
          <p className="text-ink/70">
            For the quickest reply, message us on WhatsApp. Prefer email? Send the form and we'll
            respond within a few hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact channels */}
          <div className="lg:col-span-2 space-y-4 reveal">
            <ContactCard
              icon={<MessageCircle size={18} />}
              label="WHATSAPP"
              value="Chat with the property"
              accent
            />
            <ContactCard icon={<Phone size={18} />} label="PHONE" value="[TO CONFIRM]" />
            <ContactCard icon={<Mail size={18} />} label="EMAIL" value="[OWNER_EMAIL]" />
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-3 bg-background p-8 md:p-10 rounded-sm shadow-[0_20px_50px_-30px_rgba(28,21,18,0.3)] reveal">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <Field label="FULL NAME" name="name" value={form.name} onChange={onChange} required />
              <Field label="PHONE" name="phone" value={form.phone} onChange={onChange} required />
              <Field label="EMAIL" name="email" type="email" value={form.email} onChange={onChange} required />
              <div />
              <Field label="CHECK-IN" name="checkin" type="date" value={form.checkin} onChange={onChange} />
              <Field label="CHECK-OUT" name="checkout" type="date" value={form.checkout} onChange={onChange} />

              <div className="md:col-span-2">
                <label className="block text-[10px] tracking-widest-3 text-ink/55 mb-2">
                  ROOM PREFERENCE (OPTIONAL)
                </label>
                <select
                  name="room"
                  value={form.room}
                  onChange={onChange}
                  className="input-warm bg-transparent appearance-none cursor-pointer"
                >
                  <option value="">No preference</option>
                  <option value="deluxe">Deluxe Room</option>
                  <option value="super">Super Deluxe Room</option>
                  <option value="suite">The Suite</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-[10px] tracking-widest-3 text-ink/55 mb-2">
                  MESSAGE (OPTIONAL)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={3}
                  className="input-warm resize-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap mt-8 pt-6 border-t border-ink/10">
              <button
                type="submit"
                className="btn-gerua inline-flex items-center gap-2 rounded-full px-7 py-3 text-[11px] tracking-widest-2 font-medium"
              >
                <Send size={13} />
                SEND ENQUIRY
              </button>
              <a
                href="#whatsapp"
                onClick={(e) => { e.preventDefault(); toast({ title: "WhatsApp", description: "Opening chat..." }); }}
                className="text-[11px] tracking-widest-2 text-ink/70 hover:text-gerua-dark underline underline-offset-4 decoration-ink/20"
              >
                OR WHATSAPP US INSTEAD
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, label, value, accent }) => (
  <a
    href="#c"
    onClick={(e) => e.preventDefault()}
    className={`flex items-center gap-4 p-5 rounded-sm border transition-all hover:-translate-y-0.5 ${
      accent
        ? "bg-gerua/10 border-gerua/25 hover:bg-gerua/15"
        : "bg-background border-ink/10 hover:border-gerua/40"
    }`}
  >
    <div className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 ${accent ? "bg-gerua text-cream" : "bg-muted text-gerua-dark"}`}>
      {icon}
    </div>
    <div>
      <div className="text-[10px] tracking-widest-3 text-ink/55 mb-1">{label}</div>
      <div className="font-display text-lg text-ink">{value}</div>
    </div>
  </a>
);

const Field = ({ label, name, type = "text", value, onChange, required }) => (
  <div>
    <label className="block text-[10px] tracking-widest-3 text-ink/55 mb-2">{label}{required && <span className="text-gerua-dark">*</span>}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="input-warm"
    />
  </div>
);

export default Contact;
