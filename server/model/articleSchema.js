import mongoose from 'mongoose';

const { Schema } = mongoose;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

class ArticleClass {
    
}

articleSchema.loadClass(ArticleClass);

const Article = mongoose.model('Article', articleSchema);

export default Article;