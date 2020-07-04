const eventController = require("./controller");
const router = require("express").Router();


router.post("/", eventController.addEvent)

router.get("/", eventController.getAllEvents)
module.exports = router;