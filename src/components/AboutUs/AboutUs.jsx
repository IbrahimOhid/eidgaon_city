import React from "react";
import { FcAbout } from "react-icons/fc";
import LineSvg from "../../utils/LineSvg";

const AboutUs = () => {
  return (
    <div className=" relative pt-32">
      <section className="relative w-full py-5 text-center">
        <h1 className="text-2xl text-blue-600 md:text-3xl font-bold px-3">
          EidgoanCity.Com – ঈদগাঁও এর সবচেয়ে বড় অনলাইন সার্ভিস ডিরেক্টরি
        </h1>
        <p className="mt-4 text-lg md:text-xl  mx-auto">
          সঠিক তথ্য, দ্রুত সার্চ, এবং সহজ অভিজ্ঞতার মাধ্যমে আপনার দৈনন্দিন
          প্রয়োজনকে আরও সহজ করুন।
        </p>
      </section>
      <div className="flex mx-auto mb-1 justify-center items-center">
        <FcAbout className="text-4xl mr-2" />
        <span className="relative whitespace-nowrap ">
          <LineSvg value={"আমাদের সম্পর্কে"} />
        </span>
      </div>
      <section className="max-w-4xl mx-auto px-5 py-12 leading-8">
        <p className="mb-4 text-lg">
          <strong className="text-blue-600">EidgoanCity.Com</strong> ঈদগাঁও এর
          সর্ববৃহৎ অনলাইন ডিরেক্টরি, যেখানে আপনি সহজেই প্রয়োজনীয় সার্ভিস
          প্রোভাইডার ও হাসপাতালের তথ্য খুঁজে পেতে পারেন। এটি স্থানীয় বাসিন্দাদের
          জন্য একটি নির্ভরযোগ্য রিসোর্স।
        </p>

        <p className="mb-4 text-lg">
          আমাদের প্ল্যাটফর্মে{" "}
          <strong className="text-blue-600">
            কোনো পেমেন্ট বা বুকিং নেওয়া হয় না
          </strong>{" "}
          — আমরা শুধুমাত্র আপনাকে
          <strong className="text-blue-600">
            {" "}
            যাচাই করা যোগাযোগের তথ্য{" "}
          </strong>{" "}
          প্রদান করি, যাতে আপনি সরাসরি সার্ভিস প্রোভাইডারের সাথে যোগাযোগ করতে
          পারেন।
        </p>

        <p className="text-lg">
          আমাদের লক্ষ্য হচ্ছে ঈদগাঁও এর সঠিক, আপডেটেড ও যাচাই করা তথ্য দিয়ে
          মানুষকে দ্রুত সিদ্ধান্ত নিতে সাহায্য করা।
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-5  text-center">
        <h2 className="text-2xl text-blue-600 pb-5 md:text-3xl font-bold px-3">
          কেন EidgoanCity.Com ব্যবহার করবেন?
        </h2>

        <p className="mb-6 text-lg ">
          ঈদগাঁও এর স্থানীয় প্রয়োজনকে আরও সহজ, দ্রুত এবং ঝামেলামুক্ত করতে আমাদের
          তথ্যভিত্তিক প্ল্যাটফর্ম সর্বদা প্রস্তুত।
        </p>

        <button className="bg-indigo-600 hover:bg-indigo-800 text-white px-8 py-4 rounded-lg shadow-lg font-semibold transition">
          এখনই যোগাযোগ করুন
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
