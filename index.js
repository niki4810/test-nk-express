const express = require('express')
const app = express()
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/i18n/api/v2/combination/translationsAndPattern', function requestHandler(req, res) {
    res.json({message: "Its Working!!!"})
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
