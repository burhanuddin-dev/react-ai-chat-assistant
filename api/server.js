const URL = `https://api.groq.com/openai/v1/chat/completions`;

export default async function GetResponseFromAPI(userMessage) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "user",
            content: userMessage,
          },
        ],
      }),
    });

    const data = await response.json();

    return data.choices[0].message;
  } catch (error) {
    console.log(error);
  }
}
