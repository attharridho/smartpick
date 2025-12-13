// --- DATA ---
// Data Smartphone 2025: 7 Model per Kategori Harga + Tambahan iQoo + Tambahan Samsung & Apple
const smartphones = [
    // --- KATEGORI 1: DI BAWAH 2 JUTA (BUDGET) ---
    {
        id: 101,
        name: "Itel P65 5G",
        price: 1699000,
        brand: "Lainnya",
        screen: "6.7' IPS LCD 120Hz",
        chipset: "Unisoc T615 ",
        ram: "6GB",
        storage: "128GB",
        camera: "50MP AI",
        battery: "5000 mAh (18W)",
        category: ["basic", "gaming"],
        scores: { camera: 6.5, gaming: 7.5, battery: 9.5, multi: 7.0 },
        prevGen: "Upgrade baterai lebih besar dari P55, layar lebih luas dengan refresh rate tinggi.",
        image: "assets/itel-p65.jpg"
    },
    {
        id: 102,
        name: "Xiaomi Redmi 14C",
        price: 1899000,
        brand: "Xiaomi",
        screen: "6.74' IPS LCD 90Hz",
        chipset: "Helio G81 Ultra",
        ram: "8GB",
        storage: "256GB",
        camera: "50MP Main",
        battery: "5160 mAh (18W)",
        category: ["basic", "work"],
        scores: { camera: 7.0, gaming: 6.5, battery: 8.5, multi: 7.5 },
        prevGen: "Desain lebih tipis dari 13C, charging lebih cepat 33W.",
        image: "assets/xiaomi-redmi-14c.jpg"
    },
    {
        id: 103,
        name: "Samsung Galaxy A06",
        price: 1999000,
        brand: "Samsung",
        screen: "6.7' PLS LCD 90Hz",
        chipset: "Mediatek Helio G85",
        ram: "6GB",
        storage: "128GB",
        camera: "50MP + 2MP",
        battery: "5000 mAh (25W)",
        category: ["basic", "work"],
        scores: { camera: 7.2, gaming: 6.0, battery: 8.5, multi: 7.0 },
        prevGen: "Peningkatan dari A05s: Layar lebih mulus 90Hz dan manajemen daya lebih baik.",
        image: "assets/samsung-galaxy-a06.jpg"
    },
    {
        id: 104,
        name: "Infinix Hot 50 Pro",
        price: 1950000,
        brand: "Infinix",
        screen: "6.78' FHD+ 120Hz",
        chipset: "Helio G100",
        ram: "8GB",
        storage: "256GB",
        camera: "50MP",
        battery: "5000 mAh (33W)",
        category: ["gaming", "camera"],
        scores: { camera: 7.5, gaming: 7.8, battery: 8.0, multi: 7.5 },
        prevGen: "Kamera lompat ke 50MP di kelas harga murah, chipset gaming entry level baru.",
        image: "assets/infinix-hot-50pro4g.jpg"
    },
    {
        id: 105,
        name: "Tecno Spark 30",
        price: 1750000,
        brand: "Lainnya",
        screen: "6.6' IPS 90Hz",
        chipset: "Helio G91",
        ram: "8GB",
        storage: "128GB",
        camera: "64MP",
        battery: "5000 mAh (18W)",
        category: ["basic"],
        scores: { camera: 6.8, gaming: 7.0, battery: 8.5, multi: 7.0 },
        prevGen: "Desain fresh, RAM bawaan besar 8GB standar.",
        image: "assets/tecno-spark-30.jpg"
    },
    {
        id: 106,
        name: "Vivo Y04",
        price: 1899000,
        brand: "Vivo",
        screen: "6.56' IPS LCD",
        chipset: "Unisoc T7225",
        ram: "6GB",
        storage: "128GB",
        camera: "13MP",
        battery: "5000 mAh (15W)",
        category: ["basic", "camera"],
        scores: { camera: 7.3, gaming: 6.0, battery: 8.5, multi: 6.5 },
        prevGen: "Fokus pada desain stylish dan hasil foto potret khas Vivo di harga terjangkau.",
        image: "assets/vivo-y04.jpg"
    },
    {
        id: 107,
        name: "Realme C67 (2025)",
        price: 1999000,
        brand: "Lainnya",
        screen: "6.72' FHD+ 90Hz",
        chipset: "Snapdragon 685",
        ram: "8GB",
        storage: "128GB",
        camera: "108MP Zoom",
        battery: "5000 mAh (33W)",
        category: ["camera", "work"],
        scores: { camera: 7.8, gaming: 6.8, battery: 8.5, multi: 7.5 },
        prevGen: "Versi refresh dengan optimasi software kamera 108MP yang lebih stabil.",
        image: "assets/realme-c67.jpg"
    },

    // --- KATEGORI 2: 2 - 4 JUTA (MID RANGE) ---
    {
        id: 201,
        name: "Samsung Galaxy A16 5G",
        price: 3499000,
        brand: "Samsung",
        screen: "6.7' Super AMOLED 90Hz",
        chipset: "Dimensity 6300+",
        ram: "8GB",
        storage: "256GB",
        camera: "50MP (EIS) + UW",
        battery: "5000 mAh (25W)",
        category: ["work", "basic"],
        scores: { camera: 8.0, gaming: 7.0, battery: 9.0, multi: 8.0 },
        prevGen: "Jaminan update OS 6 tahun pertama di seri A1x, layar AMOLED lebih terang.",
        image: "assets/samsung-galaxy-a165g.jpg"
    },
    {
        id: 202,
        name: "Redmi Note 14 5G",
        price: 2899000,
        brand: "Xiaomi",
        screen: "6.67' AMOLED 120Hz",
        chipset: "Dimensity 7025 Ultra",
        ram: "8GB",
        storage: "256GB",
        camera: "108MP (OIS)",
        battery: "5110 mAh (45W)",
        category: ["gaming", "creator"],
        scores: { camera: 7.8, gaming: 8.0, battery: 8.5, multi: 8.0 },
        prevGen: "Bezel layar super tipis, desain lebih premium mirip seri Pro.",
        image: "assets/xiaomi-redmi-note-145g.jpg"
    },
    {
        id: 203,
        name: "Infinix Note 50 Pro+",
        price: 3299000,
        brand: "Infinix",
        screen: "6.78' 3D Curved 144Hz",
        chipset: "Dimensity 7200",
        ram: "12GB",
        storage: "256GB",
        camera: "108MP (OIS)",
        battery: "5200 mAh (100W)",
        category: ["gaming", "work"],
        scores: { camera: 7.5, gaming: 8.5, battery: 8.8, multi: 8.5 },
        prevGen: "Charging lebih ngebut 100W, chipset 4nm hemat daya.",
        image: "assets/infinix-note50-pro-plus-5g.jpg"
    },
    {
        id: 204,
        name: "Poco M7 Pro 5G",
        price: 3199000,
        brand: "Xiaomi",
        screen: "6.67' Flow AMOLED",
        chipset: "Mediatek Dimensity 7025 Ultra",
        ram: "8GB",
        storage: "256GB",
        camera: "50MP (OIS)",
        battery: "5110 mAh (45W)",
        category: ["gaming", "camera"],
        scores: { camera: 7.8, gaming: 8.2, battery: 9.0, multi: 8.0 },
        prevGen: "Stabilisasi OIS kini hadir di seri M, layar Flow AMOLED bezel tipis.",
        image: "assets/xiaomi-poco-m7-pro-5g.jpg"
    },
    {
        id: 205,
        name: "Vivo Y100 5G (2025)",
        price: 3699000,
        brand: "Vivo",
        screen: "6.67' AMOLED 120Hz",
        chipset: "Snapdragon 4 Gen 2",
        ram: "8GB",
        storage: "256GB",
        camera: "50MP + 8MP UW",
        battery: "5000 mAh (80W)",
        category: ["camera", "work"],
        scores: { camera: 8.0, gaming: 7.0, battery: 9.2, multi: 8.0 },
        prevGen: "Charging kilat 80W tercepat di kelasnya, bodi kulit fiber premium.",
        image: "assets/vivo-y100-5g.jpg"
    },
    {
        id: 206,
        name: "Tecno Camon 30 Premier",
        price: 3999000,
        brand: "Lainnya",
        screen: "6.77' LTPO AMOLED",
        chipset: "Dimensity 8200",
        ram: "12GB",
        storage: "512GB",
        camera: "Sony IMX890 50MP",
        battery: "5000 mAh (70W)",
        category: ["camera", "creator"],
        scores: { camera: 8.5, gaming: 8.0, battery: 8.5, multi: 8.5 },
        prevGen: "Sensor kamera flagship Sony IMX890 di harga menengah.",
        image: "assets/tecno-camon-30-premier-5g.jpg"
    },
    {
        id: 207,
        name: "Realme 13+ 5G",
        price: 3899000,
        brand: "Lainnya",
        screen: "6.67' AMOLED 120Hz",
        chipset: "Dimensity 7300",
        ram: "12GB",
        storage: "256GB",
        camera: "50MP Sony LYT-600",
        battery: "5000 mAh (80W)",
        category: ["camera", "gaming"],
        scores: { camera: 8.2, gaming: 7.8, battery: 8.5, multi: 8.2 },
        prevGen: "Sensor Sony baru untuk foto low-light lebih jernih.",
        image: "assets/realme-13-plus-5g.jpg"
    },
    {
        id: 208,
        name: "iQoo Z10r 5G",
        price: 4399000,
        brand: "Lainnya",
        screen: "6.77' AMOLED 120Hz",
        chipset: "Mediatek Dimensity 7400",
        ram: "12GB",
        storage: "256GB",
        camera: "50MP OIS",
        battery: "5700 mAh (44W)",
        category: ["gaming", "work"],
        scores: { camera: 7.8, gaming: 9.3, battery: 9.5, multi: 8.8 },
        prevGen: "Baterai monster 6000mAh dengan bodi tipis, layar 144Hz paling smooth di kelasnya.",
        image: "assets/iqoo-z10r.jpg"
    },

    // --- KATEGORI 3: 4 - 6 JUTA (UPPER MID) ---
    {
        id: 301,
        name: "Samsung Galaxy A36 5G",
        price: 4799000,
        brand: "Samsung",
        screen: "6.7' Super AMOLED 120Hz",
        chipset: "Snapdragon 6 Gen 3",
        ram: "8GB",
        storage: "256GB",
        camera: "50MP (OIS) + 8MP UW",
        battery: "5000 mAh (45W)",
        category: ["work", "creator", "camera"],
        scores: { camera: 8.5, gaming: 7.5, battery: 9.0, multi: 8.5 },
        prevGen: "Desain Key Island baru, bezel lebih tipis dari A35.",
        image: "assets/samsung-galaxy-a36.jpg"
    },
    {
        id: 302,
        name: "Xiaomi Redmi Note 14 Pro+ 5G",
        price: 5499000,
        brand: "Xiaomi",
        screen: "6.67' 1.5K Curved AMOLED",
        chipset: "Snapdragon 7s Gen 3",
        ram: "12GB",
        storage: "512GB",
        camera: "200MP + Telephoto",
        battery: "5110 mAh (120W)",
        category: ["camera", "gaming"],
        scores: { camera: 9.0, gaming: 8.5, battery: 9.2, multi: 9.0 },
        prevGen: "IP68 Tahan air penuh, layar lengkung premium, ada lensa telephoto.",
        image: "assets/xiaomi-redmi-note-14-pro-plus-5g.jpg"
    },
    {
        id: 303,
        name: "Poco F7",
        price: 5899000,
        brand: "Xiaomi",
        screen: "6.83' 1.5K OLED 120Hz",
        chipset: "Snapdragon 8s Gen 4",
        ram: "12GB",
        storage: "256GB",
        camera: "50MP OIS",
        battery: "6500 mAh (90W)",
        category: ["gaming", "work"],
        scores: { camera: 7.8, gaming: 9.8, battery: 9.0, multi: 9.5 },
        prevGen: "Performa flagship killer sejati, baterai badak 5500 mAh.",
        image: "assets/xiaomi-poco-f7.jpg"
    },
    {
        id: 304,
        name: "Infinix GT 30 Pro",
        price: 4999000,
        brand: "Infinix",
        screen: "6.78' AMOLED 144Hz",
        chipset: "Dimensity 8350 Ultimate",
        ram: "12GB",
        storage: "256GB",
        camera: "108MP (OIS)",
        battery: "5200 mAh (45W)",
        category: ["gaming"],
        scores: { camera: 7.5, gaming: 9.5, battery: 8.5, multi: 8.8 },
        prevGen: "Chipset jauh lebih kencang (setara flagship tahun lalu), lampu LED mecha lebih interaktif.",
        image: "assets/infinix-gt30-pro.jpg"
    },
    {
        id: 305,
        name: "Vivo V40e",
        price: 5299000,
        brand: "Vivo",
        screen: "6.77' Curved AMOLED",
        chipset: "Mediatek Dimensity 7300",
        ram: "8GB",
        storage: "256GB",
        camera: "50MP Zeiss Optics",
        battery: "5500 mAh (80W)",
        category: ["camera", "creator"],
        scores: { camera: 9.2, gaming: 7.5, battery: 9.5, multi: 8.5 },
        prevGen: "Kolaborasi ZEISS masuk ke seri V lebih murah, hasil foto potret level profesional.",
        image: "assets/vivo-v40e.jpg"
    },
    {
        id: 306,
        name: "Oppo Reno 12 F 5G",
        price: 4599000,
        brand: "Oppo",
        screen: "6.67' AMOLED 120Hz",
        chipset: "Dimensity 6300",
        ram: "12GB",
        storage: "256GB",
        camera: "50MP + AI Eraser",
        battery: "5000 mAh (45W)",
        category: ["camera", "basic"],
        scores: { camera: 8.5, gaming: 7.0, battery: 8.5, multi: 8.0 },
        prevGen: "Fitur AI Generative (hapus objek foto) hadir di harga terjangkau.",
        image: "assets/oppo-reno12-f.jpg"
    },
    {
        id: 307,
        name: "Realme 13 Pro",
        price: 5999000,
        brand: "Lainnya",
        screen: "6.7' Curved AMOLED",
        chipset: "Snapdragon 7s Gen 2",
        ram: "12GB",
        storage: "512GB",
        camera: "50MP Sony LYT-701",
        battery: "5200 mAh (45W)",
        category: ["camera", "creator"],
        scores: { camera: 8.8, gaming: 7.5, battery: 9.0, multi: 8.5 },
        prevGen: "Desain Monet Gold mewah, sensor kamera Sony LYT baru.",
        image: "assets/realme-13-pro.jpg"
    },
    {
        id: 308,
        name: "Samsung Galaxy M55s 5G",
        price: 4299000,
        brand: "Samsung",
        screen: "6.7' Super AMOLED+ 120Hz",
        chipset: "Snapdragon 7 Gen 1",
        ram: "8GB",
        storage: "256GB",
        camera: "50MP OIS + 8MP UW",
        battery: "5000 mAh (45W)",
        category: ["work", "basic"],
        scores: { camera: 8.2, gaming: 7.8, battery: 9.5, multi: 8.2 },
        prevGen: "Bodi super tipis dengan baterai besar, chipset Snapdragon yang efisien.",
        image: "assets/samsung-galaxy-m55s.jpg"
    },
    {
        id: 310,
        name: "Samsung Galaxy M56 5G",
        price: 4999000,
        brand: "Samsung",
        screen: "6.7' Super AMOLED+ 120Hz",
        chipset: "Exynos 1480",
        ram: "8GB",
        storage: "256GB",
        camera: "108MP OIS",
        battery: "5000 mAh (45W)",
        category: ["gaming", "work"],
        scores: { camera: 8.0, gaming: 8.8, battery: 7.8, multi: 8.5 },
        prevGen: "Layar dan Body Gorilla Glass Victus+, baterai tetap besar 5000mAh.",
        image: "assets/samsung-galaxy-m56.jpg"
    },

    // --- KATEGORI 4: DI ATAS 6 JUTA (FLAGSHIP) ---
    {
        id: 401,
        name: "iPhone 16",
        price: 16499000,
        brand: "Apple",
        screen: "6.1' Super Retina XDR OLED",
        chipset: "A18 Bionic",
        ram: "8GB",
        storage: "128GB",
        camera: "48MP Fusion + 12MP UW",
        battery: "3561 mAh (25W)",
        category: ["work", "creator", "camera"],
        scores: { camera: 9.5, gaming: 9.5, battery: 8.5, multi: 9.8 },
        prevGen: "Tombol 'Action Button' & 'Capture Button' baru, chip A18 super kencang untuk AI.",
        image: "assets/apple-iphone-16.jpg"
    },
    {
        id: 402,
        name: "Samsung Galaxy S25",
        price: 13999000,
        brand: "Samsung",
        screen: "6.2' Dynamic AMOLED 2X",
        chipset: "Snapdragon 8 Elite / Exynos 2500",
        ram: "12GB",
        storage: "256GB",
        camera: "50MP + 12MP + 10MP Tele",
        battery: "4000 mAh (25W)",
        category: ["work", "camera", "basic"],
        scores: { camera: 9.2, gaming: 9.2, battery: 8.0, multi: 9.5 },
        prevGen: "Bezel layar makin tipis, integrasi Galaxy AI generasi kedua lebih pintar.",
        image: "assets/samsung-galaxy-s25.jpg"
    },
    {
        id: 403,
        name: "Samsung Galaxy A56 5G",
        price: 6499000,
        brand: "Samsung",
        screen: "6.6' Super AMOLED 120Hz",
        chipset: "Exynos 1580",
        ram: "12GB",
        storage: "256GB",
        camera: "50MP (OIS) + 12MP + 5MP",
        battery: "5000 mAh (45W)",
        category: ["work", "creator"],
        scores: { camera: 8.8, gaming: 8.0, battery: 9.0, multi: 9.0 },
        prevGen: "Performa GPU naik drastis (setara flagship lama), support charging 45W.",
        image: "assets/samsung-galaxy-a56.jpg"
    },
    {
        id: 404,
        name: "Xiaomi 15",
        price: 10999000,
        brand: "Xiaomi",
        screen: "6.36' LTPO AMOLED 120Hz",
        chipset: "Snapdragon 8 Gen 4",
        ram: "12GB",
        storage: "256GB",
        camera: "Leica 50MP Triple Cam",
        battery: "5240 mAh (90W)",
        category: ["camera", "work"],
        scores: { camera: 9.4, gaming: 9.8, battery: 9.0, multi: 9.5 },
        prevGen: "Ukuran compact tapi baterai besar 5000mAh, lensa Leica Summilux terbaru.",
        image: "assets/xiaomi-15.jpg"
    },
    {
        id: 405,
        name: "Asus Zenfone 12 Ultra",
        price: 11499000,
        brand: "Lainnya",
        screen: "6.78' LTPO AMOLED 144Hz",
        chipset: "Snapdragon 8 Elite",
        ram: "16GB",
        storage: "256GB",
        camera: "50MP Gimbal OIS",
        battery: "5500 mAh (65W)",
        category: ["gaming", "camera"],
        scores: { camera: 8.8, gaming: 9.0, battery: 9.2, multi: 9.0 },
        prevGen: "Stabilisasi video terbaik dengan Gimbal Hybrid 6-axis terbaru.",
        image: "assets/asus-zenfone-12-ultra.jpg"
    },
    {
        id: 406,
        name: "Samsung Galaxy Z Flip 7",
        price: 15999000,
        brand: "Samsung",
        screen: "6.9' Foldable Dynamic LTPO AMOLED",
        chipset: "Exynos 2500",
        ram: "12GB",
        storage: "256GB",
        camera: "50MP + 12MP",
        battery: "4300 mAh (25W)",
        category: ["creator", "basic"],
        scores: { camera: 8.8, gaming: 8.5, battery: 7.8, multi: 9.0 },
        prevGen: "Lipatan layar makin tidak terlihat (crease-less), cover screen lebih fungsional.",
        image: "assets/samsung-galaxy-z-flip7.jpg"
    },
    {
        id: 407,
        name: "Google Pixel 9",
        price: 12999000,
        brand: "Lainnya",
        screen: "6.3' OLED 120Hz",
        chipset: "Google Tensor G4",
        ram: "12GB",
        storage: "128GB",
        camera: "50MP + 48MP UW",
        battery: "4700 mAh (27W)",
        category: ["camera", "work"],
        scores: { camera: 9.5, gaming: 7.5, battery: 8.5, multi: 9.0 },
        prevGen: "Raja fotografi komputasi, fitur AI Magic Editor makin canggih.",
        image: "assets/google-pixel-9.jpg"
    },
    {
        id: 408,
        name: "iQoo 15 5G",
        price: 10999000,
        brand: "Lainnya",
        screen: "6.85' 2K LTPO AMOLED 144Hz",
        chipset: "Snapdragon 8 Elite Gen 5",
        ram: "16GB",
        storage: "512GB",
        camera: "50MP VCS",
        battery: "7000 mAh (100W)",
        category: ["gaming", "work"],
        scores: { camera: 8.8, gaming: 9.9, battery: 9.0, multi: 9.8 },
        prevGen: "Sistem pendingin VC terluas, layar 2K 144Hz ultra smooth untuk gaming kompetitif.",
        image: "assets/iqoo-15.jpg"
    },
    {
        id: 409,
        name: "Samsung Galaxy S25 Ultra",
        price: 21999000,
        brand: "Samsung",
        screen: "6.9' Dynamic AMOLED 2X Titanium",
        chipset: "Snapdragon 8 Elite",
        ram: "12GB",
        storage: "512GB",
        camera: "200MP + 50MP 5x Tele",
        battery: "5000 mAh (45W)",
        category: ["camera", "work", "gaming"],
        scores: { camera: 9.9, gaming: 9.9, battery: 9.5, multi: 9.9 },
        prevGen: "Frame titanium lebih kuat, layar paling terang, AI lebih canggih.",
        image: "assets/samsung-galaxy-s25-ultra.jpg"
    },
    {
        id: 410,
        name: "iPhone 16 Pro Max",
        price: 22999000,
        brand: "Apple",
        screen: "6.9' Super Retina XDR ProMotion",
        chipset: "A18 Pro",
        ram: "8GB",
        storage: "256GB",
        camera: "48MP Main + 48MP UW + 5x Tele",
        battery: "4685 mAh (30W)",
        category: ["camera", "creator", "gaming"],
        scores: { camera: 10.0, gaming: 9.8, battery: 9.8, multi: 9.9 },
        prevGen: "Layar besar untuk iPhone, tombol capture khusus kamera profesional.",
        image: "assets/apple-iphone-16-pro-max.jpg"
    },
    {
        id: 411,
        name: "iPhone 16e",
        price: 8499000,
        brand: "Apple",
        screen: "6.1' OLED",
        chipset: "A18 Bionic",
        ram: "8GB",
        storage: "128GB",
        camera: "48MP Main",
        battery: "4005 mAh (20W)",
        category: ["basic", "work"],
        scores: { camera: 8.8, gaming: 9.2, battery: 7.5, multi: 9.0 },
        prevGen: "Akhirnya menggunakan layar OLED penuh tanpa tombol home, desain modern ala iPhone 14.",
        image: "assets/apple-iphone-16e.jpg"
    },
    {
        id: 412,
        name: "iPhone 17",
        price: 17499000,
        brand: "Apple",
        screen: "6.3' LTPO Super Retina XDR",
        chipset: "A19 Bionic",
        ram: "8GB",
        storage: "128GB",
        camera: "48MP Fusion + 48MP UW",
        battery: "3692 mAh (30W)",
        category: ["work", "creator", "camera"],
        scores: { camera: 9.6, gaming: 9.6, battery: 8.8, multi: 9.9 },
        prevGen: "Layar ProMotion 120Hz akhirnya hadir di model non-Pro, performa A19 tak tertandingi.",
        image: "assets/apple-iphone-17.jpg"
    },
    {
        id: 413,
        name: "iPhone 17 Pro",
        price: 21999000,
        brand: "Apple",
        screen: "6.3' ProMotion XDR Titanium",
        chipset: "A19 Pro",
        ram: "12GB",
        storage: "256GB",
        camera: "48MP Triple Cam System",
        battery: "4252 mAh (35W)",
        category: ["camera", "work", "gaming"],
        scores: { camera: 9.9, gaming: 10.0, battery: 9.0, multi: 10.0 },
        prevGen: "Face ID di bawah layar, bezel tertipis di dunia, tombol solid-state haptic.",
        image: "assets/apple-iphone-17-pro.jpg"
    },
    {
        id: 414,
        name: "iPhone 17 Pro Max",
        price: 24999000,
        brand: "Apple",
        screen: "6.9' ProMotion XDR Titanium",
        chipset: "A19 Pro",
        ram: "12GB",
        storage: "256GB",
        camera: "48MP Main + 48MP Tele 10x",
        battery: "5088 mAh (40W)",
        category: ["camera", "creator", "gaming"],
        scores: { camera: 10.0, gaming: 10.0, battery: 10.0, multi: 10.0 },
        prevGen: "Zoom optik 10x periskop, kemampuan rekam video spasial 8K.",
        image: "assets/apple-iphone-17-pro-max.jpg"
    },
    {
        id: 415,
        name: "iPhone Air",
        price: 18999000,
        brand: "Apple",
        screen: "6.6' Slim OLED ProMotion",
        chipset: "A19 Pro Bionic",
        ram: "8GB",
        storage: "256GB",
        camera: "48MP Single Wide",
        battery: "3149 mAh (25W)",
        category: ["basic", "work"],
        scores: { camera: 9.0, gaming: 9.0, battery: 5.0, multi: 9.5 },
        prevGen: "iPhone paling tipis yang pernah ada, desain ultra-minimalis, menggantikan seri Plus.",
        image: "assets/apple-iphone-air.jpg"
    }
];

