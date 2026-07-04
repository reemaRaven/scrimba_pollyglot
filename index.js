const inputView = document.getElementById('input-view')
const resultView = document.getElementById('result-view')
const sourceTextEl = document.getElementById('source-text')
const originalTextEl = document.getElementById('original-text')
const translatedTextEl = document.getElementById('translated-text')
const translateBtn = document.getElementById('translate-btn')
const startOverBtn = document.getElementById('start-over-btn')

function getSelectedLanguage() {
  return document.querySelector('input[name="language"]:checked').value
}

function showResultView(original, translation) {
  originalTextEl.textContent = original
  translatedTextEl.textContent = translation
  inputView.classList.add('hidden')
  resultView.classList.remove('hidden')
}

function showInputView() {
  resultView.classList.add('hidden')
  inputView.classList.remove('hidden')
}

async function translateText(text, language) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      temperature: 0.3,
      max_tokens: 500,
      messages: [
        {
          role: 'system',
          content: 'You are a translation assistant. Translate the given text accurately into the specified language. Respond with only the translation — no explanations, no punctuation changes, no extra text.'
        },
        {
          role: 'user',
          content: `Translate the following text to ${language}:\n\n${text}`
        }
      ]
    })
  })

  if (!response.ok) {
    const err = await response.json()
    throw new Error(err.error?.message || 'Translation failed')
  }

  const data = await response.json()
  return data.choices[0].message.content.trim()
}

translateBtn.addEventListener('click', async () => {
  const text = sourceTextEl.value.trim()
  if (!text) return

  const language = getSelectedLanguage()

  translateBtn.disabled = true
  translateBtn.textContent = 'Translating...'

  try {
    const translation = await translateText(text, language)
    showResultView(text, translation)
  } finally {
    translateBtn.disabled = false
    translateBtn.textContent = 'Translate'
  }
})

startOverBtn.addEventListener('click', () => {
  sourceTextEl.value = ''
  showInputView()
})
