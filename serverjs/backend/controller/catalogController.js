const asyncHandler = require('express-async-handler');
const Catalog = require('../models/catalogModel');

// @desc    Get all catalog
// @route   GET /catalog
// @access  PUBLIC
const getAllCatalog = asyncHandler(async (req, res) => {
    const data = await Catalog.find()
    res.status(200).json(data);
});

// @desc    Get specific catalog
// @route   GET /catalog/:id
// @access  PUBLIC
const getSpecificCatalogById = asyncHandler(async (req, res) => {
    const data = await Catalog.find({_id: req.params.id})
    res.status(200).json(data.json());
});

// @desc    Post catalog
// @route   POST /catalog/create
// @access  PUBLIC
const postCatalog = asyncHandler(async (req, res) => {
    const formData = req.body;
    await Catalog.create(
        {
            title: formData.title,
            description: formData.description,
            image: formData.image,
            preptime: formData.preptime,
            category: formData.category,
            serving: formData.serving
        }
    )

    res.status(200).json({message: 'Record has been inserted.'});
});

// @desc    Update catalog
// @route   PUT /catalog/:id
// @access  PUBLIC
const updateCatalog = asyncHandler(async (req, res) => {
    const data = await Catalog.findById(req.params.id);

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
});

// @desc    Delete catalog
// @route   DELETE /catalog/:id
// @access  PUBLIC
const deleteCatalog = asyncHandler(async (req, res) => {
    const data = await Catalog.findById(req.params.id);
    data.remove();
    res.status(200).json({message: 'Record has been Deleted.'});
});

module.exports = {
    getAllCatalog,
    getSpecificCatalogById,
    postCatalog,
    updateCatalog,
    deleteCatalog
}