const fs = require('fs/promises');
const path = require('path');

const pathContacts = path.join(__dirname, '../../data/categories.json');

console.log(pathContacts);

const ctrlCategories = async (req, res) => {
  const data = await fs.readFile(pathContacts);
  const result = JSON.parse(data);
  res.json({
    category: result.sort(),
  });
};

module.exports = ctrlCategories;
