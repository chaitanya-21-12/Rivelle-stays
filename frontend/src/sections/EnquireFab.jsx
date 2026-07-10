import React from "react";
import { MessageCircle } from "lucide-react";

const EnquireFab = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToContact}
      className="btn-gerua enquire-pulse fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full pl-3 pr-5 py-2.5 text-[11px] tracking-widest-2 font-medium shadow-xl"
      aria-label="Enquire now"
    >
      <span className="w-6 h-6 rounded-full bg-cream/20 flex items-center justify-center">
        <MessageCircle size={12} />
      </span>
      ENQUIRE
    </button>
  );
};

export default EnquireFab;
