const { response } = require("express");
const { validationResult } = require("express-validator");

const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body;

  res.status(201).json({
    ok: true,
    msg: "REGISTER",
    name,
    email,
    password,
  });
};

const loginUsuario = (req, res = response) => {
  const { email, password } = req.body;

  res.status(200).json({
    ok: true,
    msg: "LOGIN",
    email,
    password,
  });
};

const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: "TOKEN",
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
