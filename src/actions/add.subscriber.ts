"use server"

import { connectDb } from "@/shared/libs/db"

export const AddSubscriber=async({email}:{email:string})=>{
    await connectDb();
}