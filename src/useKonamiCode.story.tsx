import React, { ReactElement, FunctionComponent } from 'react';

import useKonamiCode from './useKonamiCode';

export default {
  title: 'useKonamiCode',
};

export const Default: FunctionComponent = (): ReactElement => {
  const [match] = useKonamiCode();

  if (match) {
    return <div>Match!</div>;
  }

  return <div>No Match</div>;
};
