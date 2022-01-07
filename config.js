const config = {

    dbUrl: process.env.DB_URL || 'mongodb+srv://diobando:123Labomba@cluster0.l6dw3.mongodb.net/telegram',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || 'files',

}

module.exports = config;