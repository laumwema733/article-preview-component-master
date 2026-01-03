"use strict";

document.addEventListener("click", (e) => {
  if (e.target.id === "share--icon") {
    document.getElementById("social--icons").classList.toggle("hidden");
  } else {
    document.getElementById("social--icons").classList.add("hidden");
  }
});
