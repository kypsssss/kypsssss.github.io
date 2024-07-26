function h(e) {
    e.preventDefault(); // Prevent default behavior of the event
    window.removeEventListener("touchstart", h, null); // Remove the event listener for touchstart
    window.removeEventListener("click", h, null); // Remove the event listener for click

    // Create a new Audio object and load the specified file
    const t = new Audio("sounds/kyps.mp3");
    
    // Remove the element with class 'before
