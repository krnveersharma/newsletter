import mongoose, { Schema } from "mongoose";

const subscriberSchema=new Schema({
    email:{
        type:String,
    },
    newsLetterOwnerId:{
        type:String,
    },
    source:{
        type:String,
        default:"Informed Box",
    },
    status:{
        type:String,
        default:"Subscribed"
    }
},{timestamps:true});

const Subscriber=mongoose.models.Subscriber || mongoose.model("Subscriber",subscriberSchema);

export default Subscriber;