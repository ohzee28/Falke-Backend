const express = require('express');
const router = express.Router();
const firebaseUploader = require("../middlewares/upload");

const {
    getAllTeams,
    getSingleTeam,
    createTeam,
    updateTeam,
    deleteTeam,
} = require("../controllers/teams");

router.route("/teams").get(getAllTeams).post(firebaseUploader.single("image"), createTeam);
router
    .route("/teams/:id")
    .get(getSingleTeam)
    .put(firebaseUploader.single("image"), updateTeam)
    .delete(deleteTeam);

module.exports = router;