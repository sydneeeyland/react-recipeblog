const config = require('./config');
const app = config.express();
const { errorHandler } = require('./middleware/errorMiddleware');
const startDatabase = require('./database/dbconfig');
startDatabase();

app.use(config.express.json());
app.use(config.express.urlencoded({extended: false}))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/catalog', require('./routes/publicRoutes'));
app.use(errorHandler);

app.listen(config.port, () => console.log(`Server is running on ${config.port}`));