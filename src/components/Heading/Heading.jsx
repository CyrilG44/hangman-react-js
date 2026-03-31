import React from 'react';
import styles from './Heading.module.css';

const Heading = ({ children, level = 1, ...props }) => {
  const Tag = `h${level}`; // html tag
  
  return (
    <Tag className={`${styles.heading} h${level}`} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
