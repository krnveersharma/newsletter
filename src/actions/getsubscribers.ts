"use server"
import { connectDb } from "@/shared/libs/db"
import Subscriber

from "@/models/subscriber.model"

export const getSubscribers=async({
    newsLetterOwnerId,
}:{newsLetterOwnerId:string})=>{
    try {
        await connectDb();
        console.log("id: ",newsLetterOwnerId)
        const subscribers=await Subscriber.find({
            newsLetterOwnerId:newsLetterOwnerId
        });
        console.log("Subscribers: ",subscribers)
       
        return JSON.stringify(subscribers);
    } catch (error) {
        console.log(error);
    }
}