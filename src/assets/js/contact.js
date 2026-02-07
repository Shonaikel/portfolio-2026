
  const sendBtn = document.getElementById("sendBtn");

  sendBtn.addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!email || !message) {
      alert("Please fill all fields");
      return;
    }

    emailjs.send("SERVICE_ID", "TEMPLATE_ID", {
      email: email,
      message: message
    })
    .then(() => {
      alert("Message sent successfully 🚀");
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch((error) => {
      alert("Error sending message ❌");
      console.error(error);
    });
  });

