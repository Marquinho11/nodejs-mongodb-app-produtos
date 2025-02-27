const product = require('../models/Product');

module.exports = class Product {
    static async home(req, res){
        const products = await product.getProducts();
        res.render('tasks/all', {products});
    }

    static createProduct(req, res){
        res.render('tasks/create');
    }

    static async create(req,res){
        //essa é a forma de salvar os dados no banco mongoDB
        try{
            const {name, price, description, quantity, image} = req.body;
            const pro = new product({name, price, description, quantity,image});
            await pro.save();
            res.redirect('/');
        }catch(e){
            console.error(e);
        }
    }

    static async listProducts(req, res) {
        try{
            const id = req.params._id;
            const prod = await product.findById(id);
            res.render('tasks/showProduct', {prod});
        }catch(err){
            console.error(err);
        }
    }

    static remove(req, res){
        const id = req.params._id;
        product.findByIdAndRemove(id);
        
        
    }
}