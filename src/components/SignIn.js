import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Authenticator, Heading, useTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from "react-router-dom";

import useIsAuthenticated from '../hooks/useIsAuthenticated';
import './SignIn.css';

const components = {
  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Sign in to your account
        </Heading>
      );
    }
  }
};

const SignIn = () => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
        navigate("/");
        return (null);
    }
  }, [navigate, isAuthenticated]);

  return (
    <Box sx={{ mt: 8 }}>
      <Authenticator
        hideSignUp={true}
        components={components} />
    </Box>
  );
};

export default SignIn;