import { test } from 'vitest'

test('create iframe repro', () => {
  const iframe = document.createElement('iframe')
  iframe.src = '/embed.html'
  document.body.appendChild(iframe)
})
