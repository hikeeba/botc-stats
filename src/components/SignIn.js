import Box from '@mui/material/Box';
import { Authenticator, Heading, useTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

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
  return (
    <Box sx={{ mt: 8 }}>
      <Authenticator
        hideSignUp={true}
        components={components}>
      </Authenticator>
    </Box>
  );
};

export default SignIn;