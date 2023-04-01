document.addEventListener("DOMContentLoaded", () => {
    const sceneText = document.getElementById("scene-text");
    const inputText = document.getElementById("input-text");
    const submitButton = document.getElementById("submit-button");

    let playerName = "";
    let currentScene = "start";

    function updateScene() {
        inputText.value = "";

        switch (currentScene) {
            case "start":
                sceneText.textContent = "Enter your name:";
                break;
            case "first":
                sceneText.textContent = `Welcome, ${playerName}! You find yourself at the entrance of a dark cave. Do you want to 'enter' the cave or 'leave'?`;
                break;
            case "second":
                sceneText.textContent = "You are inside the cave and see two paths. One leads to the left and the other to the right. Which path do you choose? ('left' or 'right')";
                break;
            case "left":
                sceneText.textContent = "You follow the left path and find yourself in a room with a mysterious door. To open the door, you must solve a riddle. Do you want to 'solve' the riddle or 'return' to the previous room?";
                break;
            case "solve":
                sceneText.textContent = "The riddle is: 'What has keys but can't open locks?' Type your answer:";
                break;
            case "solved":
                sceneText.textContent = "You solved the riddle, and the door opens to reveal a room filled with treasure! Congratulations, you found the treasure! The adventure ends here.";
                currentScene = "end";
                break;
            case "return":
                sceneText.textContent = "You decide to return to the previous room. Which path do you choose now? ('left' or 'right')";
                currentScene = "second";
                break;
            case "right":
                sceneText.textContent = "You follow the right path and find yourself in a room with a sleeping dragon. You need to escape without waking the dragon. Do you want to 'sneak' past the dragon or 'run' away?";
                break;
            case "sneak":
                sceneText.textContent = "You carefully sneak past the sleeping dragon and find another room filled with treasure! Congratulations, you found the treasure and escaped the dragon! The adventure ends here.";
                currentScene = "end";
                break;
            case "run":
                sceneText.textContent = "You decide to run, but the noise wakes the dragon. The dragon chases you, and you barely escape the cave. The adventure ends here.";
                currentScene = "end";
                break;
            default:
                break;
        }
    }

    submitButton.addEventListener("click", () => {
        const userInput = inputText.value.toLowerCase().trim();

        switch (currentScene) {
            case "start":
                playerName = userInput;
                currentScene = "first";
                break;
            case "first":
                if (userInput === "enter") {
                    currentScene = "second";
                } else if (userInput === "leave") {
                    sceneText.textContent = "You decide to leave the cave. The adventure ends here!";
                    currentScene = "end";
                } else {
                    alert("Invalid choice. Please try again.");
                }
                break;
            case "second":
                if (userInput === "left") {
                    currentScene = "left";
                } else if (userInput === "right") {
                    currentScene = "right";
                } else {
                    alert("Invalid choice. Please try again.");
                }
                break;
            case "left":
                if (userInput === "solve") {
                    currentScene = "solve";
                } else if (userInput === "return") {
                    currentScene = "return";
                } else {
                    alert("Invalid choice. Please try again.");
                }
                break;
                case "solve":
                    if (userInput === "piano") {
                        currentScene = "solved";
                    } else {
                        alert("Incorrect answer. Please try again.");
                    }
                    break;
                case "right":
                    if (userInput === "sneak") {
                        currentScene = "sneak";
                    } else if (userInput === "run") {
                        currentScene = "run";
                    } else {
                        alert("Invalid choice. Please try again.");
                    }
                    break;
                default:
                    break;
                }
                
                if (currentScene !== "end") {
                    updateScene();
                }
                });
                
                updateScene();
                });
                
