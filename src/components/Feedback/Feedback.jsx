import styles from './Feedback.module.css';

const Feedback = ({ children, type = 'info', ...props }) => {
  return (
    <div className={`${styles.feedback} ${styles[type]}`} {...props}>
      {children}
    </div>
  );
};

export default Feedback;
