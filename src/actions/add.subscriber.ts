"use server"

import Subscriber from "@/models/subscriber.model";
import { connectDb } from "@/shared/libs/db"
import { clerkClient } from "@clerk/nextjs/server";

export const AddSubscriber=async({email,username}:{email:string,username:string})=>{
    try {
        await connectDb();


        //getting all users
        const allUsersResponse=await clerkClient().users.getUserList();
        const allUsers=allUsersResponse.data;


        //find out our newsletter owner
        const newsLetterOwner=allUsers.find((i)=> i.username===username);

        //Check if subscriber already exists
        const isSubscriberExist=await Subscriber.findOne({
            email:email,
            newsLetterOwnerId:newsLetterOwner?.id,
        });
        if (isSubscriberExist){
            return {error:"Subscriber already exists"};
        }
        else{
            const subscriber=await Subscriber.create({
                email,
                newsLetterOwnerId:newsLetterOwner?.id,
                source:"InformedBox",
                status:"Subscribed"
            })
            console.log(subscriber)
            return {message:subscriber}
        }


    } catch (error) {
        return {error:"Error occured while subscribing"};
    }
}