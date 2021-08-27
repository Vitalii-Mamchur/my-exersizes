const express = require("express");

const { contacts } = require("../../controllers");

const router = express.Router();

console.log(contacts);

router.get("/", contacts.getAll);

router.get("/:contactId", contacts.getById);

router.post("/", contacts.add);

router.delete("/:contactId", contacts.remove);

router.patch("/:contactId", contacts.update);

module.exports = router;
