const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const controller = require("../controllers/recordController");

router.post("/", auth, role("admin"), controller.createRecord);
router.get("/", auth, controller.getRecords);
router.put("/:id", auth, role("admin"), controller.updateRecord);
router.delete("/:id", auth, role("admin"), controller.deleteRecord);

module.exports = router;