const db = require("../config/firebase");

exports.getCart = async (req, res) => {
  try {
    db.ref("cart").once("value", (snapshot) => {
      const cart = snapshot.val();
      res.json(cart);
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.addToCart = async (req, res) => {
  try {
    const cartRef = db.ref("cart").push();
    const cart = {
      id: cartRef.key,
      productId: req.body.productId,
      name: req.body.name,
      quant: req.body.quant,
      price: req.body.price,
    };
    await cartRef.set(cart);
    res.status(201).json({ id: cartRef.key, ...cart });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCart = async (req, res) => {
  const { id } = req.params;
  const { quant } = req.body;

  const cartRef = db.ref(`cart/${id}`);

  cartRef
    .update({ quant })
    .then(() => {
      res.status(200).send({ message: "Cart updated." });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ message: "Error updating cart." });
    });
};

exports.removeFromCart = async (req, res) => {
  const { id } = req.params;

  const cartRef = db.ref(`cart/${id}`);

  cartRef
    .remove()
    .then(() => {
      res.status(200).send({ message: "Item removed from cart." });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ message: "Error removing item from cart." });
    });
};

exports.removeAllFromCart = async (req, res) => {
  const cartRef = db.ref("cart");

  cartRef
    .remove()
    .then(() => {
      res.status(200).send({ message: "The purchase was successful!" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ message: "Error while purchasing" });
    });
};
