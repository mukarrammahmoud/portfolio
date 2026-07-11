import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'
import { I18nProvider } from '../lib/i18n/I18nContext'

describe('Navbar Component', () => {
  it('renders the language toggle button', () => {
    render(
      <I18nProvider>
        <Navbar />
      </I18nProvider>
    )

    // Check if the desktop language toggle button is in the document
    const toggleButton = screen.queryByLabelText('Toggle language')
    expect(toggleButton).not.toBeNull()
  })
})
