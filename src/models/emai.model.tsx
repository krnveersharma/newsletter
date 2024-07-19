import mongoose from "mongoose";

const {Schema}=mongoose;

const emailScheema=new Schema(
    {
        title:{
            type:String,
        },
        content:{
            type:String,
        },
        newsLetterOwnerId:{
            type:String,
        },
    },
    {timestamps:true}
);


const Email=mongoose.models.Email || mongoose.model("Email",emailScheema);

export default Email;