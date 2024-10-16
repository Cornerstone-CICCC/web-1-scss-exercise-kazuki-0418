const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// 静的ファイルのルートディレクトリを'src'に設定
app.use(express.static("src"));

// ルートURLにアクセスした時、src/index.htmlを返す
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
