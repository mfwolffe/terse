"use client"

import { useEffect, useState } from "react"

const titleStr = 'tldr?';

export default function Typewriter(text="tldr?", delay=50, variation=200) {
  const [content, setContent] = useState('');

  useEffect(() => {
    const cursorPos = content.length;
    if (cursorPos === text.length) return;

    const typeDelay = 0 | Math.random() * variation + delay;

    const timer = setTimeout(() => {
      setContent(content + titleStr[cursorPos]);
      clearTimeout(timer);
    }, typeDelay);
  }, [content])


  return (<span>{content}<span className="cursor">|</span></span>)
}