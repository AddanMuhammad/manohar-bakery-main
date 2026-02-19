import React from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'primary';
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'right' | 'left';
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, icon, iconPosition = 'right', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants: Record<ButtonVariant, string> = {
      default: 'bg-white/20 text-secondary hover:bg-secondary/10 rounded-full shadow-default uppercase font-semibold',
      destructive: 'bg-red-500 text-white hover:bg-red-600 uppercase font-semibold',
      outline: 'border border-secondary text-secondary hover:bg-secondary hover:text-white uppercase font-semibold',
      secondary: 'bg-secondary/4 text-secondary hover:bg-secondary/5 rounded-full capitalize font-semibold shadow-custom',
      ghost: 'hover:bg-gray-100 hover:text-secondary uppercase font-semibold',
      link: 'underline-offset-4 hover:underline text-secondary uppercase font-semibold',
      primary: 'bg-secondary text-primary hover:bg-secondary/8 rounded-full capitalize font-semibold shadow-custom'
    };
    
    const sizes: Record<ButtonSize, string> = {
      default: 'md:py-4 md:px-6 px-2 py-2',
      sm: 'h-8 md:px-4 text-sm px-2',
      lg: 'px-4 py-2 text-base md:px-8 md:h-12',
      icon: 'h-10 w-10 text-3xl'
    };

    const iconElement = icon && (
      <span className={cn(
        size === 'sm' ? 'w-4 h-4' : 'w-6 h-6',
        iconPosition === 'left' ? 'mr-2' : 'ml-2'
      ) + ' bg-secondary rounded-full p-1 text-primary flex items-center justify-center'}>
        {icon}
      </span>
    );

    return (
      <button
        className={cn(baseClasses, variants[variant], sizes[size] , className)}
        ref={ref}
        {...props}
      >
        {iconPosition === 'left' && iconElement}
        {children}
        {iconPosition === 'right' && iconElement}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button }; 