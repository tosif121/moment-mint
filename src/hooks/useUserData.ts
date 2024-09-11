import { useState, useEffect } from 'react';
import { Hanko } from '@teamhanko/hanko-elements';

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL || '';

interface HankoUser {
  id: string;
  email: string;
  loading: boolean;
  error: string | null;
}

export function useUserData(): HankoUser {
  const [hanko, setHanko] = useState<Hanko | null>(null);
  const [userState, setUserState] = useState<HankoUser>({
    id: '',
    email: '',
    loading: true,
    error: null,
  });

  useEffect(() => {
    import('@teamhanko/hanko-elements')
      .then(({ Hanko }) => {
        setHanko(new Hanko(hankoApi));
      })
      .catch((error) => {
        setUserState({ id: '', email: '', loading: false, error: `Failed to load Hanko: ${error.message}` });
      });
  }, []);

  useEffect(() => {
    if (!hanko) return;

    hanko.user
      .getCurrent()
      .then(({ id, email }) => {
        setUserState({
          id,
          email: email ?? '',
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        setUserState((prevState) => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      });
  }, [hanko]);

  return userState;
}
