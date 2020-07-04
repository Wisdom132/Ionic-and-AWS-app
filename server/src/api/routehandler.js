const EventRoutes = require("./events/routes");

module.exports = (app) => {
    app.use("/event", EventRoutes);

}