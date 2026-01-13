# tik-tak-toe-game
A responsive and interactive Tic Tac Toe web game built using HTML, CSS, and JavaScript. This project implements core game logic, dynamic UI updates, and user interaction handling, making it an excellent beginner-to-intermediate frontend development project.

  Project Overview

This application allows two players to play Tic Tac Toe on a 3×3 grid. Players take turns marking X and O, with the game automatically detecting winning combinations and draw conditions. The UI updates dynamically based on user actions, and players can reset or start a new game at any time.

   Features

Two-player turn-based gameplay (X and O)
Interactive 3×3 game board
Real-time win detection using predefined patterns
Draw detection when all moves are completed
Winner and draw message display
Reset Game and New Game functionality
Button disabling to prevent invalid moves
Responsive and clean UI design

   Technologies Used

HTML5 – Structure and layout
CSS3 – Styling, Flexbox layout, responsive design
JavaScript (ES6) – Game logic, DOM manipulation, event handling

   Game Logic Explanation

The game tracks the current player's turn using a boolean flag.
Winning combinations are stored in an array of index patterns.
After each move
The game checks for a winner.
If all boxes are filled and no winner is found, a draw is declared.
Buttons are disabled after being clicked to prevent overwriting moves.
The game can be restarted using Reset or New Game buttons.

📂 Project Structure
Tic-Tac-Toe/
│
├── index.html      
├── style.css       
├── app.js          
└── README.md      

   Learning Outcomes

Strengthened understanding of JavaScript logic and conditions
Hands-on experience with DOM manipulation
Improved CSS Flexbox and responsive design skills
Practical exposure to game state management

   Future Enhancements

Single-player mode with AI
Score tracking system
Animations and sound effects
Mobile-first UI improvements
