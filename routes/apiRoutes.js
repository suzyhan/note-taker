const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ("fs");

// Create GET request for reading and returning retrieved notes as JSON
router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));
    res.json(dbJson);
});

// Create POST request to receive and save new note
router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(),
    };
    dbJson.push(newNote);
    fs.writeFileSync('db/db.json',JSON.stringify(dbJson));
    res.json(dbJson);
});


module.exports = router;