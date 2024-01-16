document.addEventListener("DOMContentLoaded", function () {
    const showTextButton = document.getElementById("showTextButton");
    const textContainer = document.getElementById("TextContainer");
  
    showTextButton.addEventListener("click",async function () {
      // Fetch the JSON data
      const response = await fetch('neh.json')
      const data = await response.json()
          // Get a random text from the array (you can modify this logic as needed)
          
          // Display the text in the container
          textContainer.innerText = data.join("\n");
    });
  });
  
  