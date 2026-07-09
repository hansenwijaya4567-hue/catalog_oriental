export const WA_NUMBER = '6289524146310';

export const brands = {
  jaecoo: {
    name: 'JAECOO', emoji: '🔴', color: '#e63946',
    desc: 'SUV premium dengan desain elegan dan teknologi hybrid terkini.',
    video: 'https://videos.pexels.com/video-files/855652/855652-sd_640_360_25fps.mp4',
    cars: [
      {
        id: 'j5-ev', name: 'J5 EV', type: 'SUV Listrik',
        tagline: 'This is the Real SUV',
        specs: [
          { label: 'Motor', value: '155kW (208hp)' },
          { label: 'Torsi', value: '288 Nm' },
          { label: 'Baterai', value: '60.9 kWh' },
          { label: 'Jarak Tempuh', value: '461 km' },
          { label: '0-100 km/h', value: '7.3 detik' },
          { label: 'Ground Clearance', value: '200 mm' },
          { label: 'ADAS', value: '17 Fitur' },
          { label: 'Tempat Duduk', value: '5 Kursi' },
          { label: 'Pengisian DC', value: '30-80% dalam 28 menit' }
        ],
        images: [
          'https://media.evkx.net/multimedia/models/jaecoo/j5/j5_ev/main_94693.webp',
          'https://media.evkx.net/multimedia/models/jaecoo/j5/j5_ev/exterior_01804.webp',
          'https://media.evkx.net/multimedia/models/jaecoo/j5/j5_ev/exterior_007eb.webp',
          'https://media.evkx.net/multimedia/models/jaecoo/j5/j5_ev/exterior_19a70.webp',
          'https://media.evkx.net/multimedia/models/jaecoo/j5/j5_ev/interior_3f678.webp',
          'https://media.evkx.net/multimedia/models/jaecoo/j5/j5_ev/frontseats_723ee.webp',
          'https://media.evkx.net/multimedia/models/jaecoo/j5/j5_ev/screens_2890e.webp',
          'https://media.evkx.net/multimedia/models/jaecoo/j5/j5_ev/secondrowseats_a3e66.webp'
        ],
        features: [
          'Panoramic Sunroof 1.45 m²', 'Layar Sentuh 13.2 inci', 'Spidometer Digital 8 inci',
          'Apple CarPlay & Android Auto', 'Kursi Depan Berpendingin', 'Active Grille Shutter',
          'Regenerative Braking', 'V2L 3.3kW', 'Kunci Pintar & Engine Start',
          'Lampu LED Depan & Belakang', 'Sensor Parkir Depan & Belakang', 'Kamera 360°',
          'Blind Spot Detection', 'Lane Departure Warning', 'Forward Collision Warning',
          'Pengisian Cepat DC 130kW', 'Mode Berkendara (3 Mode)', 'Konektivitas Bluetooth'
        ],
        warranty: [
          'Garansi Kendaraan: 5 tahun / 150.000 km',
          'Garansi Baterai: 8 tahun / 160.000 km',
          'Garansi Motor Listrik: 8 tahun / 150.000 km'
        ],
        variants: 'Standard | Premium',
        categories: ['Listrik', 'SUV', 'EV']
      },
      {
        id: 'j7-shs', name: 'J7 SHS', type: 'SUV Plug-in Hybrid',
        tagline: 'Urban Luxury Reimagined',
        specs: [
          { label: 'Mesin', value: '1.5T + Motor Listrik' },
          { label: 'Total Tenaga', value: '341 hp' },
          { label: 'Torsi', value: '525 Nm' },
          { label: 'Baterai', value: '18.3 kWh' },
          { label: 'Jarak Total', value: '1.300 km' },
          { label: 'Mode EV', value: '100 km' },
          { label: '0-100 km/h', value: '7.3 detik' },
          { label: 'ADAS', value: '19 Fitur' },
          { label: 'Ground Clearance', value: '200 mm' },
          { label: 'Transmisi', value: '1DHT' },
          { label: 'Airbag', value: '8 Airbags' }
        ],
        images: [
          'https://imgcdn.oto.com/medium/gallery/exterior/185/3192/jaecoo-j7-shs-47806.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/3192/jaecoo-j7-shs-front-angle-low-view-360184.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/3192/jaecoo-j7-shs-grille-view-480301.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/3192/jaecoo-j7-shs-drivers-side-mirror-front-angle-888578.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/3192/jaecoo-j7-shs-wheel-892957.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/3192/jaecoo-j7-shs-tilted-front-view-522920.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/3192/jaecoo-j7-shs-front-deep-low-angle-view-350605.jpg'
        ],
        features: [
          'Super Hybrid System (SHS)', 'Adaptive Cruise Control', 'Traffic Jam Assist',
          'Blind Spot Detection', 'Driver Monitoring System', 'Rear Cross Traffic Alert',
          'Forward Collision Warning', 'Autonomous Emergency Braking', 'Emergency Lane Keeping',
          'Lane Departure Prevention', 'IP68 Battery Protection', 'Wireless Charging',
          'Head-Up Display', 'Sony Audio System', 'Dual Zone AC',
          'Electric Parking Brake', 'Hill Start Assist', '540° Camera'
        ],
        warranty: [
          'Garansi Kendaraan: 5 tahun / 150.000 km',
          'Garansi Baterai Hybrid: 8 tahun / 160.000 km',
          'Garansi Komponen Hybrid: 8 tahun'
        ],
        variants: '1.5L DHT',
        categories: ['Hybrid', 'SUV', 'PHEV']
      },
      {
        id: 'j7-awd', name: 'J7 AWD', type: 'SUV Bensin',
        tagline: 'Tangguh Tanpa Kompromi',
        specs: [
          { label: 'Mesin', value: '1.6L TGDI' },
          { label: 'Tenaga', value: '183 hp' },
          { label: 'Torsi', value: '275 Nm' },
          { label: 'Transmisi', value: 'Dual Clutch 7-Speed' },
          { label: 'Ground Clearance', value: '200 mm' },
          { label: 'Tempat Duduk', value: '5 Kursi' },
          { label: 'Penggerak', value: 'AWD' }
        ],
        images: [
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2980/jaecoo-j7-29269.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2980/jaecoo-j7-front-angle-low-view-606127.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2980/jaecoo-j7-grille-view-316638.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2980/jaecoo-j7-headlight-399842.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2980/jaecoo-j7-wheel-501801.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2980/jaecoo-j7-front-side-view-564503.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2980/jaecoo-j7-tilted-front-view-165474.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2980/jaecoo-j7-front-deep-low-angle-view-654541.jpg'
        ],
        features: [
          'Sistem AWD Cerdas', '7-Speed DCT', 'Mode Berkendara Multimode',
          'Panoramic Sunroof', 'Kursi Kulit Premium', 'Layar 12.3 inci',
          'Kamera 360°', 'Sensor Parkir Depan & Belakang', 'Blind Spot Detection',
          'Lane Departure Warning', 'Rear Cross Traffic Alert', '6 Airbags',
          'Dual Zone AC', 'Keyless Entry', 'Electric Parking Brake',
          'Hill Descent Control', 'Traction Control', 'ABS & EBD'
        ],
        warranty: [
          'Garansi Kendaraan: 5 tahun / 150.000 km'
        ],
        variants: 'AWD',
        categories: ['Bensin', 'SUV', 'AWD']
      },
      {
        id: 'j8-ardis', name: 'J8 ARDIS', type: 'SUV Premium',
        tagline: 'First Class Off-Road',
        specs: [
          { label: 'Mesin', value: '2.0L TGDI Turbo' },
          { label: 'Tenaga', value: '248 hp' },
          { label: 'Torsi', value: '385 Nm' },
          { label: 'Transmisi', value: 'Otomatis 8-Speed' },
          { label: 'Suspensi', value: 'CDC Magnetic' },
          { label: 'Penggerak', value: 'ARDIS AWD' },
          { label: '0-100 km/h', value: '8.8 detik' },
          { label: 'Mode Berkendara', value: '7 Mode' },
          { label: 'ADAS', value: '19 Fitur' },
          { label: 'Airbag', value: '10 Airbags' }
        ],
        images: [
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2979/jaecoo-j8-ardis-42104.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2979/jaecoo-j8-ardis-front-angle-low-view-582558.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2979/jaecoo-j8-ardis-side-view-157787.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2979/jaecoo-j8-ardis-top-view-129228.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2979/jaecoo-j8-ardis-grille-view-115765.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2979/jaecoo-j8-ardis-door-handle-969228.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2979/jaecoo-j8-ardis-front-side-view-110946.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2979/jaecoo-j8-ardis-medium-angle-front-view-581274.jpg'
        ],
        features: [
          'ARDIS All-Road Drive Intelligent System', 'CDC Magnetic Suspension',
          'Dynamic Torque Vectoring', 'Adaptive Cruise Control', '540° Around View Monitor',
          'Automatic Parking Assist', 'Blind Spot Detection', 'Emergency Lane Keeping',
          'Forward Collision Warning', 'Autonomous Emergency Braking', 'Lane Departure Prevention',
          'Panoramic Sunroof', 'Kursi Kulit Nappa', 'Sistem Audio Premium',
          'Dual Zone Auto AC', 'Kursi Elektrik Adjustable', 'Wireless Charging',
          'Ambient Light Multicolor'
        ],
        warranty: [
          'Garansi Kendaraan: 5 tahun / 150.000 km'
        ],
        variants: '2.0L Turbo | SHS',
        categories: ['Bensin', 'SUV', 'AWD', 'Premium']
      },
      {
        id: 'j8-shs-ardis', name: 'J8 SHS ARDIS', type: 'SUV Hybrid Premium',
        tagline: 'From Classic Beyond Classic',
        specs: [
          { label: 'Mesin + Motor', value: '1.5T + 3DHT' },
          { label: 'Total Tenaga', value: '395 kW' },
          { label: 'Torsi', value: '650 Nm' },
          { label: 'Baterai', value: '34.46 kWh' },
          { label: 'Jarak Total', value: '1.400 km' },
          { label: 'Mode EV', value: '180 km' },
          { label: '0-100 km/h', value: '5.4 detik' },
          { label: 'ADAS', value: '19 Fitur' },
          { label: 'Airbag', value: '10 Airbags' },
          { label: 'Suspensi', value: 'CDC Magnetic' },
          { label: 'Penggerak', value: 'ARDIS AWD' }
        ],
        images: [
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2979/jaecoo-j8-ardis-42104.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2979/jaecoo-j8-ardis-front-angle-low-view-582558.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2979/jaecoo-j8-ardis-side-view-157787.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2979/jaecoo-j8-ardis-top-view-129228.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2979/jaecoo-j8-ardis-grille-view-115765.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2979/jaecoo-j8-ardis-door-handle-969228.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2979/jaecoo-j8-ardis-front-side-view-110946.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2979/jaecoo-j8-ardis-medium-angle-front-view-581274.jpg'
        ],
        features: [
          'Super Hybrid System + ARDIS', 'CDC Magnetic Suspension', 'ARDIS AWD',
          'Adaptive Cruise Control + Curve Assist', '540° Around View Monitor',
          'Blind Spot Detection', 'Emergency Lane Keeping', 'Forward Collision Warning',
          'AEB Autonomous Emergency Braking', 'Lane Departure Prevention',
          'Automatic Parking Assist', 'Kursi Kulit Nappa Premium', 'Panoramic Sunroof',
          'Sistem Audio Sony 14 Speaker', 'Kursi Pijat Elektrik', 'Head-Up Display',
          'Dual Zone Auto AC', 'Wireless Charging', 'IP68 Battery Protection'
        ],
        warranty: [
          'Garansi Kendaraan: 5 tahun / 150.000 km',
          'Garansi Baterai Hybrid: 8 tahun / 160.000 km',
          'Garansi Komponen Hybrid: 8 tahun'
        ],
        variants: 'SHS ARDIS AWD',
        categories: ['Hybrid', 'SUV', 'AWD', 'Premium']
      }
    ]
  },
  icar: {
    name: 'iCAR', emoji: '🔵', color: '#00b4d8',
    desc: 'SUV listrik futuristik dengan desain boxy ikonik dan personalisasi tanpa batas.',
    video: 'https://videos.pexels.com/video-files/855652/855652-sd_640_360_25fps.mp4',
    cars: [
      {
        id: 'v23-ev', name: 'V23 EV', type: 'SUV Listrik',
        tagline: 'Born To Play',
        specs: [
          { label: 'Motor', value: '100 kW (136 PS)' },
          { label: 'Torsi', value: '180 Nm' },
          { label: 'Baterai', value: '59.93 kWh LFP' },
          { label: 'Jarak Tempuh', value: '360 km (NEDC)' },
          { label: 'Dimensi (PxLxT)', value: '4220 x 1915 x 1845 mm' },
          { label: 'Ground Clearance', value: '167 mm' },
          { label: 'Penggerak', value: 'RWD / iWD' },
          { label: 'Tempat Duduk', value: '5 Kursi' },
          { label: 'Wheelbase', value: '2735 mm' },
          { label: 'Pengisian', value: '36 menit (DC)' }
        ],
        images: [
          'https://imgcdn.oto.com/medium/gallery/exterior/213/3324/icaur-v23-15193.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/213/3324/icaur-v23-front-angle-low-view-363465.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/213/3324/icaur-v23-grille-view-556810.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/213/3324/icaur-v23-tail-light-395941.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/213/3324/icaur-v23-wheel-170318.jpg',
          'https://media.evkx.net/multimedia/models/icar/v23/v23_501_awd/main_65dce.webp'
        ],
        features: [
          'Desain Boxy Ikonik', '20 Titik Modular', 'Personalisasi Eksterior',
          'Lampu LED Retro', 'Velg 19 inci', 'Side Step',
          'Digital Instrument Cluster', 'Layar Sentuh Multimedia', 'Konektivitas Smartphone',
          'Adjustable Interior Ambient Lighting', 'Premium Audio JBL', 'Soft Close Door',
          'Kamera 360°', 'Sensor Parkir', 'Regenerative Braking',
          'V2L Function', 'Mode Berkendara', 'Roof Rail'
        ],
        warranty: [
          'Garansi Kendaraan: 5 tahun / 150.000 km',
          'Garansi Baterai: 8 tahun / 160.000 km',
          'Garansi Motor Listrik: 8 tahun'
        ],
        variants: 'X RWD | OG Y RWD | OG Z iWD | Pro Plus',
        categories: ['Listrik', 'SUV', 'EV']
      }
    ]
  },
  chery: {
    name: 'CHERY', emoji: '🟢', color: '#2ec4b6',
    desc: 'Mobil inovatif dengan teknologi hybrid, listrik, dan mesin konvensional terdepan.',
    video: 'https://videos.pexels.com/video-files/855652/855652-sd_640_360_25fps.mp4',
    cars: [
      {
        id: 'tiggo-cross', name: 'Tiggo Cross', type: 'Crossover',
        tagline: 'Crossover Kompak & Modern',
        specs: [
          { label: 'Mesin', value: '1.5L CVT' },
          { label: 'Tenaga', value: '115 hp' },
          { label: 'Tempat Duduk', value: '5 Kursi' },
          { label: 'Dimensi', value: '4320 x 1760 x 1650 mm' },
          { label: 'Transmisi', value: 'CVT' }
        ],
        images: [
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3165/chery-tiggo-cross-97138.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3165/chery-tiggo-cross-front-angle-low-view-441026.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3165/chery-tiggo-cross-full-front-view-950547.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3165/chery-tiggo-cross-grille-view-772247.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3165/chery-tiggo-cross-front-fog-lamp-157468.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3165/chery-tiggo-cross-headlight-110529.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3165/chery-tiggo-cross-tail-light-156956.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3165/chery-tiggo-cross-front-cross-side-view-419541.jpg'
        ],
        features: [
          'Desain Modern Sporty', 'Layar 10.25 inci', 'Konektivitas Smartphone',
          'Kamera Mundur', 'Sensor Parkir Belakang', 'Dual Airbag',
          'ABS & EBD', 'AC Digital', 'Keyless Entry',
          'Power Window', 'Velg Alloy'
        ],
        warranty: ['Garansi Kendaraan: 5 tahun / 150.000 km'],
        variants: 'Comfort | Premium',
        categories: ['Bensin', 'Crossover']
      },
      {
        id: 'tiggo-7-pro', name: 'Tiggo 7 Pro', type: 'SUV',
        tagline: 'SUV Modern Berfitur Lengkap',
        specs: [
          { label: 'Mesin', value: '1.5L TCI' },
          { label: 'Tenaga', value: '155 hp' },
          { label: 'Torsi', value: '230 Nm' },
          { label: 'Transmisi', value: 'CVT' },
          { label: 'Tempat Duduk', value: '5 Kursi' },
          { label: 'Dimensi', value: '4500 x 1842 x 1705 mm' }
        ],
        images: [
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2571/chery-tiggo-7-pro-93478.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2571/chery-tiggo-7-pro-front-angle-low-view-745775.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2571/chery-tiggo-7-pro-side-view-113039.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2571/chery-tiggo-7-pro-front-side-view-484000.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2571/chery-tiggo-7-pro-front-medium-view-477310.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2571/chery-tiggo-7-pro-tilted-front-view-137781.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2571/chery-tiggo-7-pro-front-deep-low-angle-view-620574.jpg'
        ],
        features: [
          'Panoramic Sunroof', 'Layar 12.3 inci', 'Kursi Kulit Premium',
          'Kamera 360°', 'Dual Zone AC', 'Keyless Entry & Start',
          '6 Airbags', 'ABS, EBD, BA', 'Vehicle Stability Control',
          'Hill Start Assist', 'Traction Control', 'Wireless Charging',
          'Ambient Light', 'Sistem Audio 6 Speaker'
        ],
        warranty: ['Garansi Kendaraan: 5 tahun / 150.000 km'],
        variants: 'Comfort | Luxury | Premium',
        categories: ['Bensin', 'SUV']
      },
      {
        id: 'tiggo-8', name: 'Tiggo 8', type: 'SUV 7-Seater',
        tagline: 'SUV Keluarga Premium',
        specs: [
          { label: 'Mesin', value: '1.6L TGDI' },
          { label: 'Tenaga', value: '183 hp' },
          { label: 'Torsi', value: '275 Nm' },
          { label: 'Transmisi', value: 'Dual Clutch' },
          { label: 'Tempat Duduk', value: '7 Kursi' },
          { label: 'Dimensi', value: '4722 x 1860 x 1705 mm' }
        ],
        images: [
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3029/chery-tiggo-8-98155.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3029/chery-tiggo-8-front-angle-low-view-848465.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3029/chery-tiggo-8-grille-view-653091.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3029/chery-tiggo-8-headlight-659276.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3029/chery-tiggo-8-wheel-551420.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3029/chery-tiggo-8-front-side-view-581027.jpg'
        ],
        features: [
          '7-Seater Kapasitas Besar', 'Panoramic Sunroof', 'Layar 12.3 inci',
          'Kamera 360° HD', 'Kursi Kulit Premium', 'Dual Zone AC',
          'AC Baris ke-3', '6 Airbags', 'ADAS Lengkap',
          'Blind Spot Detection', 'Lane Departure Warning', 'Rear Cross Traffic Alert',
          'Hill Start Assist', 'Downhill Assist', '360 Camera',
          'Intelligent Voice Assistant', 'Suspensi Nyaman'
        ],
        warranty: ['Garansi Kendaraan: 5 tahun / 150.000 km'],
        variants: 'Comfort | Premium',
        categories: ['Bensin', 'SUV', '7-Seater']
      },
      {
        id: 'omoda-e5', name: 'Omoda E5', type: 'SUV Listrik',
        tagline: 'SUV Listrik Masa Depan',
        specs: [
          { label: 'Motor', value: '150 kW' },
          { label: 'Baterai', value: '61 kWh LFP' },
          { label: 'Jarak Tempuh', value: '430 km' },
          { label: 'Tempat Duduk', value: '5 Kursi' },
          { label: 'Dimensi', value: '4424 x 1830 x 1588 mm' }
        ],
        images: [
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2792/chery-omoda-e5-50251.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2792/chery-omoda-e5-front-angle-low-view-145192.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2792/chery-omoda-e5-rear-cross-side-view-160344.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2792/chery-omoda-e5-full-front-view-607323.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2792/chery-omoda-e5-grille-view-830361.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2792/chery-omoda-e5-headlight-792176.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2792/chery-omoda-e5-tail-light-265965.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2792/chery-omoda-e5-wheel-947569.jpg'
        ],
        features: [
          'Motor Listrik Tenang', 'Pengisian Cepat DC', 'V2L Function',
          'Layar 12.3 inci', 'Wireless Charging', 'Kamera 360°',
          '6 Airbags', 'ADAS', 'Blind Spot Detection',
          'Lane Keep Assist', 'Regenerative Braking'
        ],
        warranty: [
          'Garansi Kendaraan: 5 tahun / 150.000 km',
          'Garansi Baterai: 8 tahun / 160.000 km'
        ],
        variants: 'Pure | Premium',
        categories: ['Listrik', 'SUV', 'EV']
      },
      {
        id: 'tiggo-8-pro', name: 'Tiggo 8 Pro', type: 'SUV Premium',
        tagline: 'Kemewahan Kelas Atas',
        specs: [
          { label: 'Mesin', value: '2.0L TGDI' },
          { label: 'Tenaga', value: '250 hp' },
          { label: 'Torsi', value: '400 Nm' },
          { label: 'Transmisi', value: 'Dual Clutch 7-Speed' },
          { label: 'Tempat Duduk', value: '7 Kursi' }
        ],
        images: [
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2570/chery-tiggo-8-pro-41142.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2570/chery-tiggo-8-pro-front-angle-low-view-207931.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2570/chery-tiggo-8-pro-front-fog-lamp-966645.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2570/chery-tiggo-8-pro-headlight-327218.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2570/chery-tiggo-8-pro-tail-light-758070.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2570/chery-tiggo-8-pro-wheel-938559.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2570/chery-tiggo-8-pro-door-handle-355169.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/2570/chery-tiggo-8-pro-rear-angle-view-400963.jpg'
        ],
        features: [
          'Mesin 2.0 TGDI Bertenaga', 'Panoramic Sunroof', 'Layar 12.3 inci Dual',
          'Kamera 360° HD', 'Kursi Kulit Nappa', 'Dual Zone Auto AC',
          '6 Airbags', 'ADAS Premium', 'Blind Spot Detection',
          'Lane Departure Warning', 'Rear Cross Traffic Alert', 'Forward Collision Warning',
          'Intelligent Voice Command', 'Wireless Charging', 'Ambient Light',
          'Sistem Audio Premium 8 Speaker'
        ],
        warranty: ['Garansi Kendaraan: 5 tahun / 150.000 km'],
        variants: 'Luxury | Premium',
        categories: ['Bensin', 'SUV', 'Premium', '7-Seater']
      },
      {
        id: 'tiggo-8-csh', name: 'Tiggo 8 CSH', type: 'SUV Hybrid 7-Seater',
        tagline: 'Hybrid untuk Keluarga',
        specs: [
          { label: 'Mesin + Motor', value: '1.5T DHE + Motor' },
          { label: 'Total Tenaga', value: '341 hp' },
          { label: 'Baterai', value: '18.3 kWh' },
          { label: 'Jarak Total', value: '1.300 km' },
          { label: 'Mode EV', value: '90 km' },
          { label: 'Tempat Duduk', value: '7 Kursi' }
        ],
        images: [
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3243/chery-tiggo-8-csh-48577.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3243/chery-tiggo-8-csh-front-angle-low-view-615297.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3243/chery-tiggo-8-csh-wheel-925136.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3243/chery-tiggo-8-csh-front-medium-view-916770.jpg'
        ],
        features: [
          'Chery Super Hybrid System', 'Mode EV hingga 90 km', 'Irit Bahan Bakar',
          'Panoramic Sunroof', 'Layar 12.3 inci', 'Kamera 360°',
          'AC Baris ke-3', '6 Airbags', '14 ADAS',
          'Wireless Charging', 'Keyless Entry', 'Electric Parking Brake',
          'Regenerative Braking', 'Hill Start Assist'
        ],
        warranty: [
          'Garansi Kendaraan: 5 tahun / 150.000 km',
          'Garansi Baterai: 8 tahun / 160.000 km'
        ],
        variants: 'Comfort | Premium | AWD',
        categories: ['Hybrid', 'SUV', '7-Seater', 'PHEV']
      },
      {
        id: 'j6', name: 'J6', type: 'SUV Listrik Off-Road',
        tagline: 'SUV Listrik Petualang',
        specs: [
          { label: 'Motor', value: '181 - 275 hp' },
          { label: 'Baterai', value: '65.69 - 69.77 kWh' },
          { label: 'Jarak Tempuh', value: '418 - 426 km' },
          { label: 'Ground Clearance', value: '225 mm' },
          { label: 'Tempat Duduk', value: '5 Kursi' },
          { label: 'Dimensi', value: '4433 x 1916 x 1741 mm' },
          { label: 'Penggerak', value: 'RWD / iWD' }
        ],
        images: [
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2981/jaecoo-j6-13083.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/185/2981/jaecoo-j6-front-angle-low-view-646278.jpg',
          'https://media.evkx.net/multimedia/models/jaecoo/j6/j6_awd/main_81537.webp',
          'https://media.evkx.net/multimedia/models/jaecoo/j6/j6_awd/exterior_1.webp'
        ],
        features: [
          'Rangka Aluminium Anti-Korosi', 'Desain BOX Style EV SUV', 'Ground Clearance 225 mm',
          'iWD All-Wheel Drive', 'Suspensi Aluminium H-Arm', 'Mode Off-Road',
          'Panoramic Sunroof', 'Layar 12.3 inci', 'Kamera 360°',
          'Sistem Audio Harman', 'ADAS Canggih', '6 Airbags',
          'Regenerative Braking', 'V2L Function', 'Pengisian Cepat DC'
        ],
        warranty: [
          'Garansi Kendaraan: 5 tahun / 150.000 km',
          'Garansi Baterai: 8 tahun / 160.000 km',
          'Garansi Motor: 8 tahun'
        ],
        variants: 'RWD Phantom | RWD | T RWD | IWD | T IWD | IWD Phantom',
        categories: ['Listrik', 'SUV', 'Off-Road', 'EV']
      },
      {
        id: 'tiggo-9-csh', name: 'Tiggo 9 CSH', type: 'SUV Hybrid Flagship',
        tagline: 'Flagship Hybrid Premium',
        specs: [
          { label: 'Mesin', value: '1.5T + 3 Motor Listrik' },
          { label: 'Total Tenaga', value: '395 PS' },
          { label: 'Torsi', value: '650 Nm' },
          { label: 'Baterai', value: '34.46 kWh' },
          { label: 'Jarak Total', value: '1.400 km' },
          { label: 'Mode EV', value: '210 km' },
          { label: '0-100 km/h', value: '5.4 detik' },
          { label: 'Tempat Duduk', value: '7 Kursi' }
        ],
        images: [
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3276/chery-tiggo-9-csh-68951.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3276/chery-tiggo-9-csh-front-angle-low-view-377510.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3276/chery-tiggo-9-csh-full-front-view-953077.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3276/chery-tiggo-9-csh-grille-view-496232.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3276/chery-tiggo-9-csh-front-fog-lamp-158218.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3276/chery-tiggo-9-csh-headlight-979145.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3276/chery-tiggo-9-csh-wheel-603976.jpg',
          'https://imgcdn.oto.com/medium/gallery/exterior/153/3276/chery-tiggo-9-csh-front-side-view-265713.jpg'
        ],
        features: [
          'Chery Super Hybrid System (CSH)', 'Queen Seat dengan Fungsi Pijat', 'Layar HD 15.6 inci',
          'Sistem Audio Sony 14 Speaker', 'Panoramic Sunroof', 'Kabin Senyap Premium',
          'Automatic Parking Assist (APA)', '17 ADAS', '10 Airbags',
          '540° Panoramic Camera', 'Kursi Kulit Nappa', 'Voice Command Offline',
          'Wireless Charging', 'Dual Zone Auto AC', 'Kursi Elektrik Adjustable',
          'Material Interior Ramah Lingkungan', 'Suspensi Nyaman'
        ],
        warranty: [
          'Garansi Kendaraan: 5 tahun / 150.000 km',
          'Garansi Baterai: 8 tahun / 160.000 km',
          'Garansi Komponen Hybrid: 8 tahun'
        ],
        variants: '1.5L AWD',
        categories: ['Hybrid', 'SUV', 'Flagship', 'PHEV', '7-Seater']
      }
    ]
  }
};
