"use server";

import Email from "@/models/emai.model";
import { connectDb } from "@/shared/libs/db";

export const deleteEmail=async({emailId}:{emailId:string})=>{
    try {
        await connectDb();
        await Email.findByIdAndDelete(emailId);
    } catch (error) {
        return {error:"An error occured while saving the email."}
    }
}