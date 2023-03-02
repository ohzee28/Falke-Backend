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
    const { teamname, websitekeys } = req.body;
    const { file } = req;
    console.log('req', req.body)
    try {
        if (file) {
            const newTeam = await Team.create({ teamname, image: file.publicUrl, websitekeys });
            return res.status(201).json(newTeam);
        } else {
            const newTeam = await Team.create({ teamname, websitekeys });
            return res.status(201).json(newTeam);
        }
        console.log(newTeam)
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
    console.log('test', req.body);
    const { id } = req.params;
    const { teamname, websitekeys } = req.body;
    try {
        const updateTeam = await Team.findByIdAndUpdate(id, { teamname, websitekeys },
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