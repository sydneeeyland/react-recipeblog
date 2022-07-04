const config = require('../config');
const router = config.express.Router();
const { CatalogController } = require('../controller/catalogController');
const { CatalogDetailsController } = require('../controller/catalogDetailsController');

router.get('/', CatalogController.GetAll)
router.route('/:id')
    .get(CatalogDetailsController.GetSpecific)
    .put(CatalogController.Put)
    .delete(CatalogController.Delete);
router.post('/create', CatalogController.Post);
router.post('/details', CatalogDetailsController.PostDetails);

module.exports = router