
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  asChild?: boolean;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'primary', size = 'md', isLoading, icon, asChild = false, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary disabled:opacity-50 disabled:pointer-events-none";
    
    const variantStyles = {
      primary: "bg-primary text-primary-foreground hover:shadow-md hover:shadow-primary/20 hover:translate-y-[-2px]",
      secondary: "bg-secondary text-secondary-foreground hover:shadow-md hover:shadow-secondary/20 hover:translate-y-[-2px]",
      outline: "border border-border bg-transparent hover:bg-muted/30 text-foreground",
      ghost: "bg-transparent text-foreground hover:bg-muted/30"
    };
    
    const sizeStyles = {
      sm: "text-sm px-3 py-1.5 gap-1.5",
      md: "text-base px-4 py-2 gap-2",
      lg: "text-lg px-6 py-3 gap-2.5"
    };
    
    const Comp = asChild ? React.cloneElement(children as React.ReactElement, {
      className: cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className,
        (children as React.ReactElement).props.className
      ),
      ref,
      ...props
    }) : (
      <button
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <span className="mr-2 animate-spin">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </span>
        )}
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </button>
    );
    
    return Comp;
  }
);

Button.displayName = 'Button';

export default Button;
