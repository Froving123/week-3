// routes/games.js
const gamesRouter = require("express").Router(); // Создали роутер
const { sendAllGames, deleteGame, addGameController } = require('../controllers/games');
const { getAllGames } = require('../middlewares/games')

gamesRouter.get("/games", sendAllGames, getAllGames)
gamesRouter.delete("/games/:id", deleteGame, getAllGames);
gamesRouter.post("/games", addGameController, getAllGames)

module.exports = gamesRouter;