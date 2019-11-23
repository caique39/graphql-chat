const messages = [{ text: "Opa", sender: "Einstein" }];

function printMessages() {
  const messageArea = document.querySelector("#message-area");

  for (let message of messages) {
    const { sender, text } = message;

    const messageTemplate = `
    <div class="message">
      <span class="message__sender">${sender}</span>
      <h3 class="message_text">${text}</h3>
    </div>`;

    messageArea.insertAdjacentHTML("beforeend", messageTemplate);
  }
}
