import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/shared/utils/cn';

const buttonVariants = cva('inline-flex justify-center items-center text-sm rounded-md font-medium whitespace-nowrap', {
  variants: {
    variant: {
      default: 'bg-primary text-secondary',
      outline: 'border border-solid border-input text-primary'
    },
    size: {
      default: 'h-10 py-2 px-4',
      sm: 'h-9 px-2',
      icon: 'h-8 w-8'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
});

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>
>(({ className, variant, size, ...props }, ref) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} ref={ref} />;
});
