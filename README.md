# PollyGlot 🦜

> Perfect Translation Every Time

A Scrimba AI Engineer Path project — an AI-powered translation app built with the OpenAI API.

## Features

- Translate text into French, Spanish, or Japanese
- Clean two-view flow: input → result → start over
- Powered by OpenAI's chat completions API

## Project Structure

```
index.html           # App markup — input view and result view
style.css            # Styles (navy header, card layout, blue accents)
index.js             # View switching and OpenAI API logic
config.js            # Your API key (gitignored — never committed)
config.example.js    # Template for config.js
assets/              # Logo and background images
```

## Setup

1. Clone the repo
2. Copy `config.example.js` to `config.js` and add your OpenAI API key:
   ```js
   const OPENAI_API_KEY = 'sk-...'
   ```
3. Open `index.html` in a browser

> `config.js` is gitignored — your API key will never be committed.

## Roadmap

- [x] Base UI — input view, result view, design
- [x] OpenAI API integration (gpt-4o-mini, temperature 0.3, max_tokens 500)
- [ ] Error handling
- [ ] Chat mode (stretch goal)
- [ ] Correction feature (stretch goal)
- [ ] AI-generated images (stretch goal)
- [ ] Deploy with hidden API key (stretch goal)
