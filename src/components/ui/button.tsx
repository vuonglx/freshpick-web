import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg';
}

const getButtonClasses = (
  variant: ButtonProps['variant'] = 'default',
  size: ButtonProps['size'] = 'default',
  className?: string
) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variantClasses = {
    default: 'bg-primary-600 text-white hover:bg-primary-700',
    destructive: 'bg-accent-red text-white hover:bg-red-600',
    outline: 'border border-input bg-white hover:bg-primary-50 hover:text-primary-600',
    secondary: 'bg-tech-100 text-tech-900 hover:bg-tech-200',
    ghost: 'hover:bg-primary-50 hover:text-primary-600',
    link: 'underline-offset-4 hover:underline text-primary-600',
  }[variant];

  const sizeClasses = {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3 rounded-md',
    lg: 'h-11 px-8 rounded-md',
  }[size];

  return cn(baseClasses, variantClasses, sizeClasses, className);
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={getButtonClasses(variant, size, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
