/* eslint-disable linebreak-style */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
/* eslint-disable linebreak-style */
export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);
  return (
    <div>
      <br />
      <br />
      <br />
      <h1 className="title-not-found text-center text-white">Oops... 😢</h1>
      <h4 className="title-not-found text-center text-white">
        {' '}
        Page not Found
      </h4>
    </div>
  );
}
