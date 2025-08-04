/**
 * - Прості типи: any, unknown, number, string, boolean, null, undefined
 * - Виведення типів (type inference)
 */

let age: number = 10;

age = "test";
age = [];

if (typeof age === "number") {
  age + 2;
}
