/**
 * They say age is just a number, but this code knows the real number.
 *
 * @returns {number}
 */
export const oldness = (): number => {
  const year = 365 * 24 * 60 * 60 * 1000;
  const birthdate = '1999-09-02';

  return Math.floor(
    Math.abs((new Date(birthdate).getTime() - new Date().getTime()) / year),
  );
};
