class Product {
  static idGenerator = 1;

  constructor(
    categoryIds,
    title,
    price, 
    shipping, 
    imageUrl,
    description,
    sizes,
    rating,
  ) {
    this.id = Product.idGenerator++;
    this.categoryIds = categoryIds;
    this.title = title;
    this.price = price;
    this.shipping = shipping;
    this.imageUrl = imageUrl;
    this.description = description;
    this.sizes = sizes;
    this.rating = rating;
    this.priceInc = Math.round(((shipping + price) + Number.EPSILON) * 100) / 100;
  }

}


export default Product;