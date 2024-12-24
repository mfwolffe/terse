"use client";

import TimedTransducer from "./TimedTransducer/TimedTransducer";
import { sources, technologies } from "../data/data";

/**
 * just an rng. feeling whimsical
 *
 * @param {*} min inclusive min
 * @param {*} max inclusive max
 */
const grabInt = (min: number=0, max: number=Number.MAX_VALUE): number => Math.floor(Math.random() * (max - min + 1) + min);

export default function Transducer() {  
  return (
    <p className="antialiased">
      Using
      <TimedTransducer strings={technologies} classes="subpixel-antialiased text-amber-400" /> 
      , we
      <TimedTransducer strings={sources} classes="subpixel-antialiased text-amber-400" />
      to attempt to make matt's emails less rambling.
    </p>
  )
}
