import { Link } from "react-router-dom";

const CTAButton = ({link, className, children}) => {

  return (
    <Link 
      to={link} 
      className={`
        px-3 py-2 bg-accent2 text-primary
         ${className}
      `}
    >
      {children}
    </Link>
  );
}

export default CTAButton;