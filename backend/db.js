const fs = require('fs');
const DB_FILE = './analytics.json';

function saveAnalytics(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}
function loadAnalytics() {
  if (!fs.existsSync(DB_FILE)) return [];
  return JSON.parse(fs.readFileSync(DB_FILE));
}
module.exports = { saveAnalytics, loadAnalytics };
