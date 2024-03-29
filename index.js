import express from 'express'
import mongoose from 'mongoose';
import { Product , Custumer } from './model/product.js';
const PORT = 8000;

const app = express();
const url = 'mongodb+srv://artemlend:1234@cluster0.2ihdknl.mongodb.net/Shop';
mongoose.connect(url)
        .then(()=> {
            console.log('Connected to DB');
            app.listen(PORT, ()=> {
                console.log(`Server started on http://localhost:${PORT}`);
            })
        })
        .catch((err)=> {console.log(`DB connection error: ${err}`)});

        app.get('/', (req, res) => {
            
            Product.find()
            .populate('buyer','name')
            
                .then(products => {
                const productsHtml = products.map(product => `
        <div style="border: 1px solid #000; 
        width: 300px; 
        margin: 0 0 20px 0; 
        padding: 0 10px">
          <h2>${product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>Name: ${product.buyer.name}</p>
        </div>
                `);
                const html = `<h1>Products:</h1> ${productsHtml.join('')}`;
                res.send(html);
                })
                .catch(error => {
                console.error(error);
                });
            });
        