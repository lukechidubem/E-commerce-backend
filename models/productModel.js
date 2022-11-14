import mongoose from "mongoose";

// const reviewSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     comment: { type: String, required: true },
//     rating: { type: Number, required: true },
//   },
//   {
//     timestamps: true,
//   }
// );

// const productSchema2 = new mongoose.Schema(
//   {
//     name: { type: String, required: true, unique: true },
//     slug: { type: String, required: true, unique: true },
//     image: { type: String, required: true },
//     images: [String],
//     brand: { type: String, required: true },
//     category: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true },
//     countInStock: { type: Number, required: true },
//     rating: { type: Number, required: true },
//     numReviews: { type: Number, required: true },
//     reviews: [reviewSchema],
//   },
//   {
//     timestamps: true,
//   }
// );

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, required: true },
    countInStock: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true, //add date
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
