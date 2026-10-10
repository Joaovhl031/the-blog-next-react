'use client'

import clsx from "clsx";

export function Header(){
  console.log('Header')
  return (
    <h1
        className={clsx(
          "text-3xl font-bold text-blue-800",
          "hover:text-blue-200 hover:bg-blue-500",
          "transition duration-1000",
        )}
        onClick={() => alert('onClick Header')}
      >
        Ola de page.tsx
      </h1>
  )
}
