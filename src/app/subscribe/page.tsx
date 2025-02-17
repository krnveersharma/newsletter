"use client";

import { AddSubscriber } from "@/actions/add.subscriber";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [value, setValue] = useState("");
  const searchParams = useSearchParams();
  const username: string = searchParams.get("username")!;
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await AddSubscriber({ email: value, username });
    console.log(res)
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("Successfully subscribed!");
    }

    setValue("");
  };
  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      <div>
        <h1 className="text-7xl pb-8 capitalize">{username} NewsLetter</h1>
      </div>
      <form
        className="flex w-full max-w-md border rounded overflow-hidden"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="email"
          name="email"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="px-4 py-4 w-full text-gray-700 leading-tight focus:outline-none"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="px-8 bg-blue-500 text-white font-bold py-4 rounded-r hover:bg-blue-600 focus:outline-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Page;
