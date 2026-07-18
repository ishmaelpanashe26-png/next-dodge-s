import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

export default function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  const base = 'px-4 py-2 rounded-md font-medium'
  const variants: Record<string, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    ghost: 'bg-transparent text-gray-800 border border-gray-200 hover:bg-gray-50',
  }

  return (
    <button className={`${base} ${variants[variant] ?? variants.primary}`} {...props}>
      {children}
    </button>
  )
}
