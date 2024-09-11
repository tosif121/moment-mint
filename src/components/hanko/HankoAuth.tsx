'use client';

import { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { register, Hanko } from '@teamhanko/hanko-elements';

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL || '';

export default function HankoAuth() {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko | null>(null);

  useEffect(() => {
    if (hankoApi) {
      import('@teamhanko/hanko-elements')
        .then(({ Hanko }) => {
          const hankoInstance = new Hanko(hankoApi);
          setHanko(hankoInstance);
        })
        .catch((error) => {
          console.error('Failed to load Hanko elements:', error);
        });
    }
  }, [hankoApi]);

  const redirectAfterLogin = useCallback(() => {
    router.replace('/');
  }, [router]);

  useEffect(() => {
    if (hanko) {
      hanko.onSessionCreated(() => {
        redirectAfterLogin();
      });
    }
  }, [hanko, redirectAfterLogin]);

  useEffect(() => {
    if (hankoApi) {
      register(hankoApi).catch((error) => {
        console.error('Hanko registration failed:', error);
      });
    }
  }, [hankoApi]);

  return <hanko-auth />;
}
