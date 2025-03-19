import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

declare global {
  interface Window {
    CallToAction: () => void;
    fbq: (...args: unknown[]) => void;
  }
}

function App() {
  interface ListItem {
    id: number;
    name: string;
  }
  const list1: ListItem[] = [
    {
      id: 1,
      name: "Menemukan inspirasi baru untuk menghadapi tantangan hidup.",
    },
    {
      id: 2,
      name: "Belajar strategi dakwah yang efektif ala Rasulullah—cocok banget buat kamu yang ingin berkontribusi lebih di masyarakat!",
    },
    {
      id: 3,
      name: "Memperdalam cinta kepada Nabi ﷺ, karena semakin kamu tahu tentang beliau, semakin besar rasa hormatmu padanya.",
    },
    {
      id: 4,
      name: "Menjadi pribadi yang lebih sabar, bijaksana, dan bermanfaat bagi orang lain.",
    },
  ];

  const list2: ListItem[] = [
    {
      id: 1,
      name: "Banyak dijadikan Rujukan Utama dalam kajian & kelas-kelas Sirah Nabi",
    },
    {
      id: 2,
      name: "Direkomendasikan oleh Ulama Internasional dan Nasional",
    },
    {
      id: 3,
      name: "Rekomendasi kitab untuk mengenal Nabi ﷺ lebih jauh, utuh dan mendalam! Membahas sejarah Nabi Muhammad ﷺ secara lengkap dari lahir hingga wafat dengan penulisan alur cerita seperti membaca *NOVEL (SERU, ASYIK & MENDEBARKAN)*",
    },
  ];

  const testimoni = [
    {
      id: 1,
      img: "/testimoni/1.webp",
    },
    {
      id: 2,
      img: "/testimoni/2.webp",
    },
    {
      id: 3,
      img: "/testimoni/3.webp",
    },
    {
      id: 4,
      img: "/testimoni/4.webp",
    },
    {
      id: 5,
      img: "/testimoni/5.webp",
    },
  ];

  const keunggulan = [
    {
      id: 1,
      title: "Juara 1 Penulisan Sirah Nabawiyah Internasional",
    },
    {
      id: 2,
      title:
        "Buku Sirah Paling Populer di Dunia. Sudah di terjemahkan ke lebih dari 15 Bahasa",
    },
    {
      id: 3,
      title:
        "Lengkap dan Runtut, Membahas detail peristiw Penting yang tidak banyak di kupas buku sirah lainnya",
    },
    {
      id: 4,
      title:
        "Seperti Novel, Disajikan dengan bahasa yang keren, menyentuh dan mudah di pahami. Jadi gak Bosen membacanya",
    },
    {
      id: 5,
      title:
        "QR Audio Book, dilengkapi audio Sirah Nabawiyah. Jadi tetap bisa belajar sirah & melihat detail visual gambaran kisah perjuangan Nabi Muhammad ﷺ",
    },
  ];

  const detailProduk = [
    { label: "Judul", value: "Sirah Nabawiyah Sejarah Hidup Nabi Muhammad" },
    { label: "Penulis", value: "Syaikh Shafiyurrahman Al-Mubarakfuri" },
    { label: "Penerbit", value: "Ummul Qurra" },
    { label: "Ukuran", value: "24 x 17 x 3 cm" },
    { label: "Jenis Cover", value: "Hard Cover" },
    { label: "Jenis Kertas", value: "QPP" },
    { label: "Tebal", value: "864 Halaman" },
    { label: "Berat", value: "1200 gr" },
    { label: "Kode", value: "TBS774" },
    { label: "ISBN", value: "978-602-9896-831" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'AddToCart');
    }
    setTimeout(() => {
      window.location.href = e.currentTarget.href;
    }, 500);
  };

  return (
    <>
      <body className="bg-neutral-200 text-neutral-800">
        <div className="min-h-screen mx-auto max-w-md bg-white">
          {/* Section 1 */}
          <div className="p-10">
            <p className="font-semibold text-center text-2xl">
              اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَا تُهُ
            </p>
            <h1 className="font-extrabold tracking-tight text-3xl mt-3 mb-4">
              Mari Mengenal Lebih Dekat Kehidupan Sang Teladan: Nabi Muhammad ﷺ
            </h1>
            <p className="italic">
              "Siapa yang tidak ingin hidup seperti Rasulullah? Sabar, penuh
              cinta, dan selalu menjadi rahmat bagi sekitarnya."
            </p>
            <p className="mt-3 leading-6">
              Apakah kita sudah benar-benar memahami kehidupan beliau? Apa saja
              pelajaran besar yang bisa kita terapkan di kehidupan modern ini?
            </p>
            <p className="mt-3 leading-6">
              <b>
                Alhamdulillah telah hadir{" "}
                <span className="text-red-500">Sirah Nabawiyah</span> versi
                bahasa Indonesia
              </b>{" "}
              yang memudahkan ANDA benar-benar memahami sejarah, perjalanan &
              perjuangan Rasulullahﷺ
            </p>
          </div>
          <img src="/1.webp" alt="Sirah Nabawiyah Books" />
          {/* Section 2 */}
          <div className="p-10">
            <h1 className="font-extrabold tracking-tight text-2xl mt-4">
              Apa Itu Sirah Nabawiyah?
            </h1>
            <p className="mt-3 leading-6">
              Sirah Nabawiyah adalah{" "}
              <mark>
                cerita lengkap tentang perjalanan hidup Nabi Muhammad ﷺ—
              </mark>
              mulai dari masa kecil hingga wafatnya. Bukan sekadar sejarah
              biasa, tapi ini adalah <b>blueprint kehidupan ideal</b> yang bisa
              kita tiru dalam segala aspek: keluarga, pekerjaan, hubungan
              sosial, bahkan cara menghadapi masalah.
            </p>
            <p className="mt-3 leading-6">bayangkan...</p>
            <ul className="space-y-3 mt-3">
              <li className="flex items-start">
                <span className="mr-3 mt-1">✅</span>
                <p className="leading-6">
                  Bagaimana Rasulullah ﷺ mampu bangkit dari kesulitan hidup?
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">✅</span>
                <p className="leading-6">
                  Bagaimana beliau memimpin umat dengan penuh kasih sayang tanpa
                  kehilangan prinsip?
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">✅</span>
                <p className="leading-6">
                  Dan bagaimana beliau menjadi teladan bagi siapa saja, baik
                  Muslim maupun non-Muslim?
                </p>
              </li>
            </ul>
            <p className="mt-3 leading-6">
              Semua jawabannya ada di sini. Di buku ini.
            </p>
          </div>
          {/* Section 3 */}
          <div className="bg-neutral-800 p-10">
            <h1 className="font-bold tracking-tight text-xl text-neutral-100 text-center">
              Best Seller International 🏆🌍
            </h1>
            <h1 className="font-bold tracking-tight text-xl text-yellow-500 text-center">
              Juara Dunia Lomba #1 {""}
              Penulisan Sejarah Nabi Muhammad ﷺ{" "}
            </h1>
          </div>
          <img src="/2.webp" alt="Sirah Nabawiyah Books" />
          {/* Section 4 */}
          <div className="p-10">
            <h1 className="font-extrabold tracking-tight text-2xl mt-4">
              Kenapa Kamu Harus Membaca Sirah Nabawiyah Sekarang?
            </h1>
            <p className="mt-3 leading-6">
              Karena kehidupan modern <u>kadang bikin kita lupa</u>...
            </p>
            <p className="mt-3 leading-6">
              Lupa bahwa setiap masalah punya solusi, lupa bahwa setiap ujian
              adalah jalan menuju kemuliaan, dan lupa bahwa kita punya contoh
              sempurna untuk diikuti: Nabi Muhammad ﷺ.
            </p>
            <p className="mt-3 leading-6">
              Dengan membaca Sirah Nabawiyah, kamu akan:
            </p>
            <ul className="space-y-3 mt-3">
              {list1.map((item: ListItem) => (
                <li key={item.id} className="flex items-start">
                  <span className="mr-3 mt-1">✅</span>
                  <p className="leading-6">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <img src="/3.webp" alt="Sirah Nabawiyah Books" />
          {/* Section 5 */}
          <div className="p-10 bg-neutral-50">
            <h1 className="font-extrabold tracking-tight text-2xl mt-4">
              Buku Ini Berbeda!
            </h1>
            <p className="mt-3 leading-6">
              Buku Sejarah Nabi Muhammad ﷺ Terbaik & Paling Terpopuler
            </p>
            <p className="mt-3 leading-6">
              Setiap kalimat dan lembaran buku ini{" "}
              <mark>
                akan membuat kita haru, senang, sedih, juga kadang sampai
                terbawa dalam tetesan air mata
              </mark>
              . Juga mengerti soal kegigihan, kesabaran, persahabatan,
              pengorbanan dan sangat banyak lagi.
            </p>
            <ul className="space-y-3 mt-3">
              {list2.map((item: ListItem) => (
                <li key={item.id} className="flex items-start">
                  <span className="mr-3 mt-1">✅</span>
                  <p className="leading-6">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* Swiper Testimonial */}
          <div className="p-10">
            <h1 className="font-extrabold tracking-tight text-2xl mt-4 text-center">
              Ini Kata Mereka yang Sudah baca Buku Sirah Nabawiyah
            </h1>
          </div>
          <Swiper
            slidesPerView={1.3}
            spaceBetween={20}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimoni.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex mb-10 justify-center items-center">
                  <img
                    src={item.img}
                    alt={`Testimoni ${item.id}`}
                    className="rounded-lg shadow-md max-w-full h-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Section 6 */}
          <div className="p-10">
            <p className="mt-3 leading-6">
              Banyak sudah buku yang membahas sisik-melik kehidupan Rasulullah
              SAW. Namun, buku yang akan anda baca ini{" "}
              <mark>telah mendapatkan sertifikasi internasional</mark> sebagi{" "}
              <b>buku sirah Nabi terbaik</b>.
            </p>
            <p className="mt-3 leading-6">
              Kupasnya kompilt, namun mudah di fahami & tidak bertele-tele.
            </p>
            <p className="mt-3 leading-6">
              Memotret kejadian demi kejadian dalam kehidupan Rasulullah SAW di
              mana beberapa buku sirah lainnya melewatkannya
            </p>
          </div>
          <img src="/4.webp" alt="Buku Sirah Nabawiyah"></img>
          {/* Keunggulan */}
          <div className="p-10 bg-neutral-50">
            <h1 className="font-extrabold tracking-tight text-2xl mt-4">
              Keunggulan Produk Kita
            </h1>
            <ul className="space-y-3 mt-3">
              {keunggulan.map((item) => (
                <li key={item.id} className="flex items-start">
                  <span className="mr-3 mt-1">✅</span>
                  <p className="leading-6">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* Detail Buku */}
          <div className="p-10">
            <div className="mb-4">
              <h1 className="font-extrabold tracking-tight text-2xl mb-1">
                Detail Buku Sirah Nabawiyah
              </h1>
              <p className="text-sm">Geser untuk melihat Detail</p>
            </div>
            <div className="grid grid-cols-1 gap-y-3">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-neutral-100 rounded-xl text-sm">
                  <tbody className="divide-y divide-gray-200">
                    {detailProduk.map((item, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-800">
                          <b>{item.label}</b>
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-center">
                <span className="inline-flex items-center rounded-lg bg-green-50 px-3 py-2 text-sm font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                  Bonus Audiobook untuk belajar lebih mendalam.
                </span>
              </div>
              <div className="text-center">
                <div className="items-center rounded-xl bg-yellow-50 py-5 px-4 text-yellow-700 ring-1 ring-yellow-600/20 ring-inset">
                  <span className="inline-flex tracking-tight text-xl font-extrabold">
                    Hati-Hati Barang Tiruan!
                  </span>
                  <p className="mt-3 leading-5 text-sm">
                    Jangan mudah tergiur dengan harga murah, karena yang Bajakan
                    tentu berbeda Kualitasnya, tonton videonya dibawah
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Video  */}
          <div className="px-10 pb-10">
            <video
              controls
              autoPlay={false}
              className="w-auto h-auto rounded-2xl"
            >
              <source src="/video.mp4" type="video/mp4" />
              Browser Anda tidak mendukung elemen video.
            </video>
          </div>
          {/* Call to Action */}
          <div className="py-5 px-10">
            <h1 className="font-extrabold tracking-tight text-center text-xl mt-4 text-neutral-600">
              Saya ingin pesan, berapa harganya?
            </h1>
            <p className="mt-3 leading-6 text-center">
              Alhamdulillah... Untuk pemesanan hari ini kami sedang mengadakan
              <mark>"Event Promo Sambut Ramadhan"</mark> dengan{" "}
              <u>Potongan Harga Hingga 50RB dan Gratis Ongkir</u>
            </p>
          </div>
          <div className="py-5 px-10 mt-8 bg-neutral-50">
            <h1 className="font-extrabold tracking-tight text-center text-3xl mt-4 text-red-600">
              Promo Bulan Ramadhan Berkah Untuk Kamu
            </h1>
            <p className="mt-3 leading-6 text-sm font-semibold text-center">
              Kamu Yang Cinta dengan Baginda Rasulullah Jangan Sampai Kehabisan
              Buku Terlaris Ini
            </p>
            <img
              src="/2.webp"
              className="my-5 rounded-2xl"
              alt="Buku Sirah Nabawiyah"
            />
            <img src="/cta.webp" className="" alt="Call to Action" />
          </div>
          <div className="pt-5 pb-10 px-10 text-center">
            <p className="leading-6 text-sm">
              kamu bisa pesan melalui Whatsapp
            </p>
            <p className="leading-6 text-2xl tracking-tight font-extrabold text-red-600 mt-3">
              Gratis Ongkir!
            </p>
            <img src="/arrow.webp" className="w-40 mx-auto my-6" alt="" />
            <div className="max-w-xs mx-auto">
              <a
                href="https://wa.me/+6281214469668?text=Assalammualaikum%20kak%2C%20Buku%20Sirah%20Nabawiyah-nya%20Masih%20Tersedia%20%3F%20"
                onClick={handleClick}
                className="mt-5 w-full flex items-center justify-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg transition-all duration-300 ease-in-out transform active:scale-95 active:ring-4 active:ring-green-300"
              >
                <img
                  src="/whatsapp.webp"
                  alt="WhatsApp"
                  className="w-15 h-15"
                />
                <span>Pesan Sekarang Juga!</span>
              </a>
            </div>
          </div>
          {/* Footer */}
          <div className="border-t border-gray-200"></div>
          <div className="text-center p-10">
            <div className="items-center rounded-xl bg-yellow-50 py-5 px-4 text-yellow-700 ring-1 ring-yellow-600/10 ring-inset">
              <p className="leading-5 font-bold text-sm italic">
                "Hai orang-orang yang beriman, bershalawatlah kamu untuknya
                (Muhammad ﷺ) dan ucapkanlah salam dengan penuh penghormatan
                kepadanya" (Al-Ahzab : 56)
              </p>
            </div>
          </div>
          <div className="p-2">
            <div className="bg-neutral-900 py-4 px-10 text-center rounded-lg">
              <p className="text-white text-sm">
                © Copyright - All Right Reserved | 2025
              </p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
