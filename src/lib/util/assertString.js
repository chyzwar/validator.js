export default function assertString(input) {
  if (typeof input === 'string' || input instanceof String) {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}
