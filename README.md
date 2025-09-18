# Kana Practice

A Japanese flashcard application for learning hiragana, katakana, and JLPT N5 kanji with interactive flashcards.

## Features

- **Complete Character Sets**: All 46 hiragana and katakana characters plus 100 essential JLPT N5 kanji
- **Interactive Flashcards**: Flip cards to reveal readings and meanings
- **Organized Learning**: Characters grouped into logical sections for progressive learning
- **Character Previews**: Small sections display characters with romanization for quick reference
- **Smart Randomization**: Cards are shuffled within sections (except vowels which maintain a-i-u-e-o order)
- **Progress Tracking**: Track your learning progress through each section
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd japanese-flashcard-app2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

To create a production build:

```bash
npm run build
npm start
```

## Project Structure

- `app/page.jsx` - Main application component with flashcard logic
- `app/layout.tsx` - Root layout with metadata and fonts
- `app/globals.css` - Global styles and CSS variables
- `package.json` - Project dependencies and scripts

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 14.2.25** - React framework
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **TypeScript** - Type safety

## Learning Sections

### Hiragana (46 characters)
- Basic Vowels (あ-お)
- K-sounds, S-sounds, T-sounds, N-sounds, H-sounds, M-sounds, Y-sounds, R-sounds, W-sounds
- Dakuten and Handakuten variations

### Katakana (46 characters)
- Basic Vowels (ア-オ)
- K-sounds, S-sounds, T-sounds, N-sounds, H-sounds, M-sounds, Y-sounds, R-sounds, W-sounds
- Dakuten and Handakuten variations

### JLPT N5 Kanji (100 characters)
- Basic numbers, time, family, body parts, nature, actions, and essential vocabulary

## Contributing

This is a learning project for Japanese language study. Feel free to fork and modify for your own learning needs.

## License

This project is for educational purposes.