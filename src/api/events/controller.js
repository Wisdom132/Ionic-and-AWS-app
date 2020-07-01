let Event = require('./model');
const {
    upload,
    s3
} = require('../../config/aws')


const singleUpload = upload.single('image');


exports.uploadImage = async (req, res) => {
    try {
        singleUpload(req, res, err => {
            if (err) {
                return res.status(422).json({
                    title: "File Upload Error",
                    desription: err.message
                })
            }
            const event = new Event({
                name: req.body.name,
                description: req.body.description,
                image: req.file.location
            })
            let response = await event.save();
            res.status(200).json({
                status: "Success",
                data: response
            })
        })
    } catch (err) {
        res.status(500).json({
            status: "error",
            error: err

        })
    }
}