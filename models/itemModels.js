import { Schema, model, models } from "mongoose";

const itemSchema = new Schema({
  name: String,
  desc: String,
  price: String,
  img: String,
  item: String,
});

const Item = models.Item || model("Item", itemSchema);

export default Item;
