/**
 * @file  common utils/helpers that I constantly
 *        find myself having to rewrite when working
 *        in js. Add any helpers you may need here
 *        as long as there are no namespace problems
 *
 * @author  Matt Wolffe @mfwolffe, and random people
 *          around the web for certain functions that
 *          are lost to time since I fill most of these
 *          in from custom VSCode snippets.
 *          lmk if you want that snippet file
 */

/**
 * Slightly more reliable check on ability to parse
 * a number from a string that doesn't require an ugly
 * regex
 *
 * @param   {string}  str candidate string
 * @returns {boolean} true if the string can be interpreted as a number,
 *                    false otherwise
 */
const isNumber = (str: string): boolean => Number.isFinite(+str);

/**
 * Generates random integer in the range [min, max]
 *
 * @param   {number} min minimum possible value to generate (inclusive)
 * @param   {number} max maximum possible value to generate (inclusive)
 * @returns {number} a random integer between min and max, inclusive
 */
const randIntFromInclusiveRange = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Generates random integer in the range [min, max)
 *
 * NOTE: this is not typesafe, that is, if you pass it some obj
 *       it will try to coerce said obj to a number.
 *       In addition, if you pass it floating point values I believe
 *       the distribution will not be uniform due to rounding bias
 *
 * @param   {number} min minimum possible value to generate (inclusive)
 * @param   {number} max maximum possible value to generate (exclusive)
 * @returns {number} a random integer between min (inclusive) and max (exclusive)
 */
const randIntLeftInclusiveRange = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min) + min);

/**
 * This is essentially the same as randIntFromInclusiveRange,
 * but is more performant.
 *
 * CAUTION: in using a bit shift (the `<< 0`), the operands are
 *          treated as 32 bit 2's comp during computation, but
 *          the resulting value is not necessarily returned as such.
 *          Use this if for some very bizarre reason one of the other
 *          RNGs is slow.
 *          Note that this applies for all bitwise/binary operators
 *
 * @param   {number} min minimum possible value to generate (inclusive)
 * @param   {number} max maximum possible value to generate (inclusive)
 * @returns {number} a random integer in the range [min, max || 2^32-1]
 */
const fastRandomIntegerFromRange = (min: number, max: number): number =>
  (Math.random() * (max - min + 1)) << 0;

/**
 * Generate a random boolean
 *
 * @param   {number} [prob=0.5] prob the desired probability for `true`
 * @returns {boolean}           a boolean
 */
const randomBoolean = (prob: number = 0.5): boolean => Math.random() < prob;

/**
 * @see https://stackoverflow.com/a/54024653
 *
 * @author Kamil Kiełczewski (Stack Exchange)
 * @param {number} hue
 * @param {number} sat
 * @param {number} val
 * @returns {{}}
 */
const terseHSV2RGB = (hue: number, sat: number, val: number): {} => {
  const generator = (n: number, k = (n + hue / 60) % 6) =>
    val - val * sat * Math.max(Math.min(k, 4 - k, 1), 0);
  return generator(5), generator(3), generator(1);
};


export {
  isNumber,
  terseHSV2RGB,
  randomBoolean,
  randIntFromInclusiveRange,
  randIntLeftInclusiveRange,
  fastRandomIntegerFromRange,
}