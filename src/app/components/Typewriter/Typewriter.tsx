"use client";

import React, { useEffect, useState } from 'react';
import styles from './Typewriter.module.css';

const Typewriter: React.FC = () => {
  const [text, setText] = useState('');                 // the string to render w/ typewriter effect
  const [isTerse, setIsTerse] = useState(false);        // basically, are we done?
  const [isTyping, setIsTyping] = useState(true);       // are we typing to the intermediary?
  const [isTersing, setIsTersing] = useState(false);    // are we typing to the final string?
  const [isDeleting, setIsDeleting] = useState(false);  // are we in the process of deleting the intermediary string?

  const final = 'tldr?';                      // final string to render
  const intrmdry = 'too long, didn\'t read?'; // intermediary string (is typed out first, then deleted)

  const deleteSpeed           = 1;
  const baseSpeed             = 22;
  const terserSpeed           = 12;
  const commaPauseSpeed       = 225;
  const questionPauseSpeed    = 135;
  const apostrophePauseSpeed  = 165;

  // thought about reversing the strings to simplify 
  // const dupeFinal = [...final].reverse().join("");
  // const dupeIntrmdry = [...intrmdry].reverse().join("");

  useEffect(() => {
    const typewriterEffect = () => {
      let timer: NodeJS.Timeout;
      
      let chkIndx = text.length;
      
      if (isTyping) {
        if (text === intrmdry) {
          setTimeout(() => {
            setIsTyping(false);
            setIsDeleting(true);
          }, 1400);
        }
        else if (chkIndx > -1 && intrmdry.substring(chkIndx - 2, chkIndx) === 'g,') {          
          setIsTyping(false);
          setTimeout(() => {
            timer = setTimeout(() => { setText(intrmdry.slice(0, chkIndx + 1)); }, baseSpeed);
            setIsTyping(true);
          }, commaPauseSpeed);
        }
        else if (chkIndx < intrmdry.length && intrmdry[chkIndx] === '\'') {
          setIsTyping(false);
          setTimeout(() => {
            timer = setTimeout(() => { setText(intrmdry.slice(0, chkIndx + 1)); }, baseSpeed);
            setIsTyping(true);
          }, apostrophePauseSpeed);
        }
        else if (chkIndx < intrmdry.length && intrmdry[chkIndx] === '?') {
          setIsTyping(false);
          setTimeout(() => {
            timer = setTimeout(() => { setText(intrmdry.slice(0, chkIndx + 1)); }, baseSpeed);
            setIsTyping(true);
          }, questionPauseSpeed);
        }
        else
          timer = setTimeout(() => { setText(intrmdry.slice(0, chkIndx + 1)); }, baseSpeed);
      }

      else if (isDeleting) {
        if (text === '') {
          setIsDeleting(false);
          setIsTersing(true);
        }
        else
          timer = setTimeout(() => { setText(text.slice(0, -1)); }, deleteSpeed)  
      }

      else if (isTersing) {
        if (text === final) {
          setIsTersing(false);
          setIsTerse(true);
        }
        if (chkIndx < final.length && final[chkIndx] === '?') {
          setIsTersing(false);
          setTimeout(() => {
            timer = setTimeout(() => { setText(final.slice(0, text.length + 1)); }, terserSpeed);
            setIsTersing(true);
          }, questionPauseSpeed * 2)
        }
        else
          timer = setTimeout(() => { setText(final.slice(0, text.length + 1)); }, terserSpeed);
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
