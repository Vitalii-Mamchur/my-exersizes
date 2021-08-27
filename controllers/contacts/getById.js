const data = require("../../model");

const getById = async (req, res) => {
  const { id } = req.params;
  const contacts = await data.getById(id);
  res.json({
    status: "success",
    code: 200,
    data: contacts,
  });
};

module.exports = getById;
