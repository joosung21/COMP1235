//second file
console.log(b);
// TOPIC 1: Async function
// KEYWORDS => async
async function promiseReturner() {
  return "This is a Promise object";
}
// calling
console.log("Asunc Function: ", promiseReturner());
//TOPIC 2: AWAIT
async function proccessPay() {
  try {
    let date = await payFull();
    console.log("Processing Pay");
  } catch (err) {
    console.log("Error: ", err);
  }
}
console.log("Await async: ", proccessPay());
console.log("Processing Payment..........");
// THEN CATCH
function promiseReturner1() {
  return Promise.resolve("Resolved");
}
let p1 = promiseReturner1();
console.log("Promise: ", p1);
async function promiseReturner2() {
  let p2 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("Resolved");
    } else {
      reject(new Error("Something went wrong"));
    }
  });
  return p2;
}
console.log("Res, Reject: ", promiseReturner2());
promiseReturner2()
  .then(() => console.log("Success"))
  .catch((err) => {
    console.log("Error: ", err);
  });
