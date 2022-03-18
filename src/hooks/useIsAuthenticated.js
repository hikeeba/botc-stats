import { useAuthenticator } from '@aws-amplify/ui-react';

const useIsAuthenticated = () => {
  const { route } = useAuthenticator(context => [context.route]);

  return route === 'authenticated';
};

export default useIsAuthenticated;