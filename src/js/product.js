class Product {
    constructor({ id, name, description, price, inStock, image = null }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = inStock;
        this.image = image || null;
    }
}

export default Product;