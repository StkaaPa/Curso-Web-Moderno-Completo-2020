const bodyParser = require("body-parser");
const express = require("express");
const app = express();

//* instanciar o midleware
app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const multer = require("multer");

//* personalizar a pasta onde são guardados os arquivos
const storage = multer.diskStorage({
  destination: function (rq, file, callback) {
    callback(null, './upload');
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("arquivo");

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.end("Ocorreu um Erro!!");
    }

    res.end("Concluído com Sucesso!");
  });
});
app.listen(8080, () => console.log("Executando....."));
