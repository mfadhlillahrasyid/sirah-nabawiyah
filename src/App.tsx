import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

function App() {
  interface ListItem {
    id: number;
    name: string;
  }
  const list1: ListItem[] = [
    {
      id: 1,
      name: "Menemukan inspirasi baru untuk menghadapi tantangan hidup."
    },
    {
      id: 2,
      name: "Belajar strategi dakwah yang efektif ala Rasulullah—cocok banget buat kamu yang ingin berkontribusi lebih di masyarakat!"
    },
    {
      id: 3,
      name: "Memperdalam cinta kepada Nabi ﷺ, karena semakin kamu tahu tentang beliau, semakin besar rasa hormatmu padanya."
    },
    {
      id: 4,
      name: "Menjadi pribadi yang lebih sabar, bijaksana, dan bermanfaat bagi orang lain."
    }
  ];

  const list2: ListItem[] = [
    {
      id: 1,
      name: "Banyak dijadikan Rujukan Utama dalam kajian & kelas-kelas Sirah Nabi"
    },
    {
      id: 2,
      name: "Direkomendasikan oleh Ulama Internasional dan Nasional"
    },
    {
      id: 3,
      name: "Rekomendasi kitab untuk mengenal Nabi ﷺ lebih jauh, utuh dan mendalam! Membahas sejarah Nabi Muhammad ﷺ secara lengkap dari lahir hingga wafat dengan penulisan alur cerita seperti membaca *NOVEL (SERU, ASYIK & MENDEBARKAN)*"
    }
  ];

  const testimoni = [
    {
      id: 1,
      img: "/testimoni/1.webp"
    },
    {
      id: 2,
      img: "/testimoni/2.webp"
    },
    {
      id: 3,
      img: "/testimoni/3.webp"
    },
    {
      id: 4,
      img: "/testimoni/4.webp"
    },
    {
      id: 5,
      img: "/testimoni/5.webp"
    }
  ];
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
          <div className="p-10">
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
          {/* Swiper */}
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
              clickable: true
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
        </div>
      </body>
    </>
  );
}

export default App;
