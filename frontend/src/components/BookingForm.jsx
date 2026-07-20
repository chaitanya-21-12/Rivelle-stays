import React, { useState, useMemo } from "react";
import { Calendar, Users, MessageCircle, ArrowRight, Bed } from "lucide-react";
import { PROPERTY } from "../data/site";
import { useToast } from "../hooks/use-toast";

const BookingForm = ({ room }) => {
  const { toast } = useToast();
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  const [guests, setGuests] = useState(2);
  const [checkin, setCheckin] = useState(today);
  const [checkout, setCheckout] = useState(tomorrow);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const nights = useMemo(() => {
    if (!checkin || !checkout) return 0;
    const diff = (new Date(checkout) - new Date(checkin)) / 86400000;
    return diff > 0 ? diff : 0;
  }, [checkin, checkout]);

  const buildMessage = () => {
    const lines = [
      `🏨 *New Enquiry — Rivelle Boutique Stays*`,
      ``,
      `*Room:* ${room.name} (Room ${room.number})`,
      `*Guests:* ${guests} ${guests === 1 ? "guest" : "guests"}`,
      `*Check-in:* ${checkin}`,
      `*Check-out:* ${checkout}`,
      `*Nights:* ${nights}`,
    ];
    if (name) lines.push(`*Name:* ${name}`);
    if (phone) lines.push(`*Phone:* ${phone}`);
    lines.push(``, `Please share availability and tariff. Thank you!`);
    return lines.join("\n");
  };

  const handleEnquire = () => {
    if (nights <= 0) {
      toast({
        title: "Please check your dates",
        description: "Check-out must be after check-in.",
        variant: "destructive",
      });
      return;
    }
    const msg = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${PROPERTY.whatsapp}?text=${msg}`, "_blank");
    toast({
      title: "Opening WhatsApp",
      description: `Sending your enquiry for ${room.name}`,
    });
  };

  return (
    <div className="bg-cream/80 backdrop-blur border border-rose/15 rounded-lg p-6 md:p-7 shadow-[0_20px_50px_-25px_rgba(109,30,25,0.25)]">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <div className="text-[10px] tracking-widest-3 text-rose/70 mb-1.5">STARTING FROM</div>
          <div className="font-display text-2xl md:text-3xl text-rose">{room.priceLabel}</div>
          <div className="text-[10px] tracking-widest-3 text-ink/50 mt-1">{room.priceHint}</div>
        </div>
        <div className="flex items-center gap-1.5 text-rose bg-rose/10 rounded-full px-3 py-1.5 flex-shrink-0 whitespace-nowrap">
          <Bed size={12} />
          <span className="text-[10px] tracking-widest-2 font-medium">{room.bed}</span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Guests */}
        <div>
          <label className="flex items-center gap-2 text-[10px] tracking-widest-3 text-ink/55 mb-2">
            <Users size={12} /> NUMBER OF GUESTS
          </label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setGuests(Math.max(1, guests - 1))}
              className="w-9 h-9 rounded-full border border-rose/30 text-rose hover:bg-rose hover:text-cream transition-colors"
              aria-label="Decrease guests"
            >
              –
            </button>
            <div className="flex-1 field-warm text-center font-num text-lg">
              {guests}
            </div>
            <button
              type="button"
              onClick={() => setGuests(Math.min(8, guests + 1))}
              className="w-9 h-9 rounded-full border border-rose/30 text-rose hover:bg-rose hover:text-cream transition-colors"
              aria-label="Increase guests"
            >
              +
            </button>
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="flex items-center gap-2 text-[10px] tracking-widest-3 text-ink/55 mb-2">
              <Calendar size={12} /> CHECK-IN
            </label>
            <input
              type="date"
              value={checkin}
              min={today}
              onChange={(e) => setCheckin(e.target.value)}
              className="field-warm"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-[10px] tracking-widest-3 text-ink/55 mb-2">
              <Calendar size={12} /> CHECK-OUT
            </label>
            <input
              type="date"
              value={checkout}
              min={checkin || today}
              onChange={(e) => setCheckout(e.target.value)}
              className="field-warm"
            />
          </div>
        </div>

        {/* Optional name / phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-[10px] tracking-widest-3 text-ink/55 mb-2 block">NAME (OPTIONAL)</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="field-warm"
            />
          </div>
          <div>
            <label className="text-[10px] tracking-widest-3 text-ink/55 mb-2 block">PHONE (OPTIONAL)</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 …"
              className="field-warm"
            />
          </div>
        </div>

        {/* Nights summary */}
        <div className="flex items-center justify-between text-[12px] pt-3 border-t border-rose/15">
          <span className="text-ink/60">Total nights</span>
          <span className="font-num text-lg text-rose">{nights || "—"}</span>
        </div>

        {/* Submit */}
        <button
          type="button"
          onClick={handleEnquire}
          disabled={nights <= 0}
          className="btn-rose w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[11px] tracking-widest-2 font-medium"
        >
          <MessageCircle size={14} />
          ENQUIRE VIA WHATSAPP
          <ArrowRight size={14} />
        </button>

        <p className="text-[10px] text-ink/45 text-center">
          Opens WhatsApp with your details pre-filled. No booking is confirmed until we reply.
        </p>
      </div>
    </div>
  );
};

export default BookingForm;
