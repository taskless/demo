const result = await fetch("https://example.com", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "x-email-sample": "admin@example.com",
  },
});

// console.log("Response Headers:");
// result.headers.forEach((value, name) => {
//   console.log(`${name}: ${value}`);
// });
// console.log("Response Body:");
// const body = await result.text();
// console.log(body);

console.log(`Call to example.com returned status: ${result.status}`);
