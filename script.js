src =
  "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.9/fullpage.min.js";
integrity =
  "sha512-Gx/C4x1qubng2MWpJIxTPuWch9O88dhFFfpIl3WlqH0jPHtCiNdYsmJBFX0q5gIzFHmwkPzzYTlZC/Q7zgbwCw==";
crossorigin = "anonymous";

new fullpage("#fullPage", {
  autoScrolling: true,
  navigation: true,
  anchors: [
    "Introduction",
    "Potstickers",
    "Spicy_Szechuan_Eggplant",
    "Red_Braised_Pork_Belly",
    "Sweet_Fermented_Rice",
    "Contact",
  ],
  navigationTooltips: [
    "Introduction",
    "Potstickers",
    "Spicy Szechuan Eggplant",
    "Red Braised Pork Belly",
    "Sweet Fermented Rice",
    "Contact",
  ],
  showActiveTooltip: true,
  scrollingSpeed: 1000,
  controlArrows: false,
  slidesNavigation: true,
});
