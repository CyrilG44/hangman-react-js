import styles from './Button.module.css'; 
// *.module.css classes applied to this component only thanks to vite
// class names without any '-'

const Button = ({ children, onClick, type = 'button', ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles.button}
      {...props}
    >
      {children}
    </button>
  );
};

// or export default function Button(...){}

export default Button;
