import multer from 'multer';
import path from 'path';
import fs from 'fs';
import type { Request, Response} from "express";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.config.js";

// const storage = multer.diskStorage({
//     destination: function (req: Request, file: Express.Multer.File, cb: ((error: Error | null, destination: string) => void) ) {
//         const uploadPath = path.join(__dirname, '..', 'uploads', 'profiles');

//         fs.mkdirSync(uploadPath, { recursive: true }); // Ensure directory exists
//         cb(null, uploadPath);
//     },
//     filename: function (req: Request, file: Express.Multer.File, cb: ((error: Error | null, destination: string) => void) ) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);   
//         const ext=path.extname(file.originalname);
//         cb(null, uniqueSuffix + '-' + file.fieldname + ext );
//     }
// });

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req: Request, file: Express.Multer.File) => ({
    folder: 'expenses-tracker/avatars', // optional: organize uploads
    format: file.mimetype.split('/')[1], // auto-detect format
    public_id: `${Date.now()}-${file.originalname.split('.')[0]}`, // unique filename
  }),
});

const fileFilter = (req: Request, file: Express.Multer.File , cb: ((error: any | null, acceptFile: boolean) => void) ) =>{
    // Accept only image files
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
};

const upload = multer({ 
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // Limit file size to 5MB
});

export default upload;
