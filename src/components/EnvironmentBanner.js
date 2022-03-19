import Alert from '@mui/material/Alert';

const titleMapping = {
  dev: 'Development',
  local: 'Local',
  unknown: 'Unknown'
};

const EnvironmentBanner = (props) => {
  const envName = process.env.REACT_APP_ENV;

  if (envName === 'main') {
    return (null);
  }

  let envTitle = null;

  if (titleMapping.hasOwnProperty(envName)) {
    envTitle = titleMapping[envName];
  }
  else {
    envTitle = `${titleMapping.unknown} (${envName})`;
  }

  return (
    <Alert
      severity='warning'
      variant='filled'
      {...props}>
        {envTitle}
    </Alert>
  );
};

export default EnvironmentBanner;