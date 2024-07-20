'use server'

import Email from "@/models/emai.model"
import { connectDb } from "@/shared/libs/db";

export const saveEmail=async({
    title,
    content,
    newsLetterOwnerId,
}:{
    title:string;
    content:string;
    newsLetterOwnerId:string;
})=>{
    try{
        await connectDb();
        const email=await Email.findOne({
            title,
            newsLetterOwnerId,
        });
        if(email){
            await Email.findByIdAndUpdate(email._id,{
                content,
            });
            return {message:"Email updated successfully!"};
        }else{
            await Email.create({
                title,
                content,
                newsLetterOwnerId,
            });
            return {message:"Email saved successfuly!"};
        }
    }
    catch(error){
        console.log(error);
    }
}