const express = require("express");
const router = express.Router();
const {Posts} = require("../models"); 
const multer = require("multer");


// -----------------
// Configure Multer
// -----------------
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // folder to store images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname); // unique filename
    },
});

const upload = multer({ storage: storage });

// Get all posts
router.get("/", async (req, res) => {
    try {
        const listOfPost = await Posts.findAll({
            order: [["createdAt", "DESC"]],
        });
        res.json(listOfPost);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong!" });
    }
});

router.post("/", upload.single("image"), async (req, res) => {
    try {
        const post = req.body;
        if (req.file) {
            post.image = `/uploads/${req.file.filename}`; // add image path to post object
        }
        const newPost = await Posts.create(post);
        res.json(newPost);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create post!" });
    }
});

module.exports = router;