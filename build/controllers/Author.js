"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Author_1 = __importDefault(require("../models/Author"));
// const createAuthor = (req: Request, res: Response, next: NextFunction) => {
//     const { name } = req.body;
//     console.log('xxxxxxxxxxx');
//     const author = new Author({
//         _id: new mongoose.Types.ObjectId(),
//         name
//     });
//
//     return author
//         .save()
//         .then((author) => res.status(201).json({ author }))
//         .catch((error) => res.status(500).json({ error }));
// };
//
// const readAuthor = (req: Request, res: Response, next: NextFunction) => {
//     const authorId = req.params.authorId;
//
//     return Author.findById(authorId)
//         .then((author) => (author ? res.status(200).json({ author }) : res.status(404).json({ message: 'not found' })))
//         .catch((error) => res.status(500).json({ error }));
// };
const readAll = (req, res, next) => {
    return Author_1.default.find()
        .then((authors) => {
        res.status(200).json({ authors });
    })
        .catch((error) => {
        res.status(500).json({ error });
    });
};
// const updateAuthor = (req: Request, res: Response, next: NextFunction) => {
//     const authorId = req.params.authorId;
//
//     return Author.findById(authorId)
//         .then((author) => {
//             if (author) {
//                 author.set(req.body);
//
//                 return author
//                     .save()
//                     .then((author) => res.status(200).json({ author }))
//                     .catch((error) => res.status(500).json({ error }));
//             } else {
//                 return res.status(404).json({ message: 'not found' });
//             }
//         })
//         .catch((error) => res.status(500).json({ error }));
// };
//
// const deleteAuthor = (req: Request, res: Response, next: NextFunction) => {
//     const authorId = req.params.authorId;
//
//     return Author.findByIdAndDelete(authorId)
//         .then((author) => (author ? res.status(201).json({ author, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
//         .catch((error) => res.status(500).json({ error }));
// };
//
// export default { createAuthor, readAuthor, readAll, updateAuthor, deleteAuthor };
exports.default = { readAll };
