const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const saucesControl = require("../controllers/sauce");

router.post("/", auth, multer, saucesControl.createSauce);
router.put("/:id", auth, multer, saucesControl.modifySauce);
router.delete("/:id", auth, multer, saucesControl.deleteSauce);
router.get("/:id", auth, saucesControl.oneSauce);
router.get("/", auth, saucesControl.allSauces);
router.post("/:id/like", auth, saucesControl.likeDislikeSauce);

module.exports = router;
