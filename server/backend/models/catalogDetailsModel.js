const mongoose = require('mongoose');

const catalogDetails = mongoose.Schema(
    {
        catalogId: {
            type: String,
            required: [true, 'Please add catalog ID']
        },
        recipe: {
            type: String,
            required: [true, 'Please add recipe name']
        },
        image: {
            type: String,
            required: [true, 'Please add image']
        },
        video: {
            type: String,
            required: [true, 'Please add video']
        },
        ingredients: {
            type: Array,
            required: [true, 'Please add ingredients']
        },
        prepartion: {
            type: Array,
            required: [true, 'Please add prepartion']
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('CatalogDetails', catalogDetails);