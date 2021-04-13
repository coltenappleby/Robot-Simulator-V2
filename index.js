document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!

  // Effectively Global Variables
  const movesContainer = document.querySelector("ul#moves-container")
  const moveButton = document.querySelector('button#move-button')

  document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
      dir = event.key.slice(5).toLocaleLowerCase()
      li = document.createElement("li")
      li.textContent = dir
      movesContainer.append(li)
    }
  })

  //Move Button
 
  moveButton.addEventListener('click', event => {
    const nextMoveLi = movesContainer.querySelector('li')

    move(nextMoveLi.textContent)

    nextMoveLi.remove()

    console.log(nextMoveLi)
  })

  // Delete a Move

  movesContainer.addEventListener("click", event => {

      if (event.target.tagName === "LI" ){
        event.target.remove()
      }


  })

  
});
