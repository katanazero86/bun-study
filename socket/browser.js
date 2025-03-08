// browser.js
const socket = new WebSocket("ws://localhost:3000/chat");

socket.addEventListener("message", (event) => {
  console.log(event.data);
});

socket.addEventListener("open", (e) => {
  console.log("open!!");
  socket.send("안녕? 난 닉 워커라고해!");
});

const closeBtn = document.querySelector("#close");
if (closeBtn)
  closeBtn.addEventListener("click", () => {
    socket.close(1000, "Bye");
  });
