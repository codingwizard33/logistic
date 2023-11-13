import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  tags: [
    {
      type: String
    }
  ],
  acceptedDate: {
    type: Date,
    required: true
  },
  deliveryDate: {
    type: Date,
    required: true
  },
  collection: {
    company: {
      type: String,
      required: true
    },
    constactPerson: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    details: {
      type: String
    },
    email: {
      type: String,
    },
    postCode: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Country'
    },
    message: {
      type: String
    }
  },
  delivery: {
    company: {
      type: String,
      required: true
    },
    constactPerson: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    details: {
      type: String
    },
    email: {
      type: String,
    },
    postCode: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Country'
    },
    message: {
      type: String
    }
  },
  goods: {
    pcs: {
      type: Number,
      required: true
    },
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Type'
    },
    weight: {
      type: Number,
      required: true
    },
    length: {
      type: Number
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    volume: {
      type: Number
    },
    ldm: {
      type: String
    },
    description: {
      type: String
    }
  },
  incoterms: {
    code: {
      type: String
    },
    contactPerson: {
      type: String
    }
  },
  costomRef: {
    docNumber: {
      type: String
    }
  },
  remarks: {
    type: String
  },
  file: {
    type: String
  }
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);