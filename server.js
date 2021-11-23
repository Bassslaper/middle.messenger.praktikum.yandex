const express = require('express');
const path = require('path');

app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})