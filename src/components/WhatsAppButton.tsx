import { MessageCircle } from "lucide-react";
import whatsappLogo from "@/assets/logos/whatasapp-logo.png";
// import whatsappLogo from "@/assets/logos/whatsapp-logo.png";

const WhatsAppButton = () => {
  const phoneNumber = "919447022577";
  const message =
    "Hello, I am interested in your electric fencing solutions. Please provide more information.";

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp Logo */}
      <img
        src={whatsappLogo}
        alt="WhatsApp"
        className="w-7 h-7"
      />

      {/* Tooltip */}
      <span className="absolute right-16 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
        Chat with us
      </span>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
    </button>
  );
};

export default WhatsAppButton;