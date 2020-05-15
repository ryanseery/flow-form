export type Props = {
  focused: boolean;
  showError: boolean;
  theme: { border: { error: string; focus: string; default: string } };
};

export function border(props: Props) {
  if (props.focused && props.showError) return props.theme.border.error;

  if (props.focused) return props.theme.border.focus;

  if (props.showError) return props.theme.border.error;

  return props.theme.border.default;
}
