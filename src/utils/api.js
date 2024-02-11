export async function run(model, input, apiToken) {
    try{
     const response = await fetch(
       `http://localhost:3000/api/accounts/03ca965e895ced6f7d7f1ec8e27c8cba/ai/run/${model}`,
       {
         method: "POST",
         headers: {
           "Authorization": `Bearer ${apiToken}`,
           "Content-Type": "application/json"
        },
        
         body: JSON.stringify(input),
       }
     );

    // const response = {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json', Authorization: 'apiToken'},
    //     body: '{"actions":[{"id":"browser_check","value":"on"}],"priority":1,"status":"active","targets":[{"constraint":{"operator":"matches","value":"*example.com/images/*"},"target":"url"}]}'
    //   };
      
    //   fetch('https://api.cloudflare.com/client/v4/accounts/03ca965e895ced6f7d7f1ec8e27c8cba/ai/run/${model}', response)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

    // if (!response.ok) {
    //     throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    //   }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching dat:", error);
    throw error; 
  }
  }
  

  