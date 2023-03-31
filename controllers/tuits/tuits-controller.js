import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const inputTuit = req.body;
    const defaultTuit =     {
        "_id": "123", "topic": "Space", "username": "SpaceX",
        "handle": "@spacex", "time": "2h", "image": "nasa.jpg",
        "title": "SpaceX's Mission",
        "tuit": "",
        "liked": false, "likes": 0, "replies": 0, "retuits": 0, "dislikes": 0, "disliked": false
    };

    const newTuit = {
        ...defaultTuit,
        ...inputTuit,
        _id: (new Date()).getTime()+''
    }
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits  = (req, res) => res.json(tuits)

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}
const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
