import './Button.css';

const Button = ({ children, variant = 'primary', size = '', className = '', onClick, href, ...props }) => {
  const classes = `btn btn-${variant} ${size ? `btn-${size}` : ''} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
