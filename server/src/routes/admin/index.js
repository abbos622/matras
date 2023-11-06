const carouselRouter = require("./carousel");
const statisticsRouter = require("./statistics");
const ordersRouter = require("./orders");
const contactRouter = require("./contact");
const categoryRouter = require("./category");
const productRouter = require("./products");
const technologyRouter = require("./technology");
const addressRouter = require("./address");
const loginRouter = require("./login");

module.exports = [
    carouselRouter,
    statisticsRouter,
    ordersRouter,
    contactRouter,
    categoryRouter,
    productRouter,
    technologyRouter,
    addressRouter,
    loginRouter
];