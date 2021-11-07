const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
	{
		userId :{type : String, required: true},
		products :[
			{tity:{
					type:Number,
					
				productId:{
					type: String
				},
				quandefault:1,
				},
			},
		],	
	},
	{timestamps: true}
);

module.exports = mongoose.model("Cart", CartSchema);