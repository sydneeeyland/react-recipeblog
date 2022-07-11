const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.port || 4001;

module.exports = {
  express,
  dotenv,
  port,
};