// --- STATE ---
let filteredPhones = [...smartphones];
let compareList = [];
let savedList = JSON.parse(localStorage.getItem('savedPhones')) || [];

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    }
    renderPhones(filteredPhones);
    updateSavedBadge();
    renderSavedSection();
});

// --- NAVIGATION HELPERS (SMOOTH SCROLL) ---
function smoothScrollTo(elementId) {
    const el = document.getElementById(elementId);
    if (el) {
        const headerOffset = 100; 
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

// --- COSMETIC: TOAST NOTIFICATION ---
function showToast(message, type = 'info') {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none';
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    const colors = type === 'error' ? 'bg-red-500' : 'bg-gray-800';
    toast.className = `${colors} text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium transition-all duration-300 transform translate-y-10 opacity-0 pointer-events-auto`;
    toast.innerText = message;

    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-10', 'opacity-0');
    });

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- NAVIGATION ---
function showSection(sectionId) {
    ['home', 'quiz', 'learn', 'saved'].forEach(id => {
        const el = document.getElementById(`${id}-section`);
        if (el) el.classList.add('hidden');
    });

    const target = document.getElementById(`${sectionId}-section`);
    if (target) target.classList.remove('hidden');

    if (sectionId === 'quiz') {
        startQuiz();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToFilter() {
    smoothScrollTo('filter-section');
}

// --- FORMAT ---
const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    }).format(number);
};

