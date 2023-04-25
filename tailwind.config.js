/** @type {import('tailwindcss').Config} */
(
  module.exports = {
    content: [
      "./components/home/index.html",
      "./components/fee-structures/uk-fee-structure.html",
      "./components/fee-structures/us-fee-structure.html",
      "./components/curriculum/math.html",
      "./components/curriculum/physics.html",
      "./components/curriculum/science.html",
      "./components/curriculum/uk-curriculum.html",
      "./components/curriculum/us-curriculum.html",
      "./components/contact-us/contact.html",
      "./components/footer/footer.html",
      "./components/navigation/navigation.html",
      "./components/Trial/trial.html",
    ],
    theme: {
      extend: {},
      fontFamily: {
        "PT-serif": ['"PT serif"', "serif"],
      },
    },
    plugins: [],
  }
);
