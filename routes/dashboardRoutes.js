const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const { getSummary } = require("../controllers/dashboardController");

router.get("/", auth, role("analyst", "admin"), getSummary);

module.exports = router;