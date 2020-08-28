import * as React from 'react';

export function checkRenders__TOOL(): number {
  const ref = React.useRef(0);

  return ref.current++;
}
