// src/pages/order.tsx

import React, { useState, useEffect } from "react";

const OrderPage: React.FC = () => {
  const [count, setCount] = useState(3); // Mulai countdown dari 5 detik

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1); // Kurangi hitungan setiap detik
    }, 1000);

    // Redirect ke wa.me setelah countdown selesai
    if (count === 0) {
      const phoneNumber = "6281214469668"; // Ganti dengan nomor WhatsApp Anda
      const message = encodeURIComponent("Assalammualaikum kak, Buku Sirah Nabawiyah-nya Masih Tersedia ?");
      window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
      clearInterval(timer); // Hentikan timer setelah redirect
    }

    return () => clearInterval(timer); // Bersihkan timer saat komponen unmount
  }, [count]);

  return (
    <div className="min-h-screen mx-auto max-w-md bg-white text-center flex flex-col justify-center items-center gap-y-2">
      <span className="text-5xl font-bold">{count}</span>
      <h1 className="font-bold text-lg">Kamu akan di sambungkan ke Whatsapp</h1>
      <p>Harap tunggu sebentar</p>
    </div>
  );
};

export default OrderPage;
