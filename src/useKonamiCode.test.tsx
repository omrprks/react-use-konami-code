import React from 'react';
import {
  render,
  screen,
  act,
  fireEvent,
} from '@testing-library/react';

import { keySequence } from './useKonamiCode';

import {
  Default as App,
  matchMessage,
  notMatchMessage,
} from './useKonamiCode.story';

describe('useKonamiCode', () => {
  it('keycode should match', () => {
    render(<App />);

    expect(screen.queryByText(matchMessage)).toBeNull();
    expect(screen.getByText(notMatchMessage)).toBeDefined();

    act(() => {
      for (let i = 0; i < keySequence.length; i += 1) {
        const key = keySequence[i];
        fireEvent.keyDown(window, {
          key,
        });
      }
    });

    expect(screen.getByText(matchMessage)).toBeDefined();
    expect(screen.queryByText(notMatchMessage)).toBeNull();
  });
});
