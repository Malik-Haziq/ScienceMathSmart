$("#myButton").venomButton({
  phone: "+923204694069",
  popupMessage: "Hello, how can we help you?",
  message: "",
  showPopup: true,
  position: "right",
  linkButton: false,
  showOnIE: false,
  headerTitle: "Welcome!",
  headerColor: "#25d366",
  backgroundColor: "#25d366",
  buttonImage: '<img src="./whatsapp-click-to-chat/whatsapp.svg" />',
  size: "50px",
});

AOS.init({
  // delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
});
