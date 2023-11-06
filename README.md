# Rock, Paper, Scissors

- Play live at: https://ziaxgit.github.io/rock-paper-scissors
- A basic game of 5 rounds. With added animations and sound effects.
  Randomised messages declaring the winner/loser with added video and audio accordingly. 

## Some new things I learned in this project

- To autoplay a video on mobile devices without swithcing to fullscreen you can use `<video autoplay webkit-playsinline playsinline>`
- To get the value entered inside an input field `document.querySelector("input").value`
- Use `keyup` to check the keyboard keys being pressed
- To enable a mouse click function by pressing the Enter key you can use `
<input onkeydown = "if (event.keyCode == 13) document.getElementById('myBtn').click()"/>`
- You can use ternary statements inside a template literal. E.g. ``Point goes to ${value ? value : "Stranger"}!``
- Using style `display: none;` will make a div invisible while affecting the margin/padding of other elements. To set it visibile use `display: block/flex`. Using `visibility: hidden` however, only makes the div invisible and keeps other elements margin intact.  
- Use `setTimeout` to disable a button till it can be clicked again. This is useful if you don't want users to spam clicking a button.

At first, I had difficulty understanding the Document Object Model (DOM). However, doing this project made it easy to grasp the concepts. 

