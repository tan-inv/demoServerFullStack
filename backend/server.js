const express = require('express');
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = 5000;

app.use(cors());
app.use('/images', express.static(path.join(__dirname, '../frontend/public/assets')))


app.get('/api/message', (req, res) => {
    res.json({ message: "hello from the backend" })
})

app.get('/api/images', (req, res) => {
    res.json({
      images: [
        { id: 1, url: 'http://localhost:5000/images/image1.jpg' },
        { id: 2, url: 'http://localhost:5000/images/image2.jpg' },
      ],
    });
  });


app.listen(PORT, () => {
    console.log(`server running in http://localhost:${PORT}`);
})