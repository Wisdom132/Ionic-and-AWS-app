const mongoose = require("mongoose");
const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Include your name"]
    },
    image: {
        type: String,
        required: [true, "Please Include your name"]
    },
    description: {
        type: String,
        required: [true, "Please Include your name"]
    }
}, {
    timestamps: true,
});
const Event = mongoose.model("Event", eventSchema);
module.exports = Event;