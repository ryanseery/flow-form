import { theme } from '../theme';

export function border(focused: boolean, showError: boolean): string {
  if (focused) return theme.border.focus;

  if (showError) return theme.border.error;

  if (focused && showError) return theme.border.error;

  return theme.border.default;
}
