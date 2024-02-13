import mongoose, { Schema, model } from "mongoose";

const AlbumSchema = new Schema({
    name: String
})

const OrderSchema = new Schema({
    items : [AlbumSchema],
    processed : Boolean,
    created_on: { default : new Date(), type: Date }
})

const OrdersModel = mongoose.models.orders || model("orders", OrderSchema, "orders");

export { OrderSchema, OrdersModel };