import * as tuitsDao from './tuits-dao.js'


const createTuit = async (req, res) => {
    const inputTuit = req.body;
    const defaultTuit =     {
        "topic": "Space", "username": "SpaceX",
        "handle": "@spacex", "time": "2h", "image": "nasa.jpg",
        "title": "SpaceX's Mission",
        "tuit": "",
        "liked": false, "likes": 0, "replies": 0, "retuits": 0,
        "dislikes": 0, "disliked": false
    };

    const newTuit = {
        ...defaultTuit,
        ...inputTuit,
    }
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
};


const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates)
    res.json(status);
}
const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.json(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
