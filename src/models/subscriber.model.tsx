import mongoose, { Schema } from "mongoose";

const subscriberSchema=new Schema({
    email:{
        type:String,
    },
    newsLetterOwnerId:{
        type:String,
    }
},{timestamps:true});

const Subscriber=mongoose.models.Subscriber || mongoose.model("Subscriber",subscriberSchema);

export default Subscriber;