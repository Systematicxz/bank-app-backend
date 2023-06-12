const User = require('../models/users.model');
const transfersUsers = require('../models/transfers.model');

exports.signup = async (req, res) => {
  try {
    const { id, name, accountNumber, password, amount, status } = req.body;

    const user = await User.create({
      id,
      name,
      accountNumber,
      password,
      amount,
      status,
    });

    res.status(200).json({
      status: 'success',
      message: 'The user has been created',
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'something its fk 🤪',
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { password, accountNumber } = req.body;
    const user = await User.findOne({
      where: {
        accountNumber,
        password,
        status: 'active',
      },
    });

    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'Usuario no encontrado',
      });
    }
    if (!accountNumber) {
      return res.status(400).json({
        status: 'fail',
        message: 'Falta el número de cuenta',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Algo salió mal',
    });
  }
};
