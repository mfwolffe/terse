import React, { useEffect, useState } from 'react';
import styles from './Typewriter.module.css';
import { randIntLeftInclusiveRange as randIntExcl } from '@/app/utils/common';
import { randIntFromInclusiveRange as randIntIncl } from '@/app/utils/common';

const Typewriter: React.FC = () => {
  const [text, setText] = useState('');                 // the string to render w/ typewriter effect
  const [isTerse, setIsTerse] = useState(false);        // basically, are we done?
  const [isTyping, setIsTyping] = useState(true);       // are we typing to the intermediary?
  const [isTersing, setIsTersing] = useState(false);    // are we typing to the final string?
  const [isDeleting, setIsDeleting] = useState(false);  // are we in the process of deleting the intermediary string?

  const final = 'tldr?';                      // final string to render
  const intrmdry = 'too long, didn\'t read?'; // intermediary string (is typed out first, then deleted)

  // thought about reversing the strings to simplify 
  // const dupeFinal = [...final].reverse().join("");
  // const dupeIntrmdry = [...intrmdry].reverse().join("");

  const PAUSESPEED = 700;

  useEffect(() => {
    const typewriterEffect = () => {
      let timer: NodeJS.Timeout;
      let basespeed = 24;
      let speed = basespeed;

      if (isTyping) {
        if (text === intrmdry) {
          setIsTyping(false);
          setIsDeleting(true);
        } else {
          if (intrmdry[text.length] === '?')        speed = PAUSESPEED;
          else if (intrmdry[text.length] === ',')   speed = basespeed * randIntIncl(8, 12);
          else if (intrmdry[text.length] === '\'')  speed = basespeed * randIntIncl(4, 10);
          else speed = basespeed;

          timer = setTimeout(() => { setText(intrmdry.slice(0, text.length + 1)); }, speed);
        }
      }
      
      else if (isDeleting) {
        if (text === '') {
          setIsDeleting(false);
          setIsTersing(true);
        } else timer = setTimeout(() => { setText(text.slice(0, -1)); }, basespeed / 2)  
      }

      else if (isTersing) {
        if (text === final) {
          setIsTersing(false);
          setIsTerse(true);
        } else timer = setTimeout(() => { setText(final.slice(0, text.length + 1)); }, basespeed * 3/4);  
      }

      return () => clearTimeout(timer);
    };

    const interval = setInterval(typewriterEffect, 100);
    return () => clearInterval(interval);
  }, [text, isDeleting, isTersing, isTerse, isTyping]);

  return (
    <div className='w-fit'>
      <h1 className={styles.typewriter}>{text}<span className={styles.cursor}>|</span></h1>
    </div>
  );
};

export default Typewriter;
