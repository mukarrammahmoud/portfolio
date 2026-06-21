export function splitIntoWords(element: HTMLElement): HTMLElement[] {
  const text = element.textContent ?? ''
  element.textContent = ''
  element.setAttribute('aria-label', text)

  const words: HTMLElement[] = []
  text.split(/(\s+)/).forEach((part) => {
    if (/^\s+$/.test(part)) {
      element.appendChild(document.createTextNode(part))
      return
    }

    const wrapper = document.createElement('span')
    wrapper.className = 'split-word inline-block overflow-hidden align-bottom'
    wrapper.setAttribute('aria-hidden', 'true')

    const inner = document.createElement('span')
    inner.className = 'split-word-inner inline-block will-change-transform'
    inner.textContent = part

    wrapper.appendChild(inner)
    element.appendChild(wrapper)
    words.push(inner)
  })

  return words
}

export function splitIntoChars(element: HTMLElement): HTMLElement[] {
  const text = element.textContent ?? ''
  element.textContent = ''
  element.setAttribute('aria-label', text)

  const chars: HTMLElement[] = []
  ;[...text].forEach((char) => {
    const span = document.createElement('span')
    span.className = 'split-char inline-block will-change-transform'
    span.setAttribute('aria-hidden', 'true')
    span.textContent = char === ' ' ? '\u00A0' : char
    element.appendChild(span)
    chars.push(span)
  })

  return chars
}
