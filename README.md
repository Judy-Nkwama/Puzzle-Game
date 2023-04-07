# 🧩 Puzzel Game Project Grp7

<img src="https://github.com/nazir20/Puzzle-Game/blob/main/frontend/public/logo.png" title="Puzzle" alt="Puzzle" width="150" height="150"/>&nbsp;
## 🧰 Languages & Tools

<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="React.js" alt="React.js" width="70" height="70"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/bootstrap/bootstrap-original.svg" title="Bootstrap" alt="Bootstrap" width="70" height="70"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" title="Node.js" alt="Node.js" width="70" height="70"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/heroku/heroku-original-wordmark.svg" title="HEROKU" alt="HEROKU" width="70" height="70"/>&nbsp;
- React.js for Frontend
- Node.js(Express.js) for Backend
- HEROKU for deployment
## Introduction

Within the scope of the project, you are expected to design a puzzle solving game. You should prepare a user interface (GUI) for the game. You can develop your project as a desktop application or web-based. The method to be used for puzzle piece matching must be a <b>Linked List Data Structure</b>. The requirements in the project are listed below:

### ⚙️ Requirements

- The image to be created in the puzzle must consist of 16 pieces. You should divide the uploaded image into 16 parts, four rows and four columns.
- Any picture/photo file will be read from the file or URL and printed on the screen.
- You should shuffle the image that you have divided into sixteen parts with the Suffle button you placed in the GUI.
- With the shuffle button, the user will continue to shuffle until at least one puzzle piece is in the right place.
- It should consist of 16 pieces of buttons created. By clicking the two buttons in sequence, you must swap the buttons
- The user will first click on the piece that needs to go (which he/she thinks is correct), and then click on the piece at the location he will go to, so that the pieces will move.
- Buttons placed in the right place should be locked. Subsequent position changes should not be allowed for correctly placed parts
- The id or the coordinate information of the parts will not be used in any way in checking whether the parts are in the right place. Instead, you should create a linked list for puzzle piece numbers 0-15 and check position from left to right. <b>Puzzle piece check will only be performed using linked list</b>
- The interface will have the highest score information. After the puzzle is completed, the score information will be written to the 'highest score.txt' document.
- You should design the game so that every correct move is +5 points and every wrong move is -10 points.
- After each move, the user should be able to see the standings on the interface.
- The 'enyuksekskor.txt' document should contain three information: username, number of moves and score.
- You must record the number of moves of the user throughout the game.
- When the puzzle image is uploaded, you must ask the user for a name to record. This name should be recorded in the score text document.
- Each time the game opens, the highest level in a part of the interface you designed, scores should be displayed in descending order.


### 🪙 UI Design

Design prototype: [https://balsamiq.cloud/s5vql3b/pwist2r/rB634]

### 🔖 Todoes

- Design the game's UI/UX [*@Asli*](https://github.com/AsliBozkurt/) :white_check_mark:
- Implement Asli's UI part1(Image selection, Cropping, Renderind ordered pzl on the screen) [*@Judy*](https://github.com/Judy-Nkwama/) :white_check_mark:
- Implement asli's UI part2(System default image selection screen) [*@Nazir20*](https://github.com/nazir20/) and [*@Asli*](https://github.com/AsliBozkurt/) :white_check_mark:
- Implement Game logic (Pzl blocks swapping, score incrementation or decreamentation, wining or losing) [*@Judy*](https://github.com/Judy-Nkwama/) :white_check_mark:
- Implement Game data (score, user info, best score..) reading and writing form .txt file [*@Nazir*](https://github.com/nazir20/) :white_check_mark:
- Work on game scenarios [*@Nazir*](https://github.com/nazir20/) :white_check_mark:
- Implement game levels [*@Judy*](https://github.com/Judy-Nkwama/) :white_check_mark:
- Prepare documentations [*@Asli*](https://github.com/AsliBozkurt/) :white_check_mark:
- DevOps with Heroku [*@Asli*](https://github.com/AsliBozkurt/) :hourglass_flowing_sand:

### Additional Ideas
- Game Over: the game starts with YY point. The user has to keep it > 0. if it's become 0, the game overs [*@Judy*](https://github.com/Judy-Nkwama/) :hourglass_flowing_sand:
- Level implementation: the game start with puzzel 4x4 (level 1), continues to 6x6, 8x8 ... for higher level [*@Judy*](https://github.com/Judy-Nkwama/) :white_check_mark:

### Deployment 

<img src="https://github.com/devicons/devicon/blob/master/icons/heroku/heroku-original-wordmark.svg" title="HEROKU" alt="HEROKU" width="90" height="90"/>&nbsp;

<hr>

### ⚙️ Run Locally
<a href="https://nodejs.org/en">
  <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" title="Node.js" alt="Node.js" width="30" height="30"/>&nbsp;
</a>
<b>Make sure that you've already installed Nodejs on your machine</b>
<br>

- Open your terminal & follow the steps as below
- Clone the project & change directory to the cloned repo
```bash
git clone https://github.com/nazir20/Puzzle-Game.git
cd Puzzle-Game
```

- change directory to backend folder inside the Puzzle Game, then install the required modules and as last run the backend

```bash
cd backend
npm i
npm start
```
- Open another terminal inside the Puzzle-Game Directory and then change directory to frontend. Then install the required modules and as last run the frontend

```bash
cd frontend
npm i
npm start
```

Open your favorite browser and search for the below url(Frontend runs on port 3000, backend runs on port 5000)
```bash
http://localhost:3000
```

And Now Enjoy the Game :)
