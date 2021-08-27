const data = require("../../model");

const getAll = async (__, res) => {
  const contacts = await data.listContacts();
  res.json({
    status: "success",
    code: 200,
    data: contacts,
  });
};

module.exports = getAll;
