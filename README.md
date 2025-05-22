# Shopynuxt - Modern E-commerce Platform

A full-featured e-commerce platform built with Nuxt 3, featuring a modern tech stack and comprehensive functionality for both customers and administrators.

## 🚀 Features

### Customer Features
- User authentication and authorization
- Product browsing and searching
- Shopping cart functionality
- Wishlist management
- Order tracking and history
- Responsive design for all devices
- Dark mode support
- Multi-currency support
- Product reviews and ratings

### Admin Features
- Dashboard with sales analytics
- Product management (CRUD)
- Category management
- Order management
- User management
- Content management system
- Media library

## 🛠️ Tech Stack

### Frontend
- **Framework**: Nuxt 3
- **UI Framework**: Tailwind CSS
- **State Management**: Pinia
- **Form Handling**: VeeValidate
- **Icons**: Heroicons
- **Animations**: Vue Transition

### Backend
- **Runtime**: Node.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT
- **File Storage**: Local/Cloud Storage

### Development Tools
- **Package Manager**: pnpm
- **Type Checking**: TypeScript
- **Code Quality**: ESLint
- **Code Formatting**: Prettier
- **Git Hooks**: Husky

## 📦 Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)
- PostgreSQL (v14 or higher)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/shopynuxt-starter-boilerplate.git
   cd shopynuxt-starter-boilerplate
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your configuration values.

4. **Set up the database**
   ```bash
   pnpm prisma migrate dev
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# App
NUXT_PUBLIC_APP_URL=http://localhost:3000
NUXT_PUBLIC_APP_NAME=Shopynuxt

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/shopynuxt"

# JWT
JWT_SECRET=your-secret-key

# Storage
STORAGE_DRIVER=local
```

## 📁 Project Structure

```
├── components/          # Vue components
├── composables/         # Vue composables
├── layouts/            # Page layouts
├── middleware/         # Route middleware
├── pages/             # Application pages
├── public/            # Static assets
├── server/            # Server-side code
│   ├── api/          # API endpoints
│   ├── middleware/   # Server middleware
│   └── utils/        # Server utilities
├── stores/            # Pinia stores
├── types/             # TypeScript types
└── utils/             # Utility functions
```

## 🚀 Deployment

### Production Build

1. **Build the application**
   ```bash
   pnpm build
   ```

2. **Start the production server**
   ```bash
   pnpm start
   ```

### Docker Deployment

1. **Build the Docker image**
   ```bash
   docker build -t shopynuxt .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 shopynuxt
   ```

## 📚 API Documentation

The API documentation is available at `/api/docs` when running the development server.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Nuxt 3](https://nuxt.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [Pinia](https://pinia.vuejs.org/) 