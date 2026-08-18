import React from 'react'
import type { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  id: string
  className?: string
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className = '',
}) => {
  return (
    <section
      id={id}
      className={`py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </section>
  )
}

export default SectionWrapper