// --- RENDER LIST ---
function renderPhones(phones) {
    const grid = document.getElementById('phoneGrid');
    const count = document.getElementById('resultCount'); // Dikembalikan

    // Cek keberadaan kedua elemen agar tidak error
    if (!grid || !count) return;

    grid.innerHTML = '';
    
    // Update teks jumlah produk
    count.innerText = `Menampilkan ${phones.length} produk`;

    if (phones.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-20 text-gray-500">Tidak ada smartphone yang cocok dengan filter ini. Coba ubah filter.</div>`;
        return;
    }

    phones.forEach((phone, index) => {
        const isSaved = savedList.includes(phone.id);
        const isCompared = compareList.includes(phone.id);

        const card = document.createElement('div');
        card.className = 'apple-card rounded-3xl p-6 relative flex flex-col h-full fade-in';
        card.style.animationDelay = `${index * 100}ms`;
        
        // MODIFIKASI: Menambahkan onclick showDetail pada elemen pembungkus (kecuali tombol action)
        card.onclick = (e) => {
            // Mencegah trigger saat klik tombol love atau compare
            if(e.target.closest('button') || e.target.closest('input')) return;
            showDetail(phone.id);
        };

        card.innerHTML = `
            <div class="absolute top-4 right-4 z-10">
                <button onclick="toggleSave(${phone.id})" class="p-2 rounded-full ${isSaved ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:bg-gray-100'} transition">
                    <i data-lucide="heart" class="w-6 h-6 ${isSaved ? 'fill-current' : ''}"></i>
                </button>
            </div>
            
            <div class="h-48 flex items-center justify-center mb-6 cursor-pointer">
                <img src="${phone.image}" alt="${phone.name}" class="h-full object-contain transform transition-transform hover:scale-110" onerror="this.src='https://placehold.co/300x300?text=No+Image'">
            </div>
            
            <div class="mb-4">
                <h3 class="font-bold text-xl leading-tight mb-1 cursor-pointer hover:text-blue-600 transition">${phone.name}</h3>
                <p class="text-blue-600 font-semibold text-lg">${formatRupiah(phone.price)}</p>
            </div>

            <div class="space-y-2 text-sm text-gray-600 mb-6 flex-grow">
                <div class="flex items-center"><i data-lucide="cpu" class="w-4 h-4 mr-2"></i> ${phone.chipset}</div>
                <div class="flex items-center"><i data-lucide="monitor" class="w-4 h-4 mr-2"></i> ${phone.screen}</div>
                <div class="flex items-center"><i data-lucide="camera" class="w-4 h-4 mr-2"></i> ${phone.camera}</div>
                <div class="flex items-center"><i data-lucide="battery" class="w-4 h-4 mr-2"></i> ${phone.battery}</div>
            </div>

            <div class="bg-gray-50 rounded-xl p-3 mb-6 text-xs space-y-2">
                <div class="flex items-center justify-between">
                    <span class="text-gray-500">Kamera</span>
                    <div class="w-24 bg-gray-200 rounded-full h-1.5 ml-2">
                        <div class="bg-blue-500 h-1.5 rounded-full" style="width: ${phone.scores.camera * 10}%"></div>
                    </div>
                    <span class="font-bold ml-2">${phone.scores.camera}</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-gray-500">Gaming</span>
                    <div class="w-24 bg-gray-200 rounded-full h-1.5 ml-2">
                        <div class="bg-purple-500 h-1.5 rounded-full" style="width: ${phone.scores.gaming * 10}%"></div>
                    </div>
                    <span class="font-bold ml-2">${phone.scores.gaming}</span>
                </div>
            </div>

            <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <label class="flex items-center space-x-2 cursor-pointer select-none checkbox-wrapper" onclick="event.stopPropagation()">
                    <input type="checkbox" class="hidden" onchange="toggleCompare(${phone.id})" ${isCompared ? 'checked' : ''}>
                    <div class="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center transition-colors">
                        <i data-lucide="check" class="w-3 h-3 text-white"></i>
                    </div>
                    <span class="text-sm font-medium text-gray-600">Bandingkan</span>
                </label>
                <button class="text-blue-600 text-sm font-medium hover:underline">Lihat Detail</button>
            </div>
        `;

        grid.appendChild(card);
    });

    if (window.lucide) {
        lucide.createIcons();
    }
}

