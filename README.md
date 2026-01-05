# EnglishLab - Virtual Learning Platform (Web + Mobile)

![EnglishLab](frontend/assets/img/logo.png)

**EnglishLab** is an interactive virtual learning platform designed to help students learn English through learning materials, interactive exams, and gamified missions.  
This project is built for **UAS II3140 (PAWM)** and consists of:
- **Backend API** (Node.js + TypeScript + Hono + PostgreSQL/Drizzle)
- **Web Frontend** (Vanilla HTML/CSS/JS)
- **Mobile App** (React Native + Expo)

## Submission Links (UAS II3140)
- **Source Code (GitHub Repo)**: https://github.com/ratukhansaaaa/virtual-web
- **Video Demo (YouTube)**: https://youtu.be/boHGgs4Lxd8
- **APK (Expo EAS Artifact)**: https://expo.dev/artifacts/eas/3AkRg9dmwDDQvJRG2p7VCb.apk

> Note (Safari): When opening the APK link, Safari may ask permission to **Allow downloads** for the EAS CDN domain. Click **Allow** to start downloading.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Mobile Setup](#mobile-setup)
- [Backend Documentation](#backend-documentation)
  - [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [Database Schema](#database-schema)
- [Frontend Documentation](#frontend-documentation)
  - [Architecture](#frontend-architecture)
  - [Key Components](#key-components)
- [Mobile Documentation](#mobile-documentation-react-native)
- [Infrastructure & Docker](#infrastructure--docker)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [Getting Help](#getting-help)
- [Project Statistics](#project-statistics)
- [Changelog](#changelog)
- [Future Roadmap](#future-roadmap)
- [License](#license)
- [Authors](#authors)

---

## Features

### Learning Modules

- **Materials**: Browse and study English learning materials with video content
- **Exams**: Take timed multiple-choice exams to test knowledge
- **Missions**: Complete interactive vocabulary quizzes with visual questions

### User Management

- Secure authentication with JWT and HTTP-only cookies
- User registration and login
- Persistent login sessions
- Password hashing with bcrypt

### Progress Tracking

- Track exam scores and submission history
- Monitor mission completion progress
- View detailed performance analytics
- Like/favorite learning materials

### User Experience

- Responsive design for mobile, tablet, and desktop
- Modern, clean interface with gradient designs
- Smooth animations and transitions
- Real-time feedback on quiz answers

---

## Tech Stack

### Backend

- **Runtime**: Node.js with TypeScript
- **Framework**: Hono (lightweight web framework)
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: JWT with bcrypt password hashing
- **Validation**: Zod schema validation
- **Development**: tsx for hot-reloading

### Frontend

- **Core**: HTML5, CSS3, JavaScript (ES6+ Modules)
- **Styling**: CSS with CSS Variables, Flexbox, Grid
- **Assets**: Custom SVG icons, Unsplash images
- **Hosting**: Static hosting (Netlify, Vercel, GitHub Pages)

### Mobile (React Native)
- **Framework**: React Native + Expo
- **Language**: TypeScript
- **Navigation**: React Navigation (stack + bottom tabs)
- **HTTP Client**: fetch / API service layer (`mobile/src/services/api.ts`)

---

## Project Structure

```
virtual-web/
├── backend/
│   ├── src/
│   │   ├── db/
│   │   │   ├── index.ts
│   │   │   ├── schema.ts
│   │   │   └── seed.ts
│   │   ├── dtos/
│   │   │   ├── auth.dto.ts
│   │   │   ├── exam.dto.ts
│   │   │   └── mission.dto.ts
│   │   ├── middlewares/
│   │   │   └── auth.middleware.ts
│   │   ├── routes/
│   │   │   ├── auth.route.ts
│   │   │   ├── material.route.ts
│   │   │   ├── exam.route.ts
│   │   │   └── mission.route.ts
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   ├── material.service.ts
│   │   │   ├── exam.service.ts
│   │   │   └── mission.service.ts
│   │   ├── utils/
│   │   │   ├── config.ts
│   │   │   ├── jwt.ts
│   │   │   └── exceptions.ts
│   │   └── index.ts
│   ├── drizzle/
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── frontend/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── style.css
│   │   │   ├── auth.css
│   │   │   ├── material.css
│   │   │   ├── exam.css
│   │   │   ├── mission.css
│   │   │   └── history.css
│   │   ├── img/
│   │   └── js/
│   │       ├── api.js
│   │       ├── auth.js
│   │       ├── material.js
│   │       ├── exam.js
│   │       ├── mission.js
│   │       ├── protected.js
│   │       └── *-page.js
│   ├── pages/
│   │   ├── auth/
│   │   └── dashboard/
│   │       ├── material/
│   │       ├── exam/
│   │       └── mission/
│   └── index.html
│
└── README.md
```

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **PostgreSQL** (v14 or higher)
- **Git**

### Backend Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd virtual-web/backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your configuration:

   ```env
   PORT=3000
   NODE_ENV=development
   DB_URL=postgresql://postgres:password@localhost:5432/englishlab
   JWT_SECRET=change-this-to-a-secure-random-32-character-or-longer-secret-key
   JWT_EXPIRES_IN=7d
   FRONTEND_URL=http://localhost:5173
   ```

4. **Set up the database**

   ```bash
   createdb englishlab
   npm run db:generate
   npm run db:push
   npm run db:seed
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

   The API will be available at `http://localhost:3000`

6. **Verify installation**

   ```bash
   curl http://localhost:3000/health
   ```

   Expected response:

   ```json
   {
     "status": "ok",
     "timestamp": "2025-01-01T00:00:00.000Z",
     "service": "EnglishLab API",
     "environment": "development"
   }
   ```

### Frontend Setup

1. Navigate to frontend directory

   ```bash
   cd ../frontend
   ```

2. Update API configuration

   Edit `assets/js/api.js` to match your backend URL:

   ```javascript
   const API_BASE_URL = "http://localhost:3000/api";
   ```

3. Serve the frontend

   You can use any static file server:

   Using Python:
   ```bash
   python3 -m http.server 5173
   ```

   Using Node http-server:
   ```bash
   npx http-server -p 5173
   ```

   Using VS Code Live Server:
   - Install "Live Server" extension
   - Right-click `index.html` and select "Open with Live Server"

4. Open in browser

   Navigate to `http://localhost:5173` to access the application

### Mobile Setup

1. Navigate to mobile directory

   ```bash
   cd ../mobile
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Configure API endpoint

   Update `src/config/api.ts` with backend URL:

   ```typescript
   export const API_BASE_URL = "http://your-backend-url:3000/api";
   ```

   For local development with iOS simulator, update to use your machine IP:
   ```typescript
   export const API_BASE_URL = "http://192.168.x.x:3000/api"; // Replace with your IP
   ```

4. Start development server

   ```bash
   npm start
   ```

   Then select platform:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web

5. Run on specific platform

   ```bash
   npm run ios      # iOS simulator
   npm run android  # Android emulator
   npm run web      # Web preview
   ```

6. Type checking

   ```bash
   npm run typecheck
   ```

## Frontend Documentation

### Frontend Architecture

Frontend kami adalah aplikasi web statis yang dibangun dengan vanilla HTML, CSS, dan JavaScript modular (ES6 Modules). Pendekatan ini memastikan aplikasi ringan, cepat, dan mudah di-deploy tanpa build tool kompleks.

**Struktur Aplikasi:**

```
frontend/
├── index.html
├── about.html
├── auth/
│   ├── login.html
│   └── register.html
├── dashboard/
│   ├── material/
│   │   ├── index.html
│   │   └── view.html
│   ├── exam/
│   │   ├── index.html
│   │   ├── view.html
│   │   └── history.html
│   ├── mission/
│   │   ├── index.html
│   │   ├── show.html
│   │   └── history.html
└── assets/
    ├── css/
    ├── img/
    └── js/
```

**Data Flow:**

1. User navigates to page → HTML loads → JavaScript initializes
2. Protected pages check auth via `protected.js`
3. User interactions → API calls via `api.js`
4. Dynamic UI updates without page reload

**Authentication:**

- Register/login → Backend returns JWT token in HTTP-only cookie
- Cookie sent automatically with each request
- Protected pages check token validity via GET `/api/auth/me`
- Unauthorized users redirected to login

### Key Frontend Components & Modules

**Core Services:**
- **`assets/js/api.js`** - Centralized API client
- **`assets/js/auth.js`** - Authentication logic
- **`assets/js/protected.js`** - Route guard untuk protected pages
- **`assets/js/config.js`** - Configuration & constants

**Feature Modules:**
- **`assets/js/material.js`** - Material listing & filtering
- **`assets/js/exam.js`** - Exam interface
- **`assets/js/mission.js`** - Mission progress management
- **`assets/js/welcome.js`** - Landing page
- **`assets/js/about.js`** - About page

**Page Controllers:**
- `exam-list-page.js` - Exam list
- `exam-detail-page.js` - Exam detail
- `exam-history-page.js` - Exam history
- `material-list-page.js` - Material list
- `material-detail-page.js` - Material detail
- `mission-index-page.js` - Mission list
- `mission-show-page.js` - Mission interface
- `mission-history-page.js` - Mission history
- `login.js` - Login
- `register.js` - Registration

**Styling:**
- `style.css` - Global styles
- `auth.css` - Auth pages
- `exam.css` - Exam pages
- `material.css` - Material pages
- `mission.css` - Mission pages
- `history.css` - History pages
- `welcome.css` - Landing page styling
- `about.css` - About page styling

### Frontend Features

**Authentication:**
- Register dengan validation (email, password strength)
- Login dengan email & password
- Session persistence via secure HTTP-only cookies
- Auto-logout on token expiration
- Protected routes hanya accessible untuk authenticated users

**Learning Materials:**
- Browse all learning materials dengan search
- Like/unlike materials untuk save favorites
- Integrated YouTube video player
- Markdown-formatted content display
- Material categorization & filtering

**Exams:**
- Multiple-choice exam format
- Timed exams dengan countdown timer
- Real-time answer feedback
- Score calculation & display
- Submission history dengan score tracking
- Retake exam capability

**Missions:**
- Sequential missions (complete in order)
- Image-based vocabulary questions
- Immediate feedback (correct/incorrect)
- Progress tracking (X of Y questions answered)
- Mission completion history dengan scores
- Gamified mission experience

---

## Deployment

Aplikasi EnglishLab dapat di-deploy ke berbagai platform. Berikut adalah panduan deployment untuk production.

### Frontend Deployment (Vercel)

1. Prepare frontend untuk production

   ```bash
   cd frontend
   ```

2. Push ke GitHub repository

   ```bash
   git add .
   git commit -m "Prepare frontend for deployment"
   git push origin main
   ```

3. Connect repository ke Vercel

   - Buka https://vercel.com
   - Klik "New Project"
   - Import GitHub repository `virtual-web`
   - Vercel akan automatically detect static site
   - Click "Deploy"

4. Configure environment

   - Environment variables tidak diperlukan untuk frontend
   - Update `API_BASE_URL` di `assets/js/api.js` ke production API URL

5. Frontend akan live di URL: `https://your-project.vercel.app`

### Backend Deployment (Vercel Serverless)

1. Prepare backend untuk production

   ```bash
   cd backend
   npm run build
   ```

2. Create `vercel.json` di backend directory

   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "src/index.ts",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "src/index.ts"
       }
     ]
   }
   ```

3. Push ke GitHub

   ```bash
   git add .
   git commit -m "Prepare backend for deployment"
   git push origin main
   ```

4. Deploy ke Vercel

   - Buka https://vercel.com
   - Import backend repository atau push dari existing project
   - Set environment variables di Vercel dashboard

5. Environment variables untuk production

   Go to Vercel Project Settings > Environment Variables, set:

   ```
   NODE_ENV=production
   DB_URL=postgresql://user:password@host:5432/englishlab
   JWT_SECRET=your-secure-production-secret-key-32-chars-minimum
   JWT_EXPIRES_IN=7d
   FRONTEND_URL=https://your-frontend.vercel.app
   ```

6. Backend akan live di URL: `https://your-backend.vercel.app`

### Database Setup (NeonDB)

Untuk production database:

1. Buat account di https://neon.tech
2. Create new project
3. Copy connection string
4. Gunakan connection string sebagai `DB_URL` di Vercel environment variables
5. Run migrations:

   ```bash
   npm run db:push  # Apply schema
   npm run db:seed  # Seed initial data (optional)
   ```

### Mobile App Distribution

**iOS App Store:**

1. Enroll di Apple Developer Program (USD 99/tahun)
2. Create App ID dan certificates di Developer Account
3. Build production app:

   ```bash
   eas build --platform ios --auto-submit
   ```

4. Expo akan handle submission ke App Store

**Android Play Store:**

1. Create Google Play Developer account (USD 25 one-time)
2. Create app listing di Google Play Console
3. Build production app:

   ```bash
   eas build --platform android --auto-submit
   ```

4. Expo akan handle submission ke Play Store

### Post-Deployment Checklist

- Test semua features di production environment
- Verify database backups berjalan scheduled
- Setup monitoring untuk API errors
- Configure custom domain (optional)
- Setup SSL/HTTPS (handled by Vercel)
- Test login dan authentication flow
- Verify API rate limiting working
- Check CORS configuration untuk production domain

---

## Backend Documentation

### API Endpoints

All API endpoints are prefixed with `/api`.

#### Base URL

```
http://localhost:3000/api
```

---

### uthentication Endpoints

Authentication uses JWT tokens stored in HTTP-only cookies. Tokens expire after 7 days by default.

#### Register User

```http
POST /api/auth/register
```

**Request Body:**

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "SecurePassword123"
}
```

**Validation Rules:**

- `fullName`: Required, minimum 2 characters
- `email`: Required, valid email format
- `password`: Required, minimum 6 characters

**Response (201 Created):**

```json
{
  "message": "User registered successfully",
  "user": {
    "userId": 1,
    "fullName": "John Doe",
    "email": "john@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Responses:**

- `400 Bad Request`: Validation failed
- `409 Conflict`: Email already exists

---

#### Login User

```http
POST /api/auth/login
```

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "SecurePassword123"
}
```

**Response (200 OK):**

```json
{
  "message": "Login successful",
  "user": {
    "userId": 1,
    "fullName": "John Doe",
    "email": "john@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Responses:**

- `400 Bad Request`: Validation failed
- `401 Unauthorized`: Invalid credentials

---

#### Get Current User

```http
GET /api/auth/me
```

**Headers:**

```
Cookie: token=<jwt_token>
```

**Response (200 OK):**

```json
{
  "user": {
    "userId": 1,
    "fullName": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Responses:**

- `401 Unauthorized`: Missing or invalid token

---

#### Logout User

```http
POST /api/auth/logout
```

**Response (200 OK):**

```json
{
  "message": "Logged out successfully"
}
```

---

### Material Endpoints

All material endpoints require authentication.

#### List All Materials

```http
GET /api/materials
```

**Headers:**

```
Cookie: token=<jwt_token>
```

**Response (200 OK):**

```json
[
  {
    "materialId": 1,
    "title": "Basic Greetings",
    "slug": "basic-greetings",
    "description": "Learn common English greetings and introductions",
    "youtubeUrl": "https://www.youtube.com/watch?v=abc123",
    "content": "# Introduction\n\nLearn how to greet people...",
    "colorClass": "gradient-1",
    "isLiked": true
  }
]
```

---

#### Get Single Material

```http
GET /api/materials/:slug
```

**Path Parameters:**

- `slug`: Material identifier (e.g., "basic-greetings")

**Response (200 OK):**

```json
{
  "materialId": 1,
  "title": "Basic Greetings",
  "slug": "basic-greetings",
  "description": "Learn common English greetings and introductions",
  "youtubeUrl": "https://www.youtube.com/watch?v=abc123",
  "content": "# Introduction\n\nLearn how to greet people in English...",
  "colorClass": "gradient-1",
  "isLiked": false
}
```

**Error Responses:**

- `404 Not Found`: Material not found

---

#### Toggle Material Like

```http
POST /api/materials/:slug/like
```

**Response (200 OK):**

```json
{
  "message": "Material liked",
  "isLiked": true
}
```

or

```json
{
  "message": "Material unliked",
  "isLiked": false
}
```

---

### Exam Endpoints

All exam endpoints require authentication.

#### List All Exams

```http
GET /api/exams
```

**Response (200 OK):**

```json
[
  {
    "examId": 1,
    "title": "Grammar Basics Test",
    "slug": "grammar-basics-test",
    "description": "Test your knowledge of basic English grammar",
    "duration": 600,
    "totalQuestions": 10
  }
]
```

---

#### Get Exam Details

```http
GET /api/exams/:slug
```

**Response (200 OK):**

```json
{
  "examId": 1,
  "title": "Grammar Basics Test",
  "slug": "grammar-basics-test",
  "description": "Test your knowledge of basic English grammar",
  "duration": 600,
  "questions": [
    {
      "questionId": 1,
      "questionNumber": 1,
      "questionText": "What is the plural of 'child'?",
      "options": ["childs", "children", "childes", "child"]
    }
  ]
}
```

**Note:** The `correctOptionIndex` is intentionally excluded to prevent cheating.

---

#### Submit Exam

```http
POST /api/exams/:slug/submit
```

**Request Body:**

```json
{
  "answers": [
    {
      "questionNumber": 1,
      "selectedOptionIndex": 1
    },
    {
      "questionNumber": 2,
      "selectedOptionIndex": 0
    }
  ]
}
```

**Response (200 OK):**

```json
{
  "submissionId": 1,
  "score": 8,
  "totalQuestions": 10,
  "percentage": 80,
  "details": [
    {
      "questionNumber": 1,
      "isCorrect": true,
      "selectedOptionIndex": 1,
      "correctOptionIndex": 1
    },
    {
      "questionNumber": 2,
      "isCorrect": false,
      "selectedOptionIndex": 0,
      "correctOptionIndex": 2
    }
  ]
}
```

**Error Responses:**

- `400 Bad Request`: Invalid answers format or incomplete submission
- `404 Not Found`: Exam not found

---

#### Get Exam Submission History

```http
GET /api/exams/:slug/submissions
```

**Response (200 OK):**

```json
[
  {
    "submissionId": 3,
    "score": 9,
    "totalQuestions": 10,
    "percentage": 90,
    "submittedAt": "2025-01-15T10:30:00.000Z"
  },
  {
    "submissionId": 2,
    "score": 7,
    "totalQuestions": 10,
    "percentage": 70,
    "submittedAt": "2025-01-10T14:20:00.000Z"
  }
]
```

---

### Mission Endpoints

All mission endpoints require authentication. Missions are completed sequentially - users must finish one mission before proceeding to the next.

#### Get Next Mission

```http
GET /api/missions/next
```

**Response (200 OK) - New Mission:**

```json
{
  "mission": {
    "missionId": 1,
    "title": "Animals Vocabulary Challenge",
    "slug": "animals-vocabulary-challenge",
    "description": "Identify common animals in English",
    "totalQuestions": 5
  },
  "currentQuestion": {
    "questionNumber": 1,
    "questionText": "Which one is a \"Dog\"?",
    "options": [
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400",
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400"
    ]
  },
  "progress": {
    "questionsAnswered": 0,
    "currentScore": 0
  }
}
```

**Response (200 OK) - Resume Mission:**

```json
{
  "mission": {
    "missionId": 1,
    "title": "Animals Vocabulary Challenge",
    "slug": "animals-vocabulary-challenge",
    "description": "Identify common animals in English",
    "totalQuestions": 5
  },
  "currentQuestion": {
    "questionNumber": 3,
    "questionText": "Which one is an \"Elephant\"?",
    "options": [
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400",
      "https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?w=400",
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400"
    ]
  },
  "progress": {
    "questionsAnswered": 2,
    "currentScore": 2
  }
}
```

**Response (200 OK) - All Completed:**

```json
{
  "message": "All missions completed! Great job!",
  "completed": true
}
```

---

#### Submit Mission Answer

```http
POST /api/missions/:slug/answer
```

**Request Body:**

```json
{
  "questionNumber": 1,
  "selectedOptionIndex": 0
}
```

**Response (200 OK) - Correct Answer, More Questions:**

```json
{
  "isCorrect": true,
  "correctOptionIndex": 0,
  "currentScore": 1,
  "nextQuestion": {
    "questionNumber": 2,
    "questionText": "Which one is a \"Cat\"?",
    "options": [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400",
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400"
    ]
  }
}
```

**Response (200 OK) - Wrong Answer:**

```json
{
  "isCorrect": false,
  "correctOptionIndex": 1,
  "currentScore": 1,
  "nextQuestion": {
    "questionNumber": 3,
    "questionText": "Which one is an \"Elephant\"?",
    "options": []
  }
}
```

**Response (200 OK) - Mission Completed:**

```json
{
  "isCorrect": true,
  "correctOptionIndex": 0,
  "currentScore": 5,
  "completed": true,
  "finalScore": 5,
  "totalQuestions": 5,
  "percentage": 100
}
```

**Error Responses:**

- `400 Bad Request`: Invalid question number or mission state
- `404 Not Found`: Mission not found

---

#### Get Mission Completion History

```http
GET /api/missions/completions
```

**Response (200 OK):**

```json
[
  {
    "completionId": 2,
    "missionTitle": "Food & Drinks Vocabulary",
    "score": 4,
    "totalQuestions": 5,
    "completedAt": "2025-01-20T16:45:00.000Z"
  },
  {
    "completionId": 1,
    "missionTitle": "Animals Vocabulary Challenge",
    "score": 5,
    "totalQuestions": 5,
    "completedAt": "2025-01-15T10:30:00.000Z"
  }
]
```

---

### Authentication

The API uses JWT tokens for authentication, stored in HTTP-only cookies for security.

#### Token Storage

- **Production**: Cookies with `secure: true`, `sameSite: 'None'`
- **Development**: Cookies with `secure: true`, `sameSite: 'None'`

#### Making Authenticated Requests

When using fetch from the frontend:

```javascript
fetch("http://localhost:3000/api/auth/me", {
  method: "GET",
  credentials: "include", // Important: Include cookies
  headers: {
    "Content-Type": "application/json",
  },
});
```

#### Token Expiration

- Default expiration: 7 days
- Configurable via `JWT_EXPIRES_IN` environment variable
- After expiration, users must log in again

---

### Database Schema

The application uses PostgreSQL with Drizzle ORM. Below is the database schema:

#### Users Table

```sql
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Materials Table

```sql
CREATE TABLE materials (
  material_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  youtube_url TEXT,
  content TEXT NOT NULL,
  color_class VARCHAR(50)
);
```

#### Material Likes Table

```sql
CREATE TABLE material_likes (
  like_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
  material_id INTEGER REFERENCES materials(material_id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, material_id)
);
```

#### Exams Table

```sql
CREATE TABLE exams (
  exam_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  duration INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Exam Questions Table

```sql
CREATE TABLE exam_questions (
  question_id SERIAL PRIMARY KEY,
  exam_id INTEGER REFERENCES exams(exam_id) ON DELETE CASCADE,
  question_number INTEGER NOT NULL,
  question_text TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_option_index INTEGER NOT NULL,
  UNIQUE(exam_id, question_number)
);
```

#### Exam Submissions Table

```sql
CREATE TABLE exam_submissions (
  submission_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
  exam_id INTEGER REFERENCES exams(exam_id) ON DELETE CASCADE,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  answers JSONB NOT NULL,
  submitted_at TIMESTAMP DEFAULT NOW()
);
```

#### Missions Table

```sql
CREATE TABLE missions (
  mission_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  mission_order INTEGER NOT NULL UNIQUE
);
```

#### Mission Questions Table

```sql
CREATE TABLE mission_questions (
  question_id SERIAL PRIMARY KEY,
  mission_id INTEGER REFERENCES missions(mission_id) ON DELETE CASCADE,
  question_number INTEGER NOT NULL,
  question_text TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_option_index INTEGER NOT NULL,
  UNIQUE(mission_id, question_number)
);
```

#### Mission Progress Table

```sql
CREATE TABLE mission_progress (
  progress_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
  mission_id INTEGER REFERENCES missions(mission_id) ON DELETE CASCADE,
  current_question_number INTEGER NOT NULL,
  current_score INTEGER DEFAULT 0,
  is_completed BOOLEAN DEFAULT FALSE,
  started_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP,
  UNIQUE(user_id, mission_id)
);
```

---

## Mobile Documentation (React Native)

EnglishLab juga tersedia sebagai aplikasi mobile native untuk iOS dan Android, dibangun dengan React Native dan Expo untuk development yang cepat dan cross-platform compatibility.

### Mobile Tech Stack

- **Runtime**: React Native dengan Expo managed service
- **Language**: TypeScript untuk type safety
- **Navigation**: React Navigation dengan stack navigator dan bottom tab navigator
- **Storage**: Expo Secure Store untuk secure token storage
- **HTTP Client**: Fetch API dengan custom service layer
- **Icons**: Expo Vector Icons untuk consistent UI
- **Styling**: React Native StyleSheet dengan CSS-in-JS approach

### Mobile Project Structure

```
mobile/
├── src/
│   ├── App.tsx                 # Entry point
│   ├── components/
│   │   ├── HtmlContent.tsx
│   │   └── LoadingSpinner.tsx
│   ├── config/
│   │   ├── api.ts             # API endpoint config
│   │   └── colors.ts          # Theme colors
│   ├── context/
│   │   └── AuthContext.tsx    # Global auth state
│   ├── navigation/
│   │   └── RootNavigator.tsx  # Navigation stack setup
│   ├── screens/
│   │   ├── Auth/
│   │   │   ├── LoginScreen.tsx
│   │   │   └── RegisterScreen.tsx
│   │   ├── Dashboard/
│   │   │   ├── Material/
│   │   │   ├── Exam/
│   │   │   └── Mission/
│   │   └── Splash/
│   │       └── SplashScreen.tsx
│   ├── services/
│   │   └── api.ts             # API request functions
│   ├── storage/
│   │   └── secureStorage.ts  # Secure storage wrapper
│   └── types/
│       ├── index.ts
│       └── navigation.ts
├── ios/                        # iOS native code
├── android/                    # Android native code
├── app.json                    # Expo app configuration
├── package.json
└── tsconfig.json
```

### Mobile Setup Instructions

Prerequisites:
- Node.js v16 atau lebih baru
- Xcode untuk iOS development (Mac only)
- Android Studio untuk Android development
- Expo CLI: `npm install -g expo-cli`

Setup steps:

1. Navigate to mobile directory dan install dependencies

   ```bash
   cd mobile
   npm install
   npm run typecheck
   ```

2. Configure API endpoint

   Edit `src/config/api.ts`:

   ```typescript
   // Local development (replace with your machine IP)
   export const API_BASE_URL = "http://192.168.x.x:3000/api";

   // Production
   export const API_BASE_URL = "https://api.englishlab.com/api";
   ```

3. Start development server

   ```bash
   npm start
   ```

4. Run on iOS simulator

   ```bash
   npm run ios
   ```

   Atau tekan `i` di menu ketika sudah `npm start`

5. Run on Android emulator

   ```bash
   npm run android
   ```

   Atau tekan `a` di menu

6. Type checking

   ```bash
   npm run typecheck
   ```

### Mobile Features

**Authentication**
- User registration dengan email validation
- Secure login dengan password hashing
- JWT token stored in Secure Store
- Auto-logout when token expired
- Protected routes untuk authenticated users only

**Learning Materials**
- Browse semua materials dengan list view
- View detailed material dengan embedded YouTube video
- Like/unlike materials untuk save favorites
- HTML content rendering via WebView
- Search dan filter functionality

**Exams**
- List semua available exams
- Start exam atau resume dari attempt sebelumnya
- Timed exam dengan countdown timer
- Real-time question progress display
- Immediate feedback pada submission
- View exam history dengan scores

**Missions**
- Sequential missions (harus selesaikan urutan)
- Image-based vocabulary questions
- Multiple choice answer format
- Score tracking per mission
- Mission completion history
- Progress indicator per question

**User Interface**
- Bottom tab navigation untuk main features
- Stack navigation untuk detail screens
- Smooth transitions antar screens
- Responsive design untuk berbagai device sizes
- Loading indicators saat fetch data

### Mobile Build and Deployment

Development build:

```bash
npm run build:dev
```

Preview build (untuk testing distribution):

```bash
npm run build:preview
```

Production build (untuk App Store/Play Store):

```bash
npm run build:prod
```

Untuk publish ke app stores, gunakan Expo EAS Build:

```bash
eas build --platform ios
eas build --platform android
eas submit --platform ios
eas submit --platform android
```

---

## Infrastructure & Docker

Aplikasi dapat dijalankan secara lokal menggunakan Docker dan Docker Compose untuk consistency antara development dan production environment.

### Docker Setup

Pastikan Docker dan Docker Compose sudah ter-install:

```bash
docker --version
docker-compose --version
```

### Running with Docker Compose

1. Navigate ke infrastructure directory

   ```bash
   cd infrastructure
   ```

2. Konfigurasi environment variables

   Create `.env` file:

   ```env
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres
   POSTGRES_DB=englishlab
   DB_URL=postgresql://postgres:postgres@db:5432/englishlab
   JWT_SECRET=your-secret-key-change-in-production
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```

3. Start all services

   ```bash
   docker-compose up -d
   ```

   Ini akan start:
   - PostgreSQL database di port 5432
   - Backend API di port 3000
   - Frontend (optional) di port 8080

4. Verify services running

   ```bash
   docker-compose ps
   ```

5. View logs

   ```bash
   docker-compose logs backend   # Backend logs
   docker-compose logs db        # Database logs
   ```

6. Setup database

   ```bash
   docker-compose exec backend npm run db:push
   docker-compose exec backend npm run db:seed
   ```

7. Access aplikasi

   - Frontend: http://localhost:8080
   - Backend API: http://localhost:3000
   - Database: localhost:5432

### Docker Compose Services

**Database (PostgreSQL)**
- Image: postgres:15
- Port: 5432
- Volume: database persistence
- Health check: enabled

**Backend (Node.js)**
- Build: from ./backend Dockerfile
- Port: 3000
- Environment: development
- Dependencies: postgresql service

**Frontend (Optional)**
- Build: from ./frontend Dockerfile
- Port: 8080
- Static file serving

### Docker Commands Reference

Stop all services:

```bash
docker-compose down
```

Remove all data (including database):

```bash
docker-compose down -v
```

Rebuild images:

```bash
docker-compose build --no-cache
```

Execute command di container:

```bash
docker-compose exec backend npm run db:seed
```

View real-time logs:

```bash
docker-compose logs -f backend
```

### Dockerfile Structure

**Backend Dockerfile:**

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]
```

**Frontend Dockerfile:**

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY . .

EXPOSE 8080

CMD ["python3", "-m", "http.server", "8080"]
```

---

## Contributing

### Code Style Guidelines

#### Backend
- TypeScript dengan strict mode enabled
- Use Hono middleware patterns untuk reusable logic
- Follow DTO pattern untuk request/response validation
- Write service layer untuk business logic separation
- Use try-catch untuk error handling dengan custom exceptions

#### Frontend
- ES6+ JavaScript dengan vanilla approach
- Use CSS Variables untuk consistent theming
- Responsive first design approach
- Modular JavaScript files menggunakan ES6 Modules
- Keep HTML semantic dan accessible

#### Mobile
- TypeScript dengan strict type checking
- Functional components dengan React hooks
- Use custom hooks untuk logic reuse
- Follow React Navigation conventions
- Prop validation dengan TypeScript interfaces

### How to Contribute

1. Fork repository ke akun GitHub Anda
2. Clone repositori lokal: `git clone https://github.com/your-username/virtual-web.git`
3. Create feature branch: `git checkout -b feature/nama-fitur`
4. Lakukan perubahan dan test secara menyeluruh
5. Commit dengan pesan yang deskriptif: `git commit -m "Add: deskripsi fitur"`
6. Push ke branch Anda: `git push origin feature/nama-fitur`
7. Buat Pull Request ke main branch

### Git Commit Convention

- `Add:` untuk fitur baru
- `Fix:` untuk bug fix
- `Update:` untuk perubahan existing code
- `Remove:` untuk menghapus code/file
- `Refactor:` untuk code improvement

### Testing

Sebelum submit PR, pastikan:
- Backend: `npm run build` tidak ada error
- Frontend: Semua link dan API call berfungsi
- Mobile: `npm run typecheck` passing

---

## Troubleshooting

### Backend Issues

**Port 3000 already in use**

Jika mendapat error port sudah digunakan:

```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

Atau gunakan port yang berbeda:

```bash
PORT=3001 npm run dev
```

**Database connection failed**

Pastikan PostgreSQL sudah berjalan dan database `englishlab` sudah dibuat:

```bash
# Check if PostgreSQL is running
brew services list

# Create database jika belum ada
createdb englishlab

# Verify connection
psql -d englishlab
```

**ERROR: relation "users" does not exist**

Database schema belum di-setup, jalankan migration:

```bash
npm run db:push
npm run db:seed
```

**JWT token errors atau user tidak bisa login**

Periksa konfigurasi di `.env`:
- `JWT_SECRET` harus diset dengan string minimal 32 karakter
- `JWT_EXPIRES_IN` format harus valid (contoh: `7d`, `24h`)
- Hapus cookies di browser dan login ulang

### Frontend Issues

**API calls returning CORS errors**

CORS error terjadi ketika frontend dan backend domain berbeda. Solusi:

1. Pastikan backend sudah berjalan: `npm run dev` di folder backend
2. Cek `API_BASE_URL` di `frontend/assets/js/api.js` sesuai dengan backend URL
3. Pastikan request menggunakan `credentials: 'include'` untuk cookies
4. Clear browser cache dan cookies, refresh halaman

**Images not loading atau rusak**

Periksa:
- Path gambar relatif dari folder `frontend/` (contoh: `assets/img/logo.png`)
- File gambar ada di `frontend/assets/img/`
- Format gambar valid (PNG, JPG, SVG)
- Network tab di DevTools untuk melihat error detail

**Stuck di loading atau halaman blank**

Ini biasanya tanda backend tidak running:

```bash
# Terminal 1: Start backend
cd backend
npm run dev

# Terminal 2: Serve frontend
cd frontend
python3 -m http.server 5173
```

Kemudian buka http://localhost:5173 di browser.

**Protected pages langsung redirect ke login**

Beberapa kemungkinan:
- Backend tidak running atau tidak accessible
- `API_BASE_URL` di config salah
- Token expired, cek cookies di DevTools > Application > Cookies
- Server menolak request, cek Network tab untuk response error

### Mobile Issues

**Build fails dengan CocoaPods error**

CocoaPods mungkin out of sync:

```bash
cd mobile/ios
pod install --repo-update
cd ..
npm run ios
```

**Expo development server tidak start**

Pastikan:
- Node.js dan npm sudah ter-install dengan benar
- `npm install` sudah selesai di folder mobile
- Port 8081 tidak digunakan: `lsof -ti:8081`

Jika masih error, coba clear cache:

```bash
npm run start -- --clear
```

**Android emulator tidak connect**

```bash
adb devices  # Check connected devices
npm run start
npm run android
```

Jika emulator tidak terdeteksi, buka Android Studio dan start emulator dari sana.

**iOS simulator stuck di "Loading bundle"**

Biasanya karena backend tidak running atau network issue:

```bash
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Expo
cd mobile && npm start

# Ketika diminta, press 'i' untuk open iOS
```

**Token tidak tersimpan atau hilang saat app restart**

Secure Store harus ter-install:

```bash
npm install expo-secure-store
npm run ios
```

Jika masih bermasalah, hapus app dari simulator dan install ulang.

**API response 401 atau login gagal di mobile**

Pastikan:
- Backend sudah running dan accessible dari device/simulator
- Token dikirim di request headers dengan benar
- Secure Store menyimpan token dengan key yang tepat
- Check Network tab di DevTools untuk melihat request/response detail

**Build gagal dengan TypeScript errors**

```bash
npm run typecheck
```

Lihat error yang ditampilkan dan fix type definitions atau imports.

---

## Getting Help

### Documentation

Setiap bagian project memiliki dokumentasi lengkap:

- `backend/README.md` - Backend API documentation
- `frontend/README.md` - Frontend setup guide
- `mobile/README.md` - Mobile app guide
- `infrastructure/README.md` - Docker dan deployment guide

### Common Issues

Jika mengalami masalah, cek section Troubleshooting di atas terlebih dahulu. Mayoritas issues sudah documented dengan solusi yang tested.

### Reporting Issues

Jika menemukan bug atau issue:

1. Buat issue di GitHub repository
2. Deskripsikan step untuk reproduce
3. Attach screenshot atau error message
4. Mention platform yang affected (Backend/Frontend/Mobile)

### Contact

Untuk pertanyaan akademik atau collaboration:

- Email: ratukhansa.salsabila@student.telkomuniversity.ac.id
- GitHub: https://github.com/ratukhansaaaa

---

## Project Statistics

- Lines of Code (Backend): ~2,000+
- Lines of Code (Frontend): ~3,500+
- Lines of Code (Mobile): ~2,500+
- Total Database Tables: 8
- API Endpoints: 20+
- Supported Platforms: Web, iOS, Android

---

## Changelog

### Version 1.0.0 (Initial Release)

**Features:**
- User authentication dengan JWT
- Learning materials dengan video content
- Timed exams dengan scoring
- Gamified missions
- Responsive design untuk semua platform
- Mobile app dengan React Native

**Platforms:**
- Web (HTML/CSS/JS)
- iOS (React Native + Expo)
- Android (React Native + Expo)
- Backend API (Node.js)

**Database:**
- PostgreSQL dengan Drizzle ORM
- Seed data included

---

## Future Roadmap

### Planned Features

- Push notifications untuk new content
- Offline mode untuk mobile app
- Progress analytics dashboard
- Leaderboard/gamification enhancements
- Content management system (CMS)
- Teacher/admin panel
- Video streaming optimization
- Search optimization

### Technology Improvements

- Implement caching strategy (Redis)
- Add API rate limiting
- Improve mobile app performance
- Add more unit tests
- CI/CD pipeline setup
- Monitoring dan analytics

---

## License

This project is developed for academic purposes as part of the **Pemrograman Web dan Mobile (PAWM)** course at Universitas Telkom.

**License Type**: Educational Use Only

For commercial use or distribution, please contact the authors.

---

## Authors

- **Ratukhansa Salsabila** - 18223034
- **Irdina Ilmuna Yosapat** - 18223060

---
