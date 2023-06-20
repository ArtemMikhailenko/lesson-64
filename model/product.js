import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema ({
    
    title: String,
    price: Number,
    rating: Number,
    category: String,
    brand: String,
    buyer: [{ type: Schema.Types.ObjectId, ref: 'custumer' }]
     
    })
    const custumersSchema = new Schema ({
        
        name:String,
        product_id:String
    })    

const Product = mongoose.model('product', productSchema);
const Custumer = mongoose.model('custumer', custumersSchema);
export {Product , Custumer};
