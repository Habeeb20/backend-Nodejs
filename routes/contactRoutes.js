const express = require("express");

const router = express.Router();

const {getContacts} = require("../controller/contactController")
const {createContact} = require("../controller/contactController");
const {getContact} = require("../controller/contactController");
const {UpdateContact} = require("../controller/contactController");
const {deleteContact} = require("../controller/contactController")

router.route("/").get(getContacts);

router.route("/").post(createContact);


router.route("/:id").get(getContact);



router.route("/:id").put(UpdateContact)


router.route("/:id").delete(deleteContact)






module.exports = router;