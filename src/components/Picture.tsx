'use client'

import Image from 'next/image'
import { Illustration } from './Illustration'
import { imageAvailable } from '@/lib/media'

type Variant = 'circuit' | 'waves' | 'grid' | 'pulse' | 'nodes' | 'beam'
type Tone = 'light' | 'dark' | 'accent'

type Props = {
  src?: string
  alt: string
  fallbackVariant: Variant
  fallbackTone?: Tone
  className?: string
  seed?: number
  label?: string
  priority?: boolean
  sizes?: string
}

// Renders a real photo if `src` is provided (file must exist in /public),
// otherwise falls back to a designed SVG illustration so the layout never
// breaks while HellPlan is still collecting real photography.
export function Picture({
  src,
  alt,
  fallbackVariant,
  fallbackTone = 'light',
  className = '',
  seed = 0,
  label,
  priority,
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
}: Props) {
  if (imageAvailable(src)) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src as string}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <Illustration
      variant={fallbackVariant}
      tone={fallbackTone}
      seed={seed}
      label={label}
      className={className}
    />
  )
}
