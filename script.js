window.addEventListener("afterprint", (event) => {
    console.log("After print");
});



 window.onafterprint = (event) => {
    console.log("After print");
  };


window.alert("Hello world!");
alert("Hello world!");

window.onappinstalled = () => {
  console.log("Thank you for installing our app!");
};


window.addEventListener("appinstalled", () => {
  console.log("Thank you for installing our app!");
});

