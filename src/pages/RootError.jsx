import React from 'react';
import { Link, useNavigation, useRouteError } from 'react-router-dom';
import { LinearProgress } from '../components/Progress';

const RootError = () => {
  const error = useRouteError();
  const navigation = useNavigation();

  return (
    <>
    <div className="h-dvh grid grid-cols-1 justify-items-center content-center">
      <p className="text-[57px] leading-[64px] tracking-[-0.25px] font-medium">{error.status}</p>

      <p className="text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-4">
        We couldn&apos;t find the page you&apos;re looking for.
      </p>

      <Link
        to='/'
        className="btn filled primary"
      >
        Back to home
        <div className='state-layer'></div>
      </Link>
    </div>

    {navigation.state === "loading" && (
        <LinearProgress classes="fixed top-0 left-0 right-0" />
    )}
    </>
  );
};

export default RootError;
