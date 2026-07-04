# PollyGlot 🦜

> Perfect Translation Every Time

A Scrimba AI Engineer Path project — an AI-powered translation app built with the OpenAI API.

## Features

- Translate text into French, Spanish, or Japanese
- Clean two-view flow: input → result → start over
- Powered by OpenAI's chat completions API

## Project Structure

```
index.html        # App markup — input view and result view
style.css         # Styles (navy header, card layout, blue accents)
index.js          # View switching and API logic
assets/           # Logo and background images
.env.example      # Environment variable template
```

## Setup

1. Clone the repo
2. Copy `.env.example` to `.env` and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```
3. Open `index.html` in a browser

## Roadmap

- [x] Base UI — input view, result view, design
- [ ] OpenAI API integration
- [ ] Error handling
- [ ] Chat mode (stretch goal)
- [ ] Correction feature (stretch goal)
- [ ] AI-generated images (stretch goal)
- [ ] Deploy with hidden API key (stretch goal)
