"use server"
import * as nodemailer from "nodemailer";


interface Props{
    userEmail:string[];
    subject:string;
    content:string;
}

const transporter = nodemailer.createTransport({
    service:"gmail",
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:process.env.MY_EMAIL,
        pass:process.env.APP_PASS
    }
  });


  export const sendEmail=async({userEmail,subject,content}:Props)=>{
    try {
        const mailOptions={
            from:process.env.MY_EMAIL,
            to:userEmail,
            subject:"Testing email newsletter",
            text:"Successful",
            html:content
        }
        transporter.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error);
            }
            else{
                console.log("Email sent: "+info.response);
            }
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
  }