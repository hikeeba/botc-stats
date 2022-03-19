import useIsAuthenticated from '../hooks/useIsAuthenticated';

const Authenticated = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return (null);
  }

  return (
    {children}
  );
};

export default Authenticated;