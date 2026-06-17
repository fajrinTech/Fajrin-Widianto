# Strategi Portofolio Premium: Memisahkan "Selected Works" dan "Creative Labs"

Menampilkan mock-widget (seperti terminal tiruan atau grid kontribusi GitHub) di area **Selected Works** bisa mengurangi profesionalitas karena area tersebut seharusnya murni menampilkan **studi kasus proyek riil (work showcase)** yang Anda buat untuk klien atau perusahaan. 

Untuk itu, strategi terbaik adalah memisahkan keduanya:
1. **Selected Works Section**: Hanya menampilkan proyek riil dengan visual mockup berkualitas tinggi dan studi kasus terstruktur.
2. **Playground / Creative Labs Section**: Bagian terpisah (bisa di bawah Selected Works atau halaman khusus) yang berfungsi sebagai "tempat bermain" interaktif untuk memamerkan keahlian frontend, kreativitas, dan eksperimen coding Anda yang tidak biasa (*non-generic*).

Berikut adalah **10 ide fitur interaktif yang sangat kreatif dan tidak pasaran** untuk menggantikan widget standar sebelumnya di bagian Playground/Labs:

---

### 1. **Web Audio Synthesizer (The Sound Wave Sandbox)**
*   **Konsep**: Pad interaktif berbentuk grid bersinar. Ketika kursor di-drag atau diklik di atasnya, grid akan menghasilkan nada synth ambient (menggunakan *Web Audio API*) lengkap dengan animasi gelombang visual riak cahaya (*glowing ripple animations*).
*   **Kenapa Keren**: Sangat jarang ada portofolio yang mengintegrasikan audio interaktif. Ini menunjukkan Anda menguasai Web Audio API dan sinkronisasi animasi dengan audio.

### 2. **UI Physics Sandbox (Gravity Tag Cloud)**
*   **Konsep**: Sebuah kotak dengan gaya gravitasi fisik (menggunakan engine ringan seperti *Matter.js* atau rumus vektor kustom). Di dalamnya terdapat gelembung-gelembung logo teknologi atau skill. Pengguna dapat "melempar", "menyeret", dan memantulkan gelembung-gelembung tersebut ke dinding kotak secara realistis.
*   **Kenapa Keren**: Sangat adiktif untuk dimainkan pengunjung dan secara visual mendemonstrasikan pemahaman mendalam tentang kalkulasi fisika dan koordinat matematika di Javascript.

### 3. **Ambient Fluid Simulation Canvas**
*   **Konsep**: Latar belakang mini-canvas interaktif yang mensimulasikan cairan berwarna-warni yang bereaksi secara real-time terhadap gerakan kursor (*fluid dynamics*). Pengguna bisa mengubah kecepatan aliran, viskositas, dan skema warna cairan melalui panel kontrol kecil.
*   **Kenapa Keren**: Memberikan kesan portofolio yang sangat premium, hidup, dan artistik (sering digunakan di website kreatif kelas dunia).

### 4. **ASCII / Pixel Art Camera Generator**
*   **Konsep**: Widget mini yang menggunakan kamera laptop (dengan izin) atau input foto untuk merender gambar menjadi teks ASCII bergerak atau piksel retro secara real-time. Gerakan mouse dapat membuyarkan partikel ASCII tersebut dengan gaya magnetik.
*   **Kenapa Keren**: Sangat mengejutkan, interaktif, dan memamerkan kemampuan manipulasi data gambar pada level piksel (*canvas image processing*).

### 5. **Retro OS Desktop Emulator (FajrinOS)**
*   **Konsep**: Simulator sistem operasi retro minimalis (seperti antarmuka macOS Classic atau NextSTEP). Pengguna bisa membuka jendela mini yang dapat digeser (*draggable*), seperti aplikasi menggambar piksel mini (*paint*), pemutar lagu fiktif, atau folder berisi jurnal harian Anda.
*   **Kenapa Keren**: Menampilkan kemampuan mengelola arsitektur state yang kompleks (jendela aktif, drag-and-drop, memori lokal) dengan balutan estetika nostalgia.

### 6. **CSS Layout Visual AST Compiler**
*   **Konsep**: Sebuah kotak interaktif di mana pengunjung bisa mengubah nilai CSS Flexbox atau CSS Grid melalui tombol/slider. Elemen di dalamnya tidak hanya bergeser, tetapi website akan menampilkan garis visual garis pandu (garis grid/flex axis) beserta anotasi ukurannya secara real-time.
*   **Kenapa Keren**: Bermanfaat dan edukatif. Menunjukkan Anda tidak sekadar menggunakan CSS, tetapi paham cara kerja rendering mesin layout web di balik layar.

### 7. **SVG Morphing Origami Simulator**
*   **Konsep**: Visualisasi bentuk geometris 3D/2D berbasis SVG. Saat diklik, bentuk tersebut melipat dan berganti rupa menjadi menu navigasi, kartu informasi, atau ikon-ikon lain dengan animasi lipatan origami yang sangat halus (*spring physics*).
*   **Kenapa Keren**: Menunjukkan keahlian tingkat lanjut dalam manipulasi SVG paths dan transisi bentuk (*shape morphing*).

### 8. **Interactive Pendulum / Sine Wave Waves**
*   **Konsep**: Beberapa deret tali "senar" vertikal atau horizontal. Pengguna bisa "memetik" senar tersebut dengan kursor mouse untuk memicu getaran gelombang sinus yang dinamis dan mengeluarkan efek visual harmonis serta frekuensi suara yang selaras.
*   **Kenapa Keren**: Sangat terapeutik, estetis, dan membuktikan pemahaman matematika matematika gelombang di dalam pemrograman grafis.

### 9. **Interactive Developer Tamagotchi (SVG Robot Companion)**
*   **Konsep**: Karakter robot atau hewan peliharaan animasi kecil yang menemani pengunjung membaca portofolio Anda. Robot ini akan bereaksi berdasarkan aktivitas pengunjung (misalnya tertidur jika pengunjung idle lama, bersemangat saat pengunjung hover kartu proyek, atau meminta kopi ketika malam hari).
*   **Kenapa Keren**: Membangun keterikatan emosional (*emotional UX*) dengan pengunjung dan membuktikan Anda bisa membuat interaksi micro-animation berbasis event.

### 10. **Interactive "Focus-Time" Generative Tree**
*   **Konsep**: Widget produktivitas mini. Ketika pengunjung menekan tombol "Start Focus", timer berjalan dan sebuah pohon digital akan tumbuh secara algoritmik (*fractal tree branching*) di layar berdasarkan durasi fokus. Pengunjung bisa men-download hasil pertumbuhan pohon unik mereka sebagai gambar SVG.
*   **Kenapa Keren**: Menggabungkan fungsionalitas aplikasi produktivitas nyata dengan keindahan *generative art*.

---

### Langkah Tindakan Selanjutnya:
1.  [ ] **Memindahkan Widget**: Hapus Widget GitHub dan Mock Terminal dari [Works.tsx](file:///home/fajrin/Documents/personal-portfolio/src/app/components/Works/Works.tsx) untuk menyisakan ruang murni bagi showcase proyek Anda.
2.  [ ] **Membuat Section Baru**: Buat section tersendiri bernama `Playground` atau `Labs` di [page.tsx](file:///home/fajrin/Documents/personal-portfolio/src/app/page.tsx) di bawah Selected Works.
3.  [ ] **Memilih Eksperimen**: Pilih salah satu dari 10 ide kreatif di atas untuk kita bangun sebagai konten utama Playground Anda.
