const { response } = require("express");
const Usuario = require("../models/Usuario");

const crearUsuario = async (req, res = response) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json({
      ok: true,
      msg: "Usuario registrado!",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error al registro del usuario.",
    });
  }
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
