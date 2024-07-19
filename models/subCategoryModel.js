
const mongoose = require('mongoose');


// Create a SubCategory Schema
const subCategorySchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'SubCategory name is required'],
        trim: true,
        unique:[true, 'SubCategory name must be unique'],
        maxlength: [50, 'SubCategory name must not exceed 50 characters'],
        minlenght: [2, 'SubCategory name must be at least 2 characters'],
        // lowercase: true,
    },
    slug: {
        type: String,
        lowercase: true,
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: [true, 'Category is required']
    },
}, {timestamps: true});

// // Create a compound index to ensure unique combination of name and category
// subCategorySchema.index({ name: 1, category: 1 }, { unique: true });

// Create a Model
const SubCategoryModel = mongoose.model('SubCategory', subCategorySchema);

// SubCategoryModel.collection.dropIndex('name_1');

module.exports = SubCategoryModel;

