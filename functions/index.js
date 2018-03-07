const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const urlencode = require('urlencode');

const visionkey = functions.config().vision.key;
const recipekey = functions.config().recipe.key;
// Express 앱 객체 생성
const app = express();

// 미들웨어 등록
app.use(bodyParser.json());
app.use(cors({ origin: true }));

// const myToken = functions.config().github.token;
// 라우터 핸들러 등록

const searchtitleUrl = `http://211.237.50.150:7080/openapi/${recipekey}/json/Grid_20150827000000000227_1/1/5?IRDNT_NM=`;

const detailrecipeUrl = `http://211.237.50.150:7080/openapi/${recipekey}/json/Grid_20150827000000000228_1/1/20?RECIPE_ID=`;

const baseRecipeUrl = `http://211.237.50.150:7080/openapi/${recipekey}/json/Grid_20150827000000000227_1/1/30?RECIPE_ID=`;

app.get('/searchtitle/:id', (req, res) => {
  const requestDict = req.params.id;
  const para = urlencode(requestDict);
  console.log(requestDict, para);

  return fetch(searchtitleUrl + para, {
    method: 'GET',
  }).then(respon => respon.json()).then((data) => {
    console.log(data);
    res.send(data);
  });
});
app.get('/detailrecipe/:id', (req, res) => {
  const recipeid = req.params.id;
  const para = urlencode(recipeid);
  return fetch(detailrecipeUrl + para, {
    method: 'GET',
  }).then(respon => respon.json()).then((respon) => {
    res.send(respon);
  });
});
app.get('/baserecipe/:id', (req, res) => {
  const recipeid = req.params.id;
  const para = urlencode(recipeid);
  return fetch(baseRecipeUrl + para, {
    method: 'GET',
  }).then(respon => respon.json()).then((data) => {
    res.send(data);
  });
});
exports.recipeseacher = functions.https.onRequest(app);

// googlevisionAPI

const appvision = express();

appvision.use(bodyParser.json());
appvision.use(cors({ origin: true }));

const visionUrl = `https://vision.googleapis.com/v1/images:annotate?key=${visionkey}`;
const tranlatUrl = `https://translation.googleapis.com/language/translate/v2?key=${visionkey}`;
appvision.post('/', (req, res) => {
  console.log(req.body)
  return fetch(visionUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body),
  }).then(respon => respon.json()).then((respon) => {
    res.send(respon);
  });
});
appvision.post('/translate/', (req, res) => {
  console.log(req.body)
  return fetch(tranlatUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: req.body,
  }).then(respon => respon.json()).then((respon) => {
    res.send(respon);
  });
});
exports.vision = functions.https.onRequest(appvision);
