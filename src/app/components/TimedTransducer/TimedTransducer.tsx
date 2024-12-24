'use client';

import React, { useState, useEffect } from 'react';
import styles from './TimedTransducer.module.css';

type TimedTransducerProps = {
  strings: string[];
  delay?: number;
  classes?: string;
};

function grabInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const TimedTransducer: React.FC<TimedTransducerProps> = ({ strings, delay=0 , classes='' }) => {
  const [str, setStr] = useState('');

  const nStrs = strings.length - 1;

  useEffect(() => {
    const updateStr = () => {
      const strIndex = grabInt(0, nStrs);
      setTimeout(() => setStr(strings[strIndex]), delay / 2);
    };

    // is this a transducer that should auto update text?
    if (delay !== 0) {
      updateStr();
      const intervalId = setInterval(updateStr, delay);
      return () => clearInterval(intervalId);
    }
    else
      setStr(strings[grabInt(0, nStrs)]);
  }, [nStrs, strings, delay]);

  return (
    <span className={classes}>
      {str}
    </span>
  );
};

export default TimedTransducer;

