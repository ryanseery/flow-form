import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Test } from './TestComponent';

afterEach(cleanup);

describe('<Test />', () => {
  test('should display a Home component', async () => {
    const wrapper = render(<Test />);
  });
});
