/*
    Rutas de usuarios /events
    host + /api/events
*/
const { Router } = require("express");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");
const { validarJWT } = require("../middlewares/validarJWT");
const { check } = require("express-validator");
const { fieldValidator } = require("../middlewares/fieldValidator");
const { isDate } = require("../helpers/isDate");

const router = Router();

router.use(validarJWT);

//* Get events
router.get("/", getEvents);

//* Crear event
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio.").not().isEmpty(),
    check("start", "Fecha de inicio es obligatorio.").custom(isDate),
    check("end", "Fecha de finalizacion es obligatorio.").custom(isDate),

    fieldValidator,
  ],
  createEvent
);

//* update event
router.put("/:id", updateEvent);

//* delete event
router.delete("/:id", deleteEvent);

module.exports = router;
