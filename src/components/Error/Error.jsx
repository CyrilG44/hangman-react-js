import styles from './Error.module.css';
//styles[myVar] will be replaced by the right class VS styles.notification will retrieve notification class

const Error = ({ children, variant = 'error', ...props }) => {
  return (
    <div className={`${styles.notification} ${styles[variant]}`} {...props}>
      {children}
    </div>
  );
};

export default Error;
