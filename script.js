const quotes = [
    "You are capable of amazing things.",
    "Don’t be afraid to dream big.",
    "Believe you can and you're halfway there.",
    "Make today so awesome yesterday gets jealous.",
    "You glow differently when you're confident 💫"
  ];
  document.getElementById("newQuote").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").textContent = quotes[randomIndex];
  });