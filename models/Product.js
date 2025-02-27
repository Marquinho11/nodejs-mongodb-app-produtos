const data = require('../databases/mongo');
const {ObjectId} = require('mongodb');
//aqui seria a forma de criamos uma tabela no banco de dados do mongo
class Produtos{
    constructor(name, price, description, quantity, image){
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
        this.image = image
    }
    save(){
        const product = data.db().collection('loja').insertOne({
            name: this.name,
            price: this.price,
            description: this.description,
            quantity: this.quantity,
            image: this.image
        });
        return product;
    }
    static getProducts(){
        const products = data.db().collection('loja').find().toArray();
        return products;
    }
        //filtrando pelo id
    static async getProductsById(id){
        const products = await data.db().collection('loja').findOne({ _id: ObjectId(id)});
        return products;
    }
    //atualizando o produto
    static async removeProductById(id){
        await data.db().collection('loja').deleteOne({ _id: ObjectId(id)});
        return
    }
}

module.exports = Produtos;