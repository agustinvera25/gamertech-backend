const mercadopago = require('mercadopago')

mercadopago.configure({
  access_token: process.env.MP_TOKEN,
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
