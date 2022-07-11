const asyncHandler = require('express-async-handler');
const CatalogDetailsSchema = require('../models/catalogDetailsModel');

var CatalogDetailsController = {
    
    // @desc    Get specific catalog
    // @route   GET /catalog/:id
    // @access  PUBLIC
    GetSpecific: [
        asyncHandler(async (req, res) => {
            const data = await CatalogDetailsSchema.find({catalogId: req.params.id})
            res.status(200).json(data);
        })
    ],

    // @desc    Post catalog details
    // @route   POST /catalog/details
    // @access  PUBLIC
    PostDetails: [
        asyncHandler(async (req, res) => {
            const formData = req.body
            await CatalogDetailsSchema.create({...CatalogDetailsSchema, ...formData})
            res.status(200).json({message: 'Recipe details has been inserted'});
        })
    ]
};

module.exports = {
    CatalogDetailsController
}