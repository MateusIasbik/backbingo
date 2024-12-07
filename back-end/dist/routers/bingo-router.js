"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var bingo_controller_1 = require("../controllers/bingo-controller");
var bingoRouter = (0, express_1.Router)();
bingoRouter.get("/games/:id", bingo_controller_1.getBingoGame);
bingoRouter.post("/games/start", bingo_controller_1.startNewBingoGame);
bingoRouter.patch("/games/number/:id", bingo_controller_1.getNextNumberForBingoGame);
bingoRouter.patch("/games/finish/:id", bingo_controller_1.finishBingoGame);
exports.default = bingoRouter;
