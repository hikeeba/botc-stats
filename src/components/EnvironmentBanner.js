import Alert from '@mui/material/Alert';

const titleMapping = {
  dev: 'Development',
  local: 'Local',
  unknown: 'Unknown'
};

const EnvironmentBanner = (props) => {
  console.log(process.env);

  if (process.env.REACT_APP_ENV === 'main') {
    return (null);
  }

  let envTitle = titleMapping.unknown;

  if (titleMapping.hasOwnProperty(process.env.REACT_APP_ENV)) {
    envTitle = titleMapping[process.env.REACT_APP_ENV];
  }
  else {
    envTitle = `${titleMapping[process.env.REACT_APP_ENV] (process.env.REACT_APP_ENV)}`;
  }

  return (
    <Alert
      severity='warning'
      variant='filled' {...props}>
        {envTitle} Environment
    </Alert>
  );
};

export default EnvironmentBanner;