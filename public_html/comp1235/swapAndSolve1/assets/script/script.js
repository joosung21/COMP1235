function getEmail() {
  let email;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  while (true) {
    email = prompt("Enter your email to subscribe:");

    if (email === null) {
      alert("Subscription canceled.");
      return;
    }

    if (emailRegex.test(email)) {
      alert("Thank you for subscribing!");
      return;
    } else {
      alert("Invalid email. Please try again.");
    }
  }
}
