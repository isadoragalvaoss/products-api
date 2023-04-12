const db = require("../config/firebase");

exports.getAllProducts = async (req, res) => {
  try {
    db.ref("products").once("value", (snapshot) => {
      const products = snapshot.val();
      res.json(products);
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getProduct = async (req, res) => {
  const productId = req.params.id;

  const productRef = db.ref("products").child(productId);
  productRef.once(
    "value",
    (snapshot) => {
      const product = snapshot.val();
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).send("Product not found!");
      }
    },
    (error) => {
      res.status(500).send("Error while searching product");
    }
  );
};

exports.addProduct = async (req, res) => {
  const { name, description, category, photo, price, sale, salePrice } =
    req.body;

  const newProductRef = db.ref("products").push();
  newProductRef.set(
    {
      id: newProductRef.key,
      name,
      description,
      category,
      photo,
      price,
      sale,
      salePrice,
    },
    (error) => {
      if (error) {
        res.status(500).send("Error adding product");
      } else {
        res.status(200).send("Product added!");
      }
    }
  );
};

exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { name, description, category, photo, price, sale, salePrice } =
    req.body;

  const productRef = db.ref("products").child(productId);
  productRef.update(
    {
      name,
      description,
      category,
      photo,
      price,
      sale,
      salePrice,
    },
    (error) => {
      if (error) {
        res.status(500).send("Error while updating product");
      } else {
        res.status(200).send("Product updated!");
      }
    }
  );
};

exports.removeProduct = async (req, res) => {
  const productId = req.params.id;

  const productRef = db.ref("products").child(productId);
  productRef.remove((error) => {
    if (error) {
      res.status(500).send("Error removing product");
    } else {
      res.status(200).send("Product removed!");
    }
  });
};
