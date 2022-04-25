import app from "./app.js";

const port = app.get('port')

app.get('/', (req, res) => res.send('Server running'));

app.listen(port, () => console.log(`The server is running on port: ${port}`))