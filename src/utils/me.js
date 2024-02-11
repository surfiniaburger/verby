async function run(model, input) {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/03ca965e895ced6f7d7f1ec8e27c8cba/ai/run/${model}`,
      {
        headers: { Authorization: "Bearer 8O-At8V_Yp0qHQ3O4ZGBt8nLj0t4ySLvRgZ7I75o" },
        method: "POST",
        body: JSON.stringify(input),
      }
    );
    const result = await response.json();
    return result;
  }
  
  
  run("@hf/thebloke/llamaguard-7b-awq", {
    messages: [
      {
        role: "system",
        content: "You are a friendly assistan that helps write stories",
      },
      {
        role: "user",
        content:
          "Write a short story about a llama that goes on a journey to find an orange cloud ",
      },
    ],
  }).then((response) => {
    console.log(JSON.stringify(response));
  });