import React, { PropsWithChildren } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const flexRoot = tv({
  base: 'flex flex-wrap',
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    gap: {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-8',
      xl: 'gap-10',
      '2xl': 'gap-24',
    },
    height: {
      sm: 'h-4',
      md: 'h-8',
      lg: 'h-12',
      xl: 'h-24',
      full: 'h-full',
    },
    width: {
      sm: 'w-4',
      md: 'w-8',
      lg: 'w-16',
      xl: 'w-24',
      full: 'w-full',
    },
    padding: {
      sm: 'p-1',
      md: 'p-4',
      lg: 'p-8',
    },
    margin: {
      sm: 'm-1',
      md: 'm-4',
      lg: 'm-8',
    },
    flexibility: {
      '1': 'flex-1',
      auto: 'flex-auto',
      none: 'flex-none',
    },
  },
  defaultVariants: {
    direction: 'row',
    justify: 'start',
    align: 'stretch',
  },
})

type FlexProps = PropsWithChildren<VariantProps<typeof flexRoot>> & {
  className?: string
}

export const Flex: React.FC<FlexProps> = ({
  children,
  className = '',
  ...props
}) => {
  const classes = `${flexRoot(props)} ${className}`.trim()

  return <div className={classes}>{children}</div>
}
