/*
    Rutas de usuarios /auth
    host + /api/auth
*/
const { Router } = require("express");
const router = Router();
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");
const { check } = require("express-validator");

router.post(
  "/new",
  [check("name", "El nombre es obligatorio.").not().isEmpty()],
  crearUsuario
);

router.post("/", loginUsuario);

router.get("/renew", revalidarToken);

module.exports = router;
