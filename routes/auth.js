/*
    Rutas de usuarios /auth
    host + /api/auth
*/
const { Router } = require("express");
const router = Router();
const { fieldValidator } = require("../middlewares/fieldValidator");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");
const { check } = require("express-validator");

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio.").not().isEmpty(),
    check("email", "El email es obligatorio.").isEmail(),
    check("password", "El password debe de ser de 6 caracteres.").isLength({
      min: 6,
    }),
    fieldValidator,
  ],
  crearUsuario
);

router.post(
  "/",
  [
    check("email", "El email es obligatorio.").isEmail(),
    check("password", "El password debe de ser obligatorio.").not().isEmpty(),
    fieldValidator,
  ],
  loginUsuario
);

router.get("/renew", revalidarToken);

module.exports = router;
