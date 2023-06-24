"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AuthorSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    age: {
        type: Number,
        required: true
    }
}, {
    versionKey: false
});
// export default mongoose.model<IAuthorModel>('Author', AuthorSchema);
exports.default = (0, mongoose_1.model)('Author', AuthorSchema);
