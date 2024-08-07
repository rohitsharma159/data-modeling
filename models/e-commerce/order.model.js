import mongoose from 'mongoose';

const orderItemsSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    reqired: true,
  },
});

const addressSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  pinCode: {
    type: Number,
    required: true,
  },
  landmark: {
    type: String,
    required: true,
  },
  houseNumber: {
    type: Number,
    required: true,
  },
  area_block: {
    type: String,
    required: true,
  },
});

const orderSchema = new mongose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItems: {
      type: [orderItemsSchema],
    },
    address: {
      type: [addressSchema],
    },
    status: {
      type: String,
      enum: ['PENDING', 'CANCELED', 'DELIVERED'],
      default: 'PENDING',
    },
  },
  { timestamps: true }
);

export const Order = mongose.model('Order', orderSchema);
