import { moveFile } from "../utility/moveFile.js";
import { UPLOAD_FILE } from "../config/config.js";

// CREATE BLOG
export const createBlog = async (req, res) => {
    return res.send(`Blog created successfully`);
};

// READ BLOG
export const readBlog = async (req, res) => {
    return res.send(`Blog read successfully`);
};

// UPDATE BLOG
export const updateBlog = async (req, res) => {
    return res.send(`Blog upadate successfully`);
};

// DELETE BLOG
export const deleteBlog = async (req, res) => {
    return res.send(`Blog delete successfully`);
}


// Extra section 

// File upload
export const fileUplad = async (req, res) => {
    const file = req.files.file;
    const uploadPath = UPLOAD_FILE(file.name);

    // move file
    await moveFile(file, uploadPath);
    res.json({status: "File uploaded successfully"});
}