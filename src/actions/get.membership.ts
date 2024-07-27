"use server";

import Membership from "@/models/membership.model";
import { connectDb } from "@/shared/libs/db";
import { currentUser } from "@clerk/nextjs/server";

export const getMembership=async()=>{
    
    try {
        await connectDb();
        const user=await currentUser();
        const membership=await Membership.findOne({
            userId:user?.id,
        });
        console.log(membership)
        return JSON.stringify(membership);
    } catch (error) {
        console.log(error);
    }
}