// --- DETAIL MODAL LOGIC (NEW) ---
function showDetail(id) {
    const phone = smartphones.find(p => p.id === id);
    if (!phone) return;

    const modal = document.getElementById('detail-modal');
    const content = document.getElementById('detail-content');

    content.innerHTML = `
        <div class="flex flex-col md:flex-row">
            <!-- Left Side: Image -->
            <div class="w-full md:w-1/3 bg-gray-50 p-8 flex items-center justify-center rounded-t-[2.5rem] md:rounded-l-[2.5rem] md:rounded-tr-none">
                <img src="${phone.image}" alt="${phone.name}" class="max-h-80 object-contain drop-shadow-xl" onerror="this.src='https://placehold.co/300x400?text=No+Image'">
            </div>
            
            <!-- Right Side: Info -->
            <div class="w-full md:w-2/3 p-8 md:p-10">
                <div class="mb-6">
                    <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">${phone.brand}</span>
                    <h2 class="text-3xl font-bold text-gray-900 leading-tight mb-2">${phone.name}</h2>
                    <p class="text-4xl font-bold text-blue-600">${formatRupiah(phone.price)}</p>
                </div>

                <div class="grid grid-cols-2 gap-x-8 gap-y-6 mb-8">
                    <div>
                        <p class="text-gray-500 text-sm mb-1">Chipset</p>
                        <p class="font-semibold text-gray-900 flex items-center"><i data-lucide="cpu" class="w-4 h-4 mr-2 text-blue-500"></i> ${phone.chipset}</p>
                    </div>
                    <div>
                        <p class="text-gray-500 text-sm mb-1">RAM & Storage</p>
                        <p class="font-semibold text-gray-900 flex items-center"><i data-lucide="hard-drive" class="w-4 h-4 mr-2 text-purple-500"></i> ${phone.ram} / ${phone.storage}</p>
                    </div>
                    <div>
                        <p class="text-gray-500 text-sm mb-1">Layar</p>
                        <p class="font-semibold text-gray-900 flex items-center"><i data-lucide="monitor" class="w-4 h-4 mr-2 text-indigo-500"></i> ${phone.screen}</p>
                    </div>
                    <div>
                        <p class="text-gray-500 text-sm mb-1">Baterai</p>
                        <p class="font-semibold text-gray-900 flex items-center"><i data-lucide="battery" class="w-4 h-4 mr-2 text-green-500"></i> ${phone.battery}</p>
                    </div>
                    <div class="col-span-2">
                        <p class="text-gray-500 text-sm mb-1">Kamera</p>
                        <p class="font-semibold text-gray-900 flex items-center"><i data-lucide="camera" class="w-4 h-4 mr-2 text-red-500"></i> ${phone.camera}</p>
                    </div>
                </div>

                <div class="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 mb-8">
                    <h4 class="font-bold text-blue-800 mb-2 flex items-center"><i data-lucide="trending-up" class="w-4 h-4 mr-2"></i> Upgrade dari Generasi Lalu:</h4>
                    <p class="text-blue-900/80 text-sm leading-relaxed">${phone.prevGen}</p>
                </div>

                <div class="space-y-3">
                    <div class="flex items-center justify-between text-sm">
                        <span class="text-gray-500 font-medium w-24">Gaming</span>
                        <div class="flex-1 bg-gray-100 rounded-full h-2 mx-3">
                            <div class="bg-purple-500 h-2 rounded-full" style="width: ${phone.scores.gaming * 10}%"></div>
                        </div>
                        <span class="font-bold text-gray-900">${phone.scores.gaming}/10</span>
                    </div>
                    <div class="flex items-center justify-between text-sm">
                        <span class="text-gray-500 font-medium w-24">Kamera</span>
                        <div class="flex-1 bg-gray-100 rounded-full h-2 mx-3">
                            <div class="bg-blue-500 h-2 rounded-full" style="width: ${phone.scores.camera * 10}%"></div>
                        </div>
                        <span class="font-bold text-gray-900">${phone.scores.camera}/10</span>
                    </div>
                    <div class="flex items-center justify-between text-sm">
                        <span class="text-gray-500 font-medium w-24">Baterai</span>
                        <div class="flex-1 bg-gray-100 rounded-full h-2 mx-3">
                            <div class="bg-green-500 h-2 rounded-full" style="width: ${phone.scores.battery * 10}%"></div>
                        </div>
                        <span class="font-bold text-gray-900">${phone.scores.battery}/10</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    lucide.createIcons();
}

// --- FILTER LOGIC ---
function filterByPrice(min, max) {
    const brandInput = document.getElementById('brandInput');
    const batteryInput = document.getElementById('batteryInput');
    const storageInput = document.getElementById('storageInput');

    if (brandInput) brandInput.value = 'all';
    if (batteryInput) batteryInput.value = '0';
    if (storageInput) storageInput.value = '0';

    filteredPhones = smartphones.filter(p => p.price >= min && p.price <= max);
    renderPhones(filteredPhones);

    smoothScrollTo('phoneGrid');
}

function quickFilter(category) {
    if (category === 'photography') category = 'camera';

    const brandInput = document.getElementById('brandInput');
    const batteryInput = document.getElementById('batteryInput');
    const storageInput = document.getElementById('storageInput');

    if (brandInput) brandInput.value = 'all';
    if (batteryInput) batteryInput.value = '0';
    if (storageInput) storageInput.value = '0';

    filteredPhones = smartphones.filter(p => p.category.includes(category));
    renderPhones(filteredPhones);

    smoothScrollTo('phoneGrid');
}

function resetFilters() {
    const brandInput = document.getElementById('brandInput');
    const batteryInput = document.getElementById('batteryInput');
    const storageInput = document.getElementById('storageInput');

    if (brandInput) brandInput.value = 'all';
    if (batteryInput) batteryInput.value = '0';
    if (storageInput) storageInput.value = '0';

    filteredPhones = [...smartphones];
    renderPhones(filteredPhones);
}

function applyAdvancedFilter() {
    const brand = document.getElementById('brandInput')?.value || 'all';
    const batt = parseInt(document.getElementById('batteryInput')?.value || '0', 10);
    const storage = parseInt(document.getElementById('storageInput')?.value || '0', 10);

    filteredPhones = smartphones.filter(p => {
        const matchBrand = brand === 'all' || p.brand.includes(brand);
        const matchBatt = parseInt(p.battery, 10) >= batt;
        const matchStore = parseInt(p.storage, 10) >= storage;
        return matchBrand && matchBatt && matchStore;
    });

    renderPhones(filteredPhones);
}

// --- COMPARISON ---
function toggleCompare(id) {
    const index = compareList.indexOf(id);
    if (index > -1) {
        compareList.splice(index, 1);
        showToast("Dihapus dari perbandingan");
    } else {
        if (compareList.length >= 3) {
            showToast("Maksimal 3 HP untuk perbandingan", "error");
            renderPhones(filteredPhones);
            return;
        }
        compareList.push(id);
        showToast("Ditambahkan ke perbandingan");
    }
    updateCompareBar();
}

function updateCompareBar() {
    const bar = document.getElementById('compare-bar');
    const countSpan = document.getElementById('compare-count');

    if (!bar || !countSpan) return;

    countSpan.innerText = compareList.length;
    if (compareList.length > 0) {
        bar.classList.remove('translate-y-full');
    } else {
        bar.classList.add('translate-y-full');
    }
}

function clearComparison() {
    compareList = [];
    updateCompareBar();
    renderPhones(filteredPhones);
}

function showComparisonModal() {
    const modal = document.getElementById('compare-modal');
    const thead = document.getElementById('compare-head');
    const tbody = document.getElementById('compare-body');

    if (!modal || !thead || !tbody) return;

    const phones = smartphones.filter(p => compareList.includes(p.id));

    if (phones.length === 0) {
        showToast("Pilih dulu minimal 1 HP", "error");
        return;
    }

    let headHTML = '<tr><th class="p-4 bg-gray-50 border-b">Spesifikasi</th>';
    phones.forEach(p => {
        headHTML += `
            <th class="p-4 bg-white border-b min-w-[200px]">
                <img src="${p.image}" class="h-24 mx-auto mb-2 object-contain">
                <div class="text-lg font-bold text-center">${p.name}</div>
                <div class="text-blue-600 text-center text-sm">${formatRupiah(p.price)}</div>
            </th>
        `;
    });
    headHTML += '</tr>'; 
    thead.innerHTML = headHTML;

    const specs = [
        { key: 'chipset', label: 'Chipset' },
        { key: 'ram', label: 'RAM' },
        { key: 'storage', label: 'Storage' },
        { key: 'screen', label: 'Layar' },
        { key: 'camera', label: 'Kamera' },
        { key: 'battery', label: 'Baterai' },
        { key: 'prevGen', label: 'vs Generasi Lalu' }
    ];

    let bodyHTML = '';
    specs.forEach(spec => {
        bodyHTML += `<tr><td class="p-4 border-b font-medium text-gray-500">${spec.label}</td>`;
        phones.forEach(p => {
            bodyHTML += `
                <td class="p-4 border-b text-gray-800 ${spec.key === 'prevGen' ? 'text-sm bg-blue-50/50' : ''}">
                    ${p[spec.key]}
                </td>
            `;
        });
        bodyHTML += '</tr>';
    });

    tbody.innerHTML = bodyHTML;
    modal.classList.remove('hidden');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('hidden');
}

// --- SAVED ---
function toggleSave(id) {
    const index = savedList.indexOf(id);
    if (index > -1) {
        savedList.splice(index, 1);
        showToast("Dihapus dari daftar simpan");
    } else {
        savedList.push(id);
        showToast("Berhasil disimpan!");
    }
    localStorage.setItem('savedPhones', JSON.stringify(savedList));
    updateSavedBadge();
    renderPhones(filteredPhones);
    renderSavedSection();
}

function updateSavedBadge() {
    const badge = document.getElementById('saved-badge');
    if (!badge) return;

    badge.innerText = savedList.length;
    if (savedList.length > 0) {
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

function renderSavedSection() {
    const grid = document.getElementById('savedGrid');
    if (!grid) return;

    const savedPhones = smartphones.filter(p => savedList.includes(p.id));

    if (savedPhones.length === 0) {
        grid.innerHTML = '<p class="col-span-3 text-center py-10 text-gray-400">Belum ada item yang disimpan.</p>';
        return;
    }

    grid.innerHTML = '';
    savedPhones.forEach(phone => {
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4';
        card.innerHTML = `
            <img src="${phone.image}" class="w-16 h-20 object-contain">
            <div class="flex-grow">
                <h4 class="font-bold text-lg">${phone.name}</h4>
                <p class="text-blue-600 font-medium">${formatRupiah(phone.price)}</p>
            </div>
            <button onclick="toggleSave(${phone.id})" class="text-red-500 hover:bg-red-50 p-2 rounded-full">
                <i data-lucide="trash-2" class="w-5 h-5"></i>
            </button>
        `;
        grid.appendChild(card);
    });

    if (window.lucide) {
        lucide.createIcons();
    }
}

// --- QUIZ (FIXED) ---
const quizQuestions = [
    {
        q: "Berapa anggaran maksimal Anda?",
        opts: [
            { t: "Di bawah 3 Juta (Hemat)", val: { min: 0, max: 3000000 } },
            { t: "3 - 6 Juta (Menengah)", val: { min: 3000000, max: 6000000 } },
            { t: "Di atas 6 Juta (Flagship)", val: { min: 6000000, max: 99000000 } }
        ]
    },
    {
        q: "Untuk apa HP ini paling sering dipakai?",
        opts: [
            { t: "Main game berat", val: { cat: 'gaming' } },
            { t: "Foto dan video", val: { cat: 'camera' } },
            { t: "Sosmed dan chat biasa", val: { cat: 'basic' } }
        ]
    },
    {
        q: "Seberapa penting kualitas layar bagi Anda?",
        opts: [
            { t: "Sangat penting. Harus jernih dan mulus", val: { score: 'screen' } },
            { t: "Biasa saja", val: { score: 'ignore' } }
        ]
    },
    {
        q: "Apakah Anda butuh baterai super awet?",
        opts: [
            { t: "Ya. Malas bawa powerbank", val: { score: 'battery' } },
            { t: "Standar saja. Cas sekali sehari cukup", val: { score: 'ignore' } }
        ]
    },
    {
        q: "Apakah Anda fanatik brand tertentu?",
        opts: [
            { t: "Bebas. Yang penting bagus", val: { brand: 'all' } },
            { t: "Suka Samsung", val: { brand: 'Samsung' } },
            { t: "Suka iPhone", val: { brand: 'Apple' } },
            { t: "Suka HP Gaming (iQoo/Asus)", val: { brand: 'Lainnya' } }
        ]
    }
];

let currentQ = 0;
// Inisialisasi awal dengan minPrice 0
let quizCriteria = { minPrice: 0, maxPrice: 99999999, category: null, brand: null };

function startQuiz() {
    currentQ = 0;
    // Reset criteria saat mulai ulang
    quizCriteria = { minPrice: 0, maxPrice: 99999999, category: null, brand: null };

    const quizResult = document.getElementById('quiz-result');
    const quizContainer = document.getElementById('quiz-container');

    if (quizResult) quizResult.classList.add('hidden');
    if (quizContainer) quizContainer.classList.remove('hidden');

    renderQuestion();
}

function renderQuestion() {
    const qObj = quizQuestions[currentQ];

    const qEl = document.getElementById('quiz-question');
    const progress = document.getElementById('quiz-progress');
    const optsDiv = document.getElementById('quiz-options');

    if (!qObj || !qEl || !progress || !optsDiv) return;

    qEl.innerText = qObj.q;
    progress.style.width = `${((currentQ + 1) / quizQuestions.length) * 100}%`;

    optsDiv.innerHTML = '';
    qObj.opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition font-medium text-lg";
        btn.innerText = opt.t;
        btn.onclick = () => handleAnswer(opt.val);
        optsDiv.appendChild(btn);
    });
}

function handleAnswer(val) {
    // Tangkap minPrice jika ada
    if (val.min !== undefined) quizCriteria.minPrice = val.min;
    if (val.max) quizCriteria.maxPrice = val.max;
    if (val.cat) quizCriteria.category = val.cat;
    if (val.brand) quizCriteria.brand = val.brand;

    currentQ += 1;
    if (currentQ < quizQuestions.length) {
        renderQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    const quizResult = document.getElementById('quiz-result');
    const quizContainer = document.getElementById('quiz-container');
    const resDiv = document.getElementById('quiz-best-match');

    if (!quizResult || !quizContainer || !resDiv) return;

    quizContainer.classList.add('hidden');
    quizResult.classList.remove('hidden');

    // Filter Logic: Cek harga di antara minPrice dan maxPrice
    const matches = smartphones.filter(p => {
        const priceOk = p.price >= quizCriteria.minPrice && p.price <= quizCriteria.maxPrice;
        const brandOk = !quizCriteria.brand || quizCriteria.brand === 'all' || p.brand === quizCriteria.brand;
        return priceOk && brandOk;
    });

    // Sort Logic
    if (quizCriteria.category) {
        matches.sort((a, b) => {
            const aHas = a.category.includes(quizCriteria.category) ? 1 : 0;
            const bHas = b.category.includes(quizCriteria.category) ? 1 : 0;
            return bHas - aHas;
        });
    }

    // Fallback jika tidak ada yang cocok (ambil HP pertama dalam rentang harga)
    // Jika benar-benar kosong, ambil HP pertama dari seluruh daftar sebagai fallback terakhir
    const best = matches[0] || smartphones[0];

    resDiv.innerHTML = `
        <div class="apple-card p-8 rounded-3xl border border-blue-100 bg-blue-50/30">
            <div class="flex flex-col md:flex-row items-center gap-8">
                <img src="${best.image}" class="w-40 object-contain">
                <div>
                    <h3 class="text-2xl font-bold mb-2">${best.name}</h3>
                    <p class="text-3xl text-blue-600 font-bold mb-4">${formatRupiah(best.price)}</p>
                    <p class="text-gray-600 mb-4">
                        Pilihan ini cocok karena masuk dalam anggaran Anda, punya chipset <strong>${best.chipset}</strong>
                        dan kamera <strong>${best.camera}</strong>.
                    </p>
                    <div class="flex gap-3">
                        <button onclick="compareList = [${best.id}]; updateCompareBar(); showComparisonModal();" class="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700">
                            Lihat detail dan bandingkan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function resetQuiz() {
    startQuiz();
}