import { Link } from 'react-router-dom';

const CustomLink = ({ children, style, ...other }) => {
  if (!style) {
    style = {
      textDecoration: 'inherit',
      color: 'inherit'
    };
  }

  return (
    <Link
      style={style}
      {...other}>
      {children}
    </Link>
  );
};

export default CustomLink;