import React, { useState } from "react";
import { MessageCircle, Phone, Mail, Send, MapPin, Clock } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { PROPERTY, LOCATION_STATS } from "../data/site";
import { useToast } from "../hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    checkin: "",
    checkout: "",
    guests: 2,
    room: "",
    message: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Missing details", description: "Please share at least your name and phone.", variant: "destructive" });
      return;
    }
    const lines = [
      `🏨 *Enquiry — Rivelle Boutique Stays*`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
    ];
    if (form.email) lines.push(`*Email:* ${form.email}`);
    if (form.guests) lines.push(`*Guests:* ${form.guests}`);
    if (form.checkin) lines.push(`*Check-in:* ${form.checkin}`);
    if (form.checkout) lines.push(`*Check-out:* ${form.checkout}`);
    if (form.room) lines.push(`*Room preference:* ${form.room}`);
    if (form.message) lines.push(``, `*Message:*`, form.message);
    lines.push(``, `Please share availability and tariff. Thank you!`);
    const msg = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${PROPERTY.whatsapp}?text=${msg}`, "_blank");
    toast({ title: "Opening WhatsApp", description: "Your enquiry is ready to send." });
  };

  return (
    <div className="bg-blush min-h-screen">
      <PageHeader
        eyebrow="CONTACT & ENQUIRY"
        title={<>Talk to us <span className="italic text-rose">directly.</span></>}
        subtitle="For the quickest reply, message us on WhatsApp. Prefer email? Fill the form and we’ll respond within a few hours."
      />

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left: contact channels */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href={`https://wa.me/${PROPERTY.whatsapp}?text=${encodeURIComponent("Hi Rivelle, I\u2019d like to enquire about a stay.")}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 rounded-sm border transition-all hover:-translate-y-0.5 bg-rose/10 border-rose/25 hover:bg-rose/15"
            >
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 bg-rose text-cream">
                <MessageCircle size={18} />
              </div>
              <div>
                <div className="text-[10px] tracking-widest-3 text-ink/55 mb-1">WHATSAPP · FASTEST</div>
                <div className="font-display text-lg text-ink">Chat with the property</div>
              </div>
            </a>
            <a href={`tel:${PROPERTY.phoneRaw}`} className="flex items-center gap-4 p-5 rounded-sm border transition-all hover:-translate-y-0.5 bg-cream/70 border-rose/10 hover:border-rose/40">
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 bg-blushSoft text-rose">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-[10px] tracking-widest-3 text-ink/55 mb-1">PHONE</div>
                <div className="font-num text-lg text-ink">{PROPERTY.phone}</div>
              </div>
            </a>
            <a href={`mailto:${PROPERTY.email}`} className="flex items-center gap-4 p-5 rounded-sm border transition-all hover:-translate-y-0.5 bg-cream/70 border-rose/10 hover:border-rose/40">
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 bg-blushSoft text-rose">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-[10px] tracking-widest-3 text-ink/55 mb-1">EMAIL</div>
                <div className="font-num text-lg text-ink">{PROPERTY.email}</div>
              </div>
            </a>

            {/* Address */}
            <div className="p-6 rounded-sm bg-cream/70 border border-rose/10 mt-6">
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={16} className="text-rose mt-0.5" />
                <div>
                  <div className="text-[10px] tracking-widest-3 text-ink/55 mb-1">ADDRESS</div>
                  <div className="text-sm text-ink/80 leading-relaxed">{PROPERTY.address}<br />{PROPERTY.city}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-rose mt-0.5" />
                <div>
                  <div className="text-[10px] tracking-widest-3 text-ink/55 mb-1">FRONT DESK</div>
                  <div className="text-sm text-ink/80">Open 24 × 7</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              {LOCATION_STATS.map((s) => (
                <div key={s.label} className="p-4 rounded-sm bg-cream/50 border border-rose/10">
                  <div className="text-[9px] tracking-widest-3 text-ink/50 mb-1">{s.label}</div>
                  <div className="font-num text-lg text-rose">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={onSubmit} className="lg:col-span-3 bg-cream/80 p-8 md:p-10 rounded-sm shadow-[0_20px_50px_-30px_rgba(109,30,25,0.3)] border border-rose/10">
            <h2 className="font-display text-3xl text-ink mb-2">Send us a note</h2>
            <p className="text-ink/60 text-sm mb-8">Fill this quick form and we’ll get back to you on WhatsApp.</p>

            <div className="grid md:grid-cols-2 gap-4">
              <Field label="FULL NAME *" name="name" value={form.name} onChange={onChange} required />
              <Field label="PHONE *" name="phone" value={form.phone} onChange={onChange} required />
              <Field label="EMAIL" name="email" type="email" value={form.email} onChange={onChange} />
              <div>
                <label className="text-[10px] tracking-widest-3 text-ink/55 mb-2 block">GUESTS</label>
                <input type="number" name="guests" min="1" max="8" value={form.guests} onChange={onChange} className="field-warm" />
              </div>
              <Field label="CHECK-IN" name="checkin" type="date" value={form.checkin} onChange={onChange} />
              <Field label="CHECK-OUT" name="checkout" type="date" value={form.checkout} onChange={onChange} />

              <div className="md:col-span-2">
                <label className="text-[10px] tracking-widest-3 text-ink/55 mb-2 block">ROOM PREFERENCE (OPTIONAL)</label>
                <select name="room" value={form.room} onChange={onChange} className="field-warm cursor-pointer">
                  <option value="">No preference</option>
                  <option value="Deluxe Room">Deluxe Room</option>
                  <option value="Super Deluxe Room">Super Deluxe Room</option>
                  <option value="The Suite">The Suite</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-[10px] tracking-widest-3 text-ink/55 mb-2 block">MESSAGE (OPTIONAL)</label>
                <textarea name="message" value={form.message} onChange={onChange} rows={4} className="field-warm resize-none" placeholder="Anything special we should know?" />
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap mt-8 pt-6 border-t border-rose/15">
              <button type="submit" className="btn-rose inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[11px] tracking-widest-2 font-medium">
                <Send size={13} />
                SEND ENQUIRY VIA WHATSAPP
              </button>
              <a href={`https://wa.me/${PROPERTY.whatsapp}`} target="_blank" rel="noreferrer" className="text-[11px] tracking-widest-2 text-ink/70 hover:text-rose underline underline-offset-4 decoration-ink/20">
                OR MESSAGE US DIRECTLY
              </a>
            </div>
          </form>
        </div>

        {/* Map */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 mt-16">
          <div className="aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden border border-rose/15 reveal">
            <iframe
              title="Rivelle Boutique Stays map"
              src="https://www.google.com/maps?q=Rivelle+Boutique+Stays+Jaipur,+15+A+Ajmer+Rd+Shiv+Marg+Gopalbari+Jaipur&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const Field = ({ label, name, type = "text", value, onChange, required }) => (
  <div>
    <label className="text-[10px] tracking-widest-3 text-ink/55 mb-2 block">{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} required={required} className="field-warm" />
  </div>
);

export default ContactPage;
