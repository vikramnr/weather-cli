const axios = require("axios");

module.exports = async () => {
  const results = await axios({ method: "get", url: "https://freegeoip.app/json/" });
  const { city, region_name } = results.data;
  return `${city}, ${region_name}`;
};
