const productsServices = require("../services/products.services");
const upload = require("../middleware/upload.js");

// Create and Save a new Product
exports.create = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      next(err);
    } else {
      

      var model = {
        productName: req.body.productName,
        productDescription: req.body.productDescription,
 
      };

      productsServices.createProduct(model, (error, results) => {
        if (error) {
          return next(error);
        }
        return res.status(200).send({
          message: "Success",
          data: results,
        });
      });
    }
  });
};

// Retrieve all Products from the database.
exports.findAll = (req, res, next) => {
  var model = {
    productName: req.query.productName,
  };

  productsServices.getProducts(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

// Find a single Tutorial with an id
