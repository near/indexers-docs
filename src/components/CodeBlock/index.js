import React from 'react';
import styles from './styles.module.css';


export default function CodeBlock(props) {
  return (
    <div className={styles.codeblock}>
      {props.children}
    </div>
  )
}
