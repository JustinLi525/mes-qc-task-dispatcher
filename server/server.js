const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

const dispatchRules = [];
app.post('/api/rules', (req, res) => {
    dispatchRules.push(req.body);
    res.status(201).send('Rule added.');
});

app.get('/api/rules', (req, res) => {
    res.json(dispatchRules);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
