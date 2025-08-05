/**
 * Узагальнені типи (generics)
 */

/***************** 1 *****************/
function foo<T>(value: T): T {
  console.log(value);
  return value;
}

foo<number>(5);
foo<string>("hello");
foo<boolean>(false);
foo<number[]>([1, 2]);
foo([1, "hello"]);

interface User {
  username: string;
  age: number;
}

foo<User>({ username: "mango", age: 5 });

/***************** 2 *****************/
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([10, 20, 30]); // 10
getFirstElement<string>(["Alice", "Bob"]); // "Alice"

/***************** 3 *****************/
function shuffle<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

const mixedNums = shuffle<number>([1, 2, 3, 4]);
const mixedWords = shuffle<string>(["apple", "banana", "cherry"]);

/***************** 4 *****************/
function saveToStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

saveToStorage<string>("user", "Jacob Peterson");
saveToStorage<number>("clicks", 8);

function loadFromStorage<T>(key: string): T | null {
  const item = localStorage.getItem(key);
  // return JSON.parse(item) as T;
  if (item !== null) {
    return JSON.parse(item);
  }

  return null;
}

const user = loadFromStorage<string>("user");
const clicks = loadFromStorage<number>("clicks");

// const parsedUser = JSON.parse("user") as string;

/***************** 5 *****************/
interface Product {
  name: string;
  price: number;
}

function max<T>(array: T[], selector: (item: T) => number): T {
  return array.reduce((prev, curr) =>
    selector(curr) > selector(prev) ? curr : prev
  );
}

const products: Product[] = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 800 },
];

const mostExpensive = max<Product>(products, (p) => p.price);
// → { name: "Laptop", price: 1000 }
