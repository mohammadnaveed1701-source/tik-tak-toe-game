🎮 Tic Tac Toe Game

A responsive and interactive Tic Tac Toe web game built using HTML, CSS, and JavaScript. This mini project demonstrates core frontend development concepts such as DOM manipulation, event handling, and game state management, making it ideal for beginner to intermediate developers.

📌 Project Overview

This application allows two players to play Tic Tac Toe on a 3×3 grid. Players take turns marking X and O. The game automatically detects winning combinations and draw conditions, while the UI updates dynamically based on user interactions.

Players can reset the game or start a new match at any time.

✨ Features

Two-player, turn-based gameplay (X and O)
Interactive 3×3 game board
Real-time win detection using predefined patterns
Automatic draw detection
Winner and draw message display
Reset Game and New Game functionality
Button disabling to prevent invalid moves
Clean, responsive, and user-friendly UI

🛠️ Technologies Used

HTML5 – Structure and layout
CSS3 – Styling, Flexbox layout, responsive design
JavaScript (ES6) – Game logic, DOM manipulation, event handling

⚙️ Game Logic Explanation

The current player is tracked using a boolean flag.
All winning combinations are stored as predefined index patterns.
After each move:
The game checks for a winning pattern.
If all cells are filled without a winner, a draw is declared.
Once a box is clicked, it is disabled to prevent overwriting moves.
The game can be restarted using Reset or New Game buttons.

📂 Project Structure
Tic-Tac-Toe/
│
├── index.html      # Game structure
├── style.css       # Styling and layout
├── app.js          # Game logic
└── README.md       # Project documentation

🎯 Learning Outcomes

Strengthened understanding of JavaScript logic and conditional statements
Hands-on experience with DOM manipulation and event handling
Improved knowledge of CSS Flexbox and responsive UI design
Practical exposure to managing game state in frontend applications

🚀 Future Enhancements

Single-player mode with AI (computer opponent)
Score tracking system
Animations and sound effects
Mobile-first UI improvements

📌 Conclusion

This Tic Tac Toe mini project is a solid demonstration of frontend fundamentals and is well-suited for GitHub portfolios, resumes, and internship applications. It highlights clean logic, interactive UI behavior, and good project structuring practices.