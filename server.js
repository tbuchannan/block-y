const express = require('express');
const app = express();
const path = require('path');
const https = require('https');
const port = process.env.PORT || 3001;
// https://stackoverflow.com/a/37632484/3106398

app.use('/', express.static(`${__dirname}/client/build`));

app.get('/api/blockchain/:id',(req, res) => {
  let address = req.params.id;

  https.request(`https://blockchain.info/rawaddr/${address}`, (resp) =>{
    resp.pipe(res);
  }).on('error', e => res.sendStatus(500)).end();
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));