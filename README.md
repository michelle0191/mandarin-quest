# Mandarin Quest 🇨🇳

Interactive PWA for learning Simplified Chinese characters, pinyin, and tones.

## What's Inside

**100 essential HSK 1-2 characters** with:
- Pinyin (with tone marks)
- Tone number (1-4 + neutral)
- Radical
- Memory hook (etymology/visual)
- 2-3 example words each

## 8 Interactive Games

1. **📖 Reference** — Browse all characters, filter by tone
2. **🎴 Flashcards** — Flip cards, hear pronunciation, learn memory hooks
3. **🔗 Matching** — Pair characters with pinyin or meanings
4. **🧠 Memory** — Classic card-matching game (character ↔ pinyin)
5. **🎵 Tone Sort** — Drag characters into their tone category
6. **❓ Quiz** — Multiple-choice: identify pinyin, tone, or meaning
7. **🎙 Pronunciation** — Speak and get graded by speech recognition
8. **🎶 Tones** — The 4-tone system explained with audio examples

## Install on iPhone

1. Open the app URL in **Safari**
2. Tap the **Share** icon (square with arrow)
3. Tap **"Add to Home Screen"**
4. Tap **Add** — app opens fullscreen with custom icon

## Tech Stack

- **Vanilla HTML/CSS/JS** — zero dependencies, no build step
- **Web Speech API** — text-to-speech (zh-CN) + speech recognition
- **localStorage** — progress persistence (XP, known characters, streaks)
- **Service Worker** — offline caching
- **PWA** — installable on iOS/Android/desktop

## Structure

```
mandarin-quest/
├── index.html      # App shell + all screens
├── styles.css      # Full styling
├── app.js          # Game logic (8 games)
├── data.js         # Character data (100 chars, pinyin, tones, words)
├── manifest.json   # PWA manifest
├── sw.js           # Service worker (offline cache)
├── README.md       # This file
└── icons/          # App icons
```

## Deploy

```bash
cd ~/Desktop/mandarin-quest
git init && git add -A && git commit -m "Initial commit"
# Push to GitHub Pages for free hosting
```

Built from the Thai Alphabet Quest architecture.
