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

translateBtn.addEventListener('click', async () => {
  const text = sourceTextEl.value.trim()
  if (!text) return

  const language = getSelectedLanguage()

  // Placeholder until API is wired up
  showResultView(text, `[${language} translation coming soon]`)
})

startOverBtn.addEventListener('click', () => {
  sourceTextEl.value = ''
  showInputView()
})
