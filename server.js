const express = require("express");
const morgan = require("morgan");

const env = {
  PORT: process.env.PORT || 3000,
};

const app = express();

app.use(morgan("dev"));

app.use(
  express.static(__dirname + "/static", {
    extensions: ["html"],

    // disable cache
    cacheControl: false,
    etag: false,
    lastModified: false,
  })
);

app.listen(env.PORT, () => {
  console.log(`server started @ ${env.PORT}`);
});
