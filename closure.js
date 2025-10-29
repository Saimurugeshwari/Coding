// Explain closure in javascript with example:
// closure is a feature in JS where an inner function has 
// access to the outer (external) function's variables/

function cookieStore(item) {
  const storeName = "Sweet Delights";

  return function innerFunction(customerName) {
    console.log(`${customerName} bought ${item} from ${storeName}`);
  };
}

const buyCookies = cookieStore("choco chip");
buyCookies("Murugeshwari"); // Output: Murugeshwari bought choco chip from Sweet Delights