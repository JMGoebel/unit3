var field = document.querySelector("input");

field.addEventListener("keydown", function(event) {
  let code = event.code;
  if ( (code === "KeyQ" || code === "KeyW" || code === "KeyX") ){
    event.preventDefault();
  }
})