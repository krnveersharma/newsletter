"use server";

import Membership from "@/models/membership.model";
import { connectDb } from "@/shared/libs/db";
import { currentUser, User } from "@clerk/nextjs/server";
import Stripe from "stripe"

export const addStripe=async()=>{
    try {
        await connectDb();
        const user = await currentUser();
        const userId=user?.id;
        console.log("user: ",user?.id);
        const membership=await Membership.findOne({userId:userId}); 
        if(membership){
            return 
        }
        const stripe=new Stripe(process.env.STRIPE_SECRET_KEY!,{
            apiVersion:"2024-06-20",
        });
        try {
            await stripe.customers.create({
                email:user?.emailAddresses[0].emailAddress,
                name:user?.firstName!+user?.lastName!,
            }).then(async(customer)=>{
                await Membership.create({
                    userId:userId,
                    stripeCustomerId:customer.id,
                    plan:"LAUNCH"
                });
               
            });
        } catch (error) {
            console.log(error)
        }
       
    } catch (error) {
        console.log(error);
    }
}