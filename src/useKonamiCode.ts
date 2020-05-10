import {
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';

export const useKeySequence = (keys: string[], callback?: Function): [boolean, Function] => {
  const [match, setMatch] = useState(false);

  const refIndex = useRef(0);

  const onKeyDownCallback = useCallback((event: KeyboardEvent): void => {
    const { key } = event;

    if (!key) {
      return;
    }

    if (refIndex.current === keys.length - 1) {
      setMatch(true);

      if (callback) {
        callback();
      }
    }

    if (keys[refIndex.current] !== null && key === keys[refIndex.current]) {
      refIndex.current += 1;

      return;
    }

    refIndex.current = 0;
    setMatch(false);
  }, []);

  useEffect((): () => void => {
    window.addEventListener('keydown', onKeyDownCallback);

    return (): void => window.removeEventListener('keydown', onKeyDownCallback);
  }, [onKeyDownCallback]);

  return [match, setMatch];
};

export const useKonamiCode = (): [boolean, Function] => {
  const keys = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
    ' ',
  ];

  return useKeySequence(keys);
};

export default useKonamiCode;
