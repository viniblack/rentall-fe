import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { Loading } from './loading'

const buttonVariants = cva(
  'inline-flex text-white items-center justify-center whitespace-nowrap rounded-md text-xs font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-background border border-input',
        outline:
          'border border-primary bg-black text-white hover:bg-[#161616] hover:border-primary hover:text-white',
        success: 'text-primary border border-primary bg-black cursor-default',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        ghost: 'hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-2 text-md',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
      textAlign: {
        center: 'text-center',
        start: 'text-start',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      textAlign: 'center',
    },
  },
)

const ButtonIcon = ({
  icon,
  iconClasses,
}: {
  icon: React.ReactNode
  iconClasses: string
}) => <span className={cn('flex flex-shrink-0', iconClasses)}>{icon}</span>

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: React.ReactNode
  isLoading?: boolean
  iconPosition?: 'left' | 'right'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      textAlign,
      asChild = false,
      icon,
      isLoading = false,
      children,
      iconPosition = 'right',
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    const iconClasses = children ? 'ml-2 mr-2' : ''
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, fullWidth, textAlign }),
          className,
        )}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {iconPosition === 'left' && icon && (
              <ButtonIcon icon={icon} iconClasses={iconClasses} />
            )}
            {children && <span className="flex-grow">{children}</span>}
            {iconPosition === 'right' && icon && (
              <ButtonIcon icon={icon} iconClasses={iconClasses} />
            )}
          </>
        )}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
