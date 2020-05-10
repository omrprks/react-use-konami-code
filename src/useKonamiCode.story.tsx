import React, { ReactElement, FunctionComponent } from 'react';

import useKonamiCode from './useKonamiCode';

export default {
  title: 'useKonamiCode',
  includeStories: ['Default'],
};


export const matchMessage = 'Match!';
export const notMatchMessage = 'No Match';

export const Default: FunctionComponent = (): ReactElement => {
  const [match] = useKonamiCode();

  if (match) {
    return <div>{matchMessage}</div>;
  }

  return <div>{notMatchMessage}</div>;
};
