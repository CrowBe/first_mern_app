const { Schema } = require("mongoose");

const ItemSchema = new Schema({
    itemNumber: Number,
    photos: {
        type: [String],
        index: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    billed: {
        type: Boolean,
        default: false
    }
});

module.exports = ItemSchema;