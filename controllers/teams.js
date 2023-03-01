const Team = require("../models/Teams");

const getAllTeams = async (req, res) => {
    try {
        const team = await Team.find();
        res.status(200).json(team);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};

const createTeam = async (req, res) => {
    console.log('in controller', req.file)
    const { teamname } = req.body;
    const { file } = req;
    try {
        const newTeam = await Team.create({ teamname, image: file.publicUrl });
        res.status(201).json(newTeam);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};


const getSingleTeam = async (req, res) => {
    const { id } = req.params;
    try {
        const team = await Team.findById(id);
        res.status(200).json(team);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};

const updateTeam = async (req, res) => {
    const { id } = req.params;
    const { teamname } = req.body;
    try {
        const updateTeam = await Team.findByIdAndUpdate(id, { teamname },
            { new: true });
        res.status(200).json(updateTeam);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};

const deleteTeam = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTeam = await Team.findByIdAndDelete(id);
        res.status(200).send(`The Team ${deletedTeam._id} has been deleted.`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}
    ;

module.exports = {
    getAllTeams,
    createTeam,
    getSingleTeam,
    updateTeam,
    deleteTeam,
};