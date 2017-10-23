// Equivalent of typealias in Swift
type RandomString = string;

// Ridiculous random number function
export default function randomString(count: number): RandomString {
  const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.apply(null, Array(count)).map(() => { return str.charAt(Math.floor(Math.random() * str.length)); }).join('');
}
