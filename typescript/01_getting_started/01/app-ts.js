// const formElement = document.querySelector(`form`)! as HTMLFormElement;
// const inputNum1Element = document.querySelector(`#num-1`)! as HTMLInputElement;
// const inputNum2Element = document.querySelector(`#num-2`)! as HTMLInputElement;
// const spanAnswerElement = document.querySelector(`#answer`)! as HTMLButtonElement;
// const sum = (val_1: number, val_2: number) => {
//   const answer = val_1 + val_2;
//   return answer;
// }
// type Combinable = number | string;
// type returnType = `number` | `string`;
// const combine = (
//   val_1: Combinable, 
//   val_2: Combinable, 
//   returnType: returnType,
// ) => {
//   let answer: Combinable;
//   if (typeof val_1 === `number` && typeof val_2 === `number` || returnType === `number`) {
//     answer = Number(val_1) + Number(val_2);
//   } else {
//     answer = String(val_1) + String(val_2);
//   }
//   switch (returnType) {
//     case `number`:
//       answer = Number( answer );
//       break;
//     case `string`:
//       answer = String( answer );
//       break;
//   }
//   return answer;
// } 
// const formOnSubmit = () => {
//   event.preventDefault()
//   const val_1 = Number(inputNum1Element.value);
//   const val_2 = Number(inputNum2Element.value);
//   // spanAnswerElement.innerText = String( combine(val_1, val_2) );
//   console.log( typeof combine(1, "2", `number`), combine(1, "2", `number`) );
// }
// formElement.addEventListener(`submit`, formOnSubmit);
// const add = (x1: number, x2: number): number => {
//   return x1 + x2;
// }
// const printResult = (x: number): void => {
//   console.log(x);
// }
// // printResult( add(1, 2) )
// let combineValues: (a:number, b: number) => number;
// combineValues = add;
// printResult( combineValues(1, 2) );
// const addAndHandle = (a: number, b:number, cb: (num: number) => void): void => {
//   const result = a + b;
//   cb(result);
// }
// addAndHandle(1, 2, (x) => console.log(x))
// let userName: string;
// let userInput: unknown;
// userInput = 5;
// userInput = 'Max';
// if (typeof userName === `string`) {
//   userName = userInput;
// }
var generateCustomError = function (message, code) {
    throw {
        message: message,
        code: code
    };
};
generateCustomError("ohhh", 5);
