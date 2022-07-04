const asyncHandler = require('express-async-handler');
const CatalogSchema = require('../models/catalogModel');

var CatalogController = {
    //@desc    Get all catalog
    //@route   GET /catalog
    //@access  PUBLIC
    GetAll: [
        asyncHandler(async (req, res) => {
            const data = await CatalogSchema.find()
            res.status(200).json(data);
        })
    ],

    // @desc    Post catalog
    // @route   POST /catalog/create
    // @access  PUBLIC
    Post: [
        asyncHandler(async (req, res) => {
            const formData = req.body;
            await catalog.create({...catalog, ...formData})
            res.status(200).json({message: 'Record has been inserted.'});
        })
    ],

    // @desc    Update catalog
    // @route   PUT /catalog/:id
    // @access  PUBLIC
    Put: [
        asyncHandler(async (req, res) => {
            const data = await CatalogSchema.findById(req.params.id);
    
            if (!data) {
                res.status(400)
                throw new Error('Catalog not found');
            }
        
            await Catalog.findByIdAndUpdate( 
                req.params.id,
                req.body,
                { new: true }
            );
        
            res.status(200).json({message: 'Record Updated.'})
        })
    ],

    // @desc    Delete catalog
    // @route   DELETE /catalog/:id
    // @access  PUBLIC
    Delete: [
        asyncHandler(async (req, res) => {
            const data = await CatalogSchema.findById(req.params.id);
            data.remove();
            res.status(200).json({message: 'Record has been Deleted.'});
        })
    ]
};

module.exports = {
    CatalogController
}