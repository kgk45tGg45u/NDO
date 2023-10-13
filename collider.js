document.addEventListener("DOMContentLoaded", function() {
  // Your JavaScript code here
  let collapseContent = document.getElementsByClassName("coll-content-1")[0];
  // Collapse Header (toggle button)
  let collapseHeader = document.getElementsByClassName("dropdowna")[0];
  collapseContent.style.visibility = "hidden";

  // Custom JavaScript (You can Implement it in a better way!) (ES6)
  // On Click Event the Header
  collapseHeader.addEventListener("click", () => {
    // For Toggling we need to know the current state of the collapse then change it
    if (collapseContent.style.visibility === "hidden") {
      // Collapse is already hidden, then show it
      collapseContent.style.visibility = "visible";
      collapseContent.style.opacity = "1";
    } else {
      // Else, hide the collapse
      collapseContent.style.visibility = "hidden";
      collapseContent.style.opacity = "0";
    }
  });
});
