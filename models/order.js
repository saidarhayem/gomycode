
const mongoose = require('mongoose')
const schema = mongoose.Schema
const orderSchema = new schema({
  cartItems: [],
  prixTotal: {
    type: String,
  },

  ordredBy: {
    type: String,
  },
})
module.exports = mongoose.model('order', orderSchema)
