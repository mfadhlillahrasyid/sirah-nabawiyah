import { useFacebookPixel } from "../hooks/useFacebookPixel";

export const CallToActionButton = () => {
    const { trackEvent } = useFacebookPixel();

    const handleClick = () => {
        trackEvent("Purchase", {
          content_ids: ["product_123"],
          content_name: "Product Name",
          content_category: "Category",
          value: 165000,
          currency: "IDR",
        });
        alert("Event 'Purchase' berhasil dilacak!");
      };

  return (
    <a
      href="https://wa.me/6281214469668?text=Assalammualaikum%20kak%2C%20Buku%20Sirah%20Nabawiyah-nya%20Masih%20Tersedia%20%3F%20"
      onClick={handleClick}
      className="mt-5 w-full flex items-center justify-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg transition-all duration-300 ease-in-out transform active:scale-95 active:ring-4 active:ring-green-300"
    >
      <img src="/whatsapp.webp" alt="WhatsApp" className="w-15 h-15" />
      <span>Pesan Sekarang Juga!</span>
    </a>
  );
};
