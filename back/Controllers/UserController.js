const User = require("../Services/UserServices");
const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");

const getallUsers = async (req, res) => {
  try {
    const result = await User.getallUsers();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getUserbyid = async (req, res) => {
  try {
    const result = await User.getUserbyid(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error });
  }
};
const ajouteUser = async (req, res) => {
  const tmp = req.body;
  try {
    await User.ajouteUser(tmp);
    res.status(201).json({ msg: "User bien ajoute" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await User.deleteUser(id);
    res.status(200).json({ msg: "User supprimer" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const UpdateUser = async (req, res) => {
  try {
    const result = await User.UpdateUserbyid(req.body);
    res.status(200).json({ msg: "User updated" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const loginAdmin = async (req, res) => {
  let data = {
    Email: req.body.Email,
    password: req.body.password,
  };

  console.log(data);

  if (!data.Email || !data.password) {
    return res
      .status(403)
      .json({ message: "S'il vous plait donner Email ou mot de passe" });
  }

  const isExist = UserModel.findOne({
    Email: data.Email,
  });

  isExist
    .then(async (result) => {
      if (result && result.Email) {
        const correctPassword = bcrypt
          .compare(data.password, result.password)
          .then((result) => {
            console.log(data.password);
            console.log(result.password);

            if (!correctPassword) {
              return res.status(403).json({ error: "Incorrect Password" });
            }
          });
      } else {
        return res.status(403).json({ error: "Incorrect Email" });
      }

      res.status(201).json({
        success: true,
        message: "user logged in successfully.",
        user: result,
      });
    })
    .catch((err) => {
      console.log({ error: err });
      res.status(403).send({ error: err });
    });
};

module.exports = {
  getallUsers,
  getUserbyid,
  ajouteUser,
  deleteUser,
  UpdateUser,
  loginAdmin,
};
