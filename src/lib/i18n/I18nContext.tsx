import React, { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations'
import type { Language, TranslationKey } from './translations'

interface I18nContextProps {
  language: Language
  setLanguage: (lang: Language) => void
  t: (
    key: TranslationKey,
    replacements?: Record<string, string | number>,
  ) => string
  isRtl: boolean
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined)

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'ar' || saved === 'en') {
      return saved
    }
    return 'en' // Default language is English
  })

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('lang', lang)
  }

  useEffect(() => {
    // Update HTML attributes for SEO and accessibility
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  const t = (
    key: TranslationKey,
    replacements?: Record<string, string | number>,
  ): string => {
    // Get translations for the current language
    const langTrans = translations[language]
    const translation = langTrans[key]

    if (!replacements) {
      return translation
    }

    // Replace keys like {name} with values from the replacements dictionary
    return Object.entries(replacements).reduce((acc, [k, v]) => {
      return acc.replace(new RegExp(`{${k}}`, 'g'), String(v))
    }, translation as string)
  }

  const isRtl = language === 'ar'

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, isRtl }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider')
  }
  return context
}
export type { Language }
