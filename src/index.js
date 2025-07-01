const result = await fetch("https://example.com", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "x-email-sample": "admin@example.com",
  },
});

console.log(`Call to example.com returned status: ${result.status}`);
