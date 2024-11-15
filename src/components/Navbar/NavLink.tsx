"use client";
import React from 'react';
import { NavLinkProps } from './types';

export function NavLink({ 
  text, 
  width, 
  isActive, 
  onClick 
}: NavLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick(text);
  };

  return (
    <a
      href={`#${text.toLowerCase()}`}
      className={`
        z-10 grow shrink py-px whitespace-nowrap bg-blend-normal 
        ${width}
        ${isActive ? 'border-b-2 border-zinc-800 text-zinc-800' : 'text-zinc-700'}
        hover:text-zinc-600 hover:underline transition-colors
      `}
      role="menuitem"
      aria-current={isActive ? 'page' : undefined}
      onClick={handleClick}
    >
      {text}
    </a>
  );
}
