const User = require('../models/users.model');
const Transfer = require('../models/transfers.model');

const transferAmount = async (req, res) => {
  //* 1 PASOS A SEGUIR EN EL  instrucciones.txt
  const { amount, accountNumber, senderUserId } = req.body;

  //2
  const userReceiver = await User.findOne({
    where: {
      status: 'active',
      accountNumber: accountNumber,
    },
  });

  //3
  const receiverUserId = userReceiver.id;

  //4
  const userMakeTransfer = await User.findOne({
    where: {
      status: 'active',
      id: senderUserId,
    },
  });
  //5
  if (amount > userMakeTransfer.amount) {
    return res
      .status(400)
      .json({ error: 'Monto insuficiente para realizar la transferencia' });
  }

  //6
  if (receiverUserId === senderUserId) {
    return res.status(400).json({
      error:
        'El usuario receptor y el usuario que realiza la transferencia son iguales',
    });
  }

  //7
  const newAmountUserMakeTransfer = userMakeTransfer.amount - amount;

  //8
  const newAmountUserReceiver = userReceiver.amount + amount;

  //9
  await userMakeTransfer.update({
    amount: newAmountUserMakeTransfer,
  });

  //10
  await userReceiver.update({
    amount: newAmountUserReceiver,
  });

  //11
  await Transfer.create({ amount, senderUserId, receiverUserId });

  //12

  res.status(200).json({
    status: 'success',
    message: 'Transfer completed 🥰',
  });
};

module.exports = { transferAmount };
