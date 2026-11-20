
/* Name : Ratna Sakshi Kushnoor, Date: Nov, 20, 2026 */

// Step 1: Select Elements
const quote = document.querySelector("#quote");
const title = document.querySelector("#title");
const buttons = document.querySelector("#buttons");

// Step 2: Create Moods Object
const moods = {
    happy: {
        name: "Happy",
        bg: "#ffec80",
        text: "#2a5657",
        message: "Warm smiles and the sun kissses!"
    },

    calm: {
        name: "Calm",
        bg: "#b1fff2",
        text: "#264653",
        message: "Take a deep breath and enjoy the moment."
    },

    angry: {
        name: "Angry",
        bg: "#FF6347",
        text: "#FFFFFF",
        message: "Its Okay to feel angry. Close your eyes and take 3 deep breaths!."
    },

    sleepy: {
        name: "Sleepy",
        bg: "#6A5ACD",
        text: "#FFFFFF",
        message: "Sleep well and wake up refreshed. Letting your mind and body truly unplug is the best way to reset for tomorrow."
    }
};

// Step 3: Create the function
function handleMoodButtonClick(moodClick) {

    // A. Check which element was clicked
    if (moodClick.target.classList.contains("mood-btn")) {

        // B. Get the selected mood
        const mood = moodClick.target.getAttribute("data-mood");

        // C. Find the mood settings
        const moodSettings = moods[mood];

        // Step 3b: Update Page Information

        // Change background color
        document.body.style.backgroundColor = moodSettings.bg;

        // Change text color of the body
        document.body.style.color = moodSettings.text;

        // Update the message
        quote.textContent = moodSettings.message;

        // Change the page title
        title.textContent = moodSettings.name;

        // Test the selected mood
        console.log("Mood selected:", mood);
        console.log("Mood settings:", moodSettings);
    }
}

// Step 4: Event Listener
buttons.addEventListener("click", handleMoodButtonClick);
