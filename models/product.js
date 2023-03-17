const mongoose = require('mongoose');
const schema = mongoose.Schema;


const productschema = new schema({
    name :
    {type: String,
        required: true},
    price :
    {type: String,
        required: true},

    image :
    {type: String,
        default:"https://univers-stickers.com/wp-content/uploads/2022/01/Ha9ef685884e447d88c0090e923d4ebeeq.jpg"},
})
module.exports = mongoose.model('product', productschema);