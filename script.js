window.addEventListener("afterprint", (event) => {
    console.log("After print");
});
window.onafterprint = (event) => {
    console.log("After print");
};

window.addEventListener("beforeprint", (event) => {
    console.log("Before print");
});

window.onbeforeprint = (event) => {
    console.log("Before print");
};


window.alert("Hello world!");
alert("Hello world!");

window.onappinstalled = () => {
  console.log("Thank you for installing our app!");
};


window.addEventListener("appinstalled", () => {
  console.log("Thank you for installing our app!");
});


// =====================================================
const beforeUnloadListener = (event) => {
    event.preventDefault();
    return (event.returnValue = "");
};

const nameInput = document.querySelector("#name");

nameInput.addEventListener("input", (event) => {
    if (event.target.value !== "") {
        addEventListener("beforeunload", beforeUnloadListener, { capture: true });
    } else {
        removeEventListener("beforeunload", beforeUnloadListener, {
        capture: true,
        });
    }
});
//====================================================





