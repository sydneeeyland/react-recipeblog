const config = require('../config');
const router = config.express.Router();
const { 
    getAllCatalog, 
    getSpecificCatalogById, 
    postCatalog, 
    updateCatalog, 
    deleteCatalog 
} = require('../controller/catalogController');

router.get('/', getAllCatalog)
router.route('/:id')
    .get(getSpecificCatalogById)
    .put(updateCatalog)
    .delete(deleteCatalog);
router.post('/create', postCatalog);

module.exports = router