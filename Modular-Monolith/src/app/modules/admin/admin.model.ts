import validator from 'validator';
import { Schema, model } from 'mongoose';
import { IAdmin, AdminModel } from './admin.interface';
import { adminRoles, adminStatus } from './admin.constant';

// admin schema
const adminSchema = new Schema<IAdmin, AdminModel>(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide a name!'],
      minLength: [3, 'Name must be at least 3 characters'],
      maxLength: [120, 'Name is to large!'],
    },
    email: {
      type: String,
      trim: true,
      validate: [validator.isEmail, 'Provide a valid email!'],
    },
    about: {
      type: String,
    },
    password: {
      type: String,
      required: [true, 'Password is required!'],
      validate: {
        validator: (value: string) =>
          validator.isStrongPassword(value, {
            minLength: 6,
            minLowercase: 3,
            minNumbers: 1,
            minUppercase: 1,
            minSymbols: 1,
          }),
        message: 'Password {value} is not strong!',
      },
      select: 0,
    },
    profileImage: {
      type: String,
      validate: [validator.isURL, 'Please provide valid profile image url!'],
      default: 'https://cdn-icons-png.flaticon.com/512/7930/7930853.png',
    },
    wishLists: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
      },
    ],
    shippingAddress: {
      type: {
        firstName: {
          type: String,
        },
        lastName: {
          type: String,
        },
        address1: {
          type: String,
        },
        address2: {
          type: String,
        },
        city: {
          type: String,
        },
        postCode: {
          type: String,
        },
        country: {
          type: String,
        },
        state: {
          type: String,
        },
        phoneNumber: {
          type: String,
        },
      },
    },
    status: {
      type: String,
      enum: adminStatus,
      default: 'active',
    },
    role: {
      type: String,
      enum: adminRoles,
      default: 'seller',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// admin model
const Admin = model<IAdmin, AdminModel>('Admin', adminSchema);

export default Admin;