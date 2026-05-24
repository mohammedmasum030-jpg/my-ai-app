const API_KEY = "AIzaSyA6GDfRNIE92CsjqMWvQdh5-vES4D_IX2k ";

async function send() {

  let input = document.getElementById("input").value;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: input
              }
            ]
          }
        ]
      })
    }
  );

  const data = await response.json();

  console.log(data);

  let reply =
    data.candidates[0].content.parts[0].text;

  document.getElementById("chat").innerHTML +=
    "<br>AI: " + reply;
}