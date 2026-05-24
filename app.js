async function send() {
  let input = document.getElementById("input").value;
  let chat = document.getElementById("chat");

  chat.innerHTML += "You: " + input + "<br>";

  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: input }] }]
    })
  });

  const data = await response.json();

  let reply = data.candidates[0].content.parts[0].text;

  chat.innerHTML += "AI: " + reply + "<br>";
}
