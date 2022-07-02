const mongoose = require('mongoose');

const catalogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: [true, 'Please add title to your recipe']
        },
        description: {
            type: String,
            require: [true, 'Please add description to your recipe']
        },
        image: {
            type: String,
            require: [true, 'Please add image to your recipe']
        },
        preptime: {
            type: String,
            require: [true, 'Please add preptime to your recipe']
        },
        category: {
            type: String,
            require: [true, 'Please add category to your recipe']
        },
        serving: {
            type: String,
            require: [true, 'Please add serving to your recipe']
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Catalog', catalogSchema);