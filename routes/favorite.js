const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers/favoriteController");

router.get("/favorites.json", favoriteController.favorites_list);
router.post("/favorites.json", favoriteController.favorite_create);
router.delete("/favorites/:id.json", favoriteController.favorite_delete);

module.exports = router;
