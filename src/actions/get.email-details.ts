"use server";

import { connectDb } from "@/shared/libs/db";
import Email from "@/models/emai.model";

export const GetEmailDetails = async ({
  title,
  newsLetterOwnerId,
}: {
  title: string;
  newsLetterOwnerId: string;
}) => {
  try {
    await connectDb();
    const email = await Email.findOne({
      title,
      newsLetterOwnerId,
    });
    return JSON.stringify(email);
  } catch (error) {
    console.log(error);
  }
};