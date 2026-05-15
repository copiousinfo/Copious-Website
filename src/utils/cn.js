/**
 * cn — classnames utility
 * Merges class strings, filtering falsy values.
 * Usage: cn('base-class', condition && 'conditional-class', 'another-class')
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
