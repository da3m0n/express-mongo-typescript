import mongoose, { Document, Schema, model } from 'mongoose';

export interface IAuthor {
    name: string;
}

export interface IAuthorModel extends IAuthor, Document {}

const AuthorSchema: Schema = new Schema(
    {
        name: { type: String, required: true }
        // lastname: { type: String, required: true },
        // age: {
        //     type: Number,
        //     required: true
        // }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IAuthorModel>('Author', AuthorSchema);
// export default model<IAuthorModel>('Author', AuthorSchema);

// export const AuthorModel = model<IAuthorModel>('author', AuthorSchema);
