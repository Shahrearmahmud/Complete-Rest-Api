const { getAllUsers } = require("../controllers/users.controller");

const router= require("express").Router()

router.get("/users",getAllUsers)


module.exports = router;