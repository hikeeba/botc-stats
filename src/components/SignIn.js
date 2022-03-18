import { Authenticator, Heading, useTheme } from '@aws-amplify/ui-react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
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
          <IconButton aria-label='close sign in modal'>
            <CloseIcon />
          </IconButton>
        </Heading>
      );
    }
  }
};

const SignIn = () => {
  return (
    <Authenticator
      variation="modal"
      hideSignUp={true}
      components={components}>
    </Authenticator>
  );
};

export default SignIn;