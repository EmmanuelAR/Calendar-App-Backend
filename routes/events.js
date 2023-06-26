const router = require("./auth");

//* Get events
router.get("/", getEventos);

//* Crear event
router.post("/", createEvent);

//* update event
router.put("/:id", updateEvent);

//* delete event
router.delete("/:id", deleteEvent);
