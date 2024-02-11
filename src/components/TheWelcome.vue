<script setup>

import { ref } from 'vue';
import {run} from '@/utils/api'

const API_TOKEN = '8O-At8V_Yp0qHQ3O4ZGBt8nLj0t4ySLvRgZ7I75o';

// Reactive variable to hold the response
const response = ref(null);

// Function to handle user input and generate AI response
async function generateResponse(prompt) {
  const model = "@hf/thebloke/llamaguard-7b-awq";
  const input = {
    messages: [
      {
        role: "system",
        content: prompt,
      }
    ]
  };
  try {
    const responseData = await run(model, input, API_TOKEN);
    response.value = responseData; // Update the response variable
    console.log(response); // Handle the response as needed
  } catch (error) {
    console.error("Error generating response:", error);
    // Optionally, display error message to users
    response.value = { error: 'An error occurred while generating the response.' };
  }
}

// Example user prompt
const userPrompt = ref("");

// Method to handle user input submission
const handleUserInput = async () => {
  if (userPrompt.value.trim() !== "") {
    await generateResponse(userPrompt.value.trim());
    // Optionally, clear the input field after submission
    userPrompt.value = "";
  }
};
</script>


  <template>
    <div>
      <input type="text" v-model="userPrompt" @keyup.enter="handleUserInput" placeholder="Enter your prompt">
      <button @click="handleUserInput">Submit</button>
  
      <!-- Display the response -->
      <div v-if="response">
        <p>Response:</p>
        <pre>{{ response }}</pre>
      </div>
    </div>
  </template>


