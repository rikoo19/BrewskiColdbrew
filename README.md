# Brewski Coffee Shop Website

Website kedai kopi "Brewski" yang lengkap dengan fitur chatbot AI hybrid menggunakan Next.js 14, TailwindCSS, Prisma ORM, MySQL, dan Google Gemini API.

## 🚀 Fitur Utama

- **Website Modern**: Desain clean dan responsive dengan tema coffee shop
- **Chatbot AI Hybrid**: Kombinasi data internal (MySQL) + Google Gemini API
- **Menu Dinamis**: Data produk dari database MySQL
- **Halaman Lengkap**: Home, Menu, About, Contact
- **Order Integration**: Link ke marketplace (GoFood, GrabFood)
- **Floating Chatbot**: Widget chat di pojok kanan bawah

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: TailwindCSS dengan custom color theme
- **Database**: MySQL dengan Prisma ORM
- **AI**: Google Gemini API untuk chatbot
- **Icons**: Lucide React
- **Deployment**: Ready untuk Vercel/Netlify

## 📁 Struktur Project

```
brewski-coffee-shop/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.ts               # Data seeding
├── src/
│   ├── app/
│   │   ├── api/chat/         # Chatbot API endpoint
│   │   ├── about/            # Halaman About
│   │   ├── contact/          # Halaman Contact  
│   │   ├── menu/             # Halaman Menu
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Homepage
│   ├── components/
│   │   ├── ChatWidget.tsx    # Floating chat button
│   │   └── ChatWindow.tsx    # Chat interface
│   └── lib/
│       ├── prisma.ts         # Prisma client
│       └── utils.ts          # Utility functions
├── .env.example              # Environment variables template
├── package.json              # Dependencies
└── README.md                 # Dokumentasi
```

## 🗄 Database Schema

### Tabel `users`
- `id` - INT AUTO_INCREMENT PRIMARY KEY
- `name` - VARCHAR(100)
- `email` - VARCHAR(100) UNIQUE
- `password_hash` - TEXT
- `created_at` - DATETIME

### Tabel `products`
- `id` - INT AUTO_INCREMENT PRIMARY KEY
- `name` - VARCHAR(100)
- `price` - VARCHAR(50)
- `description` - TEXT
- `image_url` - TEXT
- `tags` - TEXT
- `created_at` - DATETIME

### Tabel `knowledge_base`
- `id` - INT AUTO_INCREMENT PRIMARY KEY
- `question` - TEXT
- `answer` - TEXT
- `category` - VARCHAR(50)
- `created_at` - DATETIME

## 🤖 Chatbot Logic

Chatbot menggunakan sistem hybrid dengan prioritas:

1. **Cek Knowledge Base**: Mencari jawaban di tabel `knowledge_base`
2. **Cek Products**: Untuk pertanyaan menu/produk di tabel `products`
3. **Gemini API**: Untuk pertanyaan umum tentang kopi

### Algoritma Matching
- Menggunakan cosine similarity untuk mencocokkan pertanyaan
- Fuzzy matching untuk nama produk
- Threshold similarity 0.3-0.4 untuk akurasi

## 🎨 Design System

### Color Palette
- **Coffee Brown**: `#5C3A21` - Warna utama
- **Coffee Cream**: `#F5ECDC` - Warna sekunder  
- **Coffee White**: `#FFFFFF` - Background

### Typography
- Font: Inter (Google Fonts)
- Hierarchy: H1-H6 dengan proper spacing

## 🚀 Installation & Setup

### 1. Clone Repository
```bash
git clone <repository-url>
cd brewski-coffee-shop
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
```bash
cp .env.example .env
```

Edit `.env` file:
```env
DATABASE_URL="mysql://username:password@localhost:3306/brewski_db"
GEMINI_API_KEY="your_gemini_api_key_here"
NEXTAUTH_SECRET="your_nextauth_secret_here"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Seed database with sample data
npm run db:seed
```

### 5. Run Development Server
```bash
npm run dev
```

Website akan berjalan di `http://localhost:3000`

## 📝 API Endpoints

### POST `/api/chat`
Endpoint untuk chatbot dengan request body:
```json
{
  "message": "Halo, jam buka berapa?"
}
```

Response:
```json
{
  "role": "assistant", 
  "message": "Brewski buka setiap hari dari jam 07:00 - 22:00 WIB..."
}
```

## 🎯 Halaman Website

### 1. **Home** (`/`)
- Hero section dengan CTA order
- Features section (kualitas, passion, AI assistant)
- About preview
- Quick info (jam buka, lokasi, chatbot)

### 2. **Menu** (`/menu`)
- Grid produk dari database
- Filter dan search (future enhancement)
- Order buttons ke marketplace

### 3. **About** (`/about`)
- Cerita Brewski
- Nilai-nilai perusahaan
- Filosofi kopi
- Tim Brewski

### 4. **Contact** (`/contact`)
- Informasi kontak lengkap
- Google Maps integration
- FAQ section
- Multiple order options

## 🔧 Development Commands

```bash
# Development
npm run dev

# Build production
npm run build

# Start production server
npm start

# Database commands
npm run db:push      # Push schema changes
npm run db:migrate   # Create migration
npm run db:seed      # Seed sample data
npm run db:studio    # Open Prisma Studio

# Linting
npm run lint
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code ke GitHub
2. Connect repository di Vercel
3. Set environment variables
4. Deploy automatically

### Manual Deployment
```bash
npm run build
npm start
```

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | MySQL connection string | ✅ |
| `GEMINI_API_KEY` | Google Gemini API key | ✅ |
| `NEXTAUTH_SECRET` | NextAuth secret key | ✅ |
| `NEXTAUTH_URL` | Base URL for auth | ✅ |

## 📱 Features Roadmap

- [ ] User authentication
- [ ] Order management system
- [ ] Admin dashboard
- [ ] Real-time notifications
- [ ] Multi-language support
- [ ] PWA capabilities
- [ ] Analytics integration

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

Untuk pertanyaan atau dukungan:
- Email: hello@brewski.coffee
- WhatsApp: +62 812-3456-7890
- Website: [brewski.coffee](https://brewski.coffee)

---

**Dibuat dengan ❤️ untuk pengalaman kopi terbaik Indonesia**
