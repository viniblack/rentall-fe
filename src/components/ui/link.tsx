import { cva, type VariantProps } from 'class-variance-authority'
import NextLink from 'next/link'
import * as React from 'react'

import { cn } from '@/lib/utils'

const linkVariants = cva(
  'transition duration-300 inline-flex items-center justify-center rounded-md text-sm font-medium hover:underline underline-offset-4',
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-xl',
        xl: 'text-4xl',
      },
      margin: {
        sm: 'm-1',
        md: 'm-4',
        lg: 'm-8',
      },
      textColor: {
        primary: 'text-primary hover:text-primary-dark',
        secondary: 'text-secondary hover:text-secondary-dark',
        white: 'text-white hover:text-gray-300',
      },
      active: {
        true: 'text-green-500 underline hover:text-green-500',
      },
      disabled: {
        true: 'text-muted-foreground pointer-events-none',
      },
    },
    defaultVariants: {
      size: 'sm',
      textColor: 'white',
      active: false,
      disabled: false,
    },
  },
)

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string
  asChild?: boolean
}

export const Link: React.FC<LinkProps> = ({
  href,
  asChild,
  size,
  margin,
  textColor,
  active,
  disabled,
  children,
  ...props
}) => {
  const Comp = asChild ? React.Fragment : 'span'

  if (disabled) {
    return (
      <span
        className={cn(
          linkVariants({ size, margin, textColor, active, disabled }),
          props.className,
        )}
        aria-disabled="true"
        tabIndex={-1}
      >
        {children}
      </span>
    )
  }

  return (
    <NextLink href={href} passHref>
      <Comp
        className={cn(
          linkVariants({ size, margin, textColor, active }),
          props.className,
        )}
        {...props}
      >
        {children}
      </Comp>
    </NextLink>
  )
}
