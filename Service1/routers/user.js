const { usersController } = require("../controllers");

const router = require("express").Router();


router.get("/users", usersController.getData);

module.exports = router;