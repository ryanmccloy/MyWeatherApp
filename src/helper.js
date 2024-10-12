export function checkSearchLocationIsValidInput(input) {
  const validStringRegex = /^[A-Za-z\s]+$/;

  return validStringRegex.test(input);
}
