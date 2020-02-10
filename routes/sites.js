const express = require("express");
const router = express.Router();

// ==========================================
// ROUTES
// ==========================================

router.get("/", function(req, res){
    console.log("Loading INDEX");
    res.render("index");
});

router.get("/checkers", function(req, res){
    console.log("Loading CHECKERS");
    res.render("checkers");
});

router.get("/sudoku", function(req, res){
    console.log("Loading SUDOKU");
    res.render("sudoku");
});

router.get("/minesweeper", function(req, res){
    console.log("Loading MINESWEEPER");
    res.render("minesweeper");
});

router.get("/snake", function(req, res){
    console.log("Loading SNAKE");
    res.render("snake");
});

module.exports = router;