const fetch = require("node-fetch");

exports.volume_search = async function (req, res, next) {
  const search = req.query.q;
  const limit = req.query.maxResults;
  const key = process.env.GOOGLE_API_KEY;
  const host = process.env.GOOGLE_API_HOST;

  const response = await fetch(
    `${host}/volumes?q=${search}&maxResults=${limit}&key=${key}`
  );

  if (!response.ok) {
    next("error");
  }

  const data = await response.json();
  res.json(data);
};
