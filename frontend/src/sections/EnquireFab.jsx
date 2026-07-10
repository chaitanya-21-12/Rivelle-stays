import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { PROPERTY } from "../data/site";

const EnquireFab = () => {
  const message = encodeURIComponent("Hi Rivelle, I'd like to enquire about a stay.");
  return (
    <a
      href={`https://wa.me/${PROPERTY.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="btn-rose enquire-pulse fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full pl-3 pr-5 py-2.5 text-[11px] tracking-widest-2 font-medium shadow-xl"
      aria-label="Enquire on WhatsApp"
    >
      <span className="w-6 h-6 rounded-full bg-cream/20 flex items-center justify-center">
        <MessageCircle size={12} />
      </span>
      ENQUIRE
    </a>
  );
};

export default EnquireFab;
