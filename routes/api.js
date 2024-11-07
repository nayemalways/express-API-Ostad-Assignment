 import express from "express";
 import * as blogControllers from "../app/controllers/blogController.js";

 const router = express.Router();


 // Create Route
 router.post('/create-blog', blogControllers.createBlog);

 // Read Route
 router.get('/read-blog', blogControllers.readBlog);

 // Update Route
 router.put('/update-blog', blogControllers.updateBlog);

 // Delete Route
 router.delete('/delete-blog', blogControllers.deleteBlog);


//  Extra section 

// File upload
router.post('/upload-file', blogControllers.fileUplad);

 export default router;