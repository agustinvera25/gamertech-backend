const mercadopago = require('mercadopago')

mercadopago.configure({
  access_token: "TEST-6145773523535794-110707-867bed99be3fc465a56345adf1d2f0e6-229519443",
});

exports.createPreference = (req, res) => {
  let preference = {
    items: req.body.map(item => {
      return {
        title: item.name,
        unit_price: Number(item.price),
        quantity: Number(item.quantity),
      }
    }),
    back_urls: {
      success: "http://localhost:5173/success",
      failure: "http://localhost:5173/failure",
      pending: "",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
