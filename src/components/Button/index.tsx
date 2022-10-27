import { ButtonHTMLAttributes } from 'react'
import cx from 'clsx'
import classes from './button.module.css'

type Color = 'default' | 'primary' | 'danger'
type Variant = 'filled' | 'outline' | 'text'
type Size = 'md' | 'sm'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: Color
  variant?: Variant
  size?: Size
}

export const Button = ({ className, color = 'default', variant = 'filled', size = 'md', ...props }: ButtonProps) => {
  return <button className={cx(className, classes.button, {
    [classes.primary]: color === 'primary'
  })} {...props} />
}
