"use client";
import React from "react";
import bannerImage from "../../assets/login.svg";
import Image from "next/image";

const BannerSection = () => {
  return (
    <div className="bg-blue-500 py-6">
      <div className="container mx-auto flex items-center justify-center text-center py-5">
        <div className="w-1/2">
          <Image
            src={bannerImage}
            alt="Banner Image"
            className="w-80 selection:rounded-full shadow-lg"
          />
        </div>
        <div className="w-1/2 text-white">
        <h1 className="text-4xl font-semibold">Welcome to Task Manager</h1>
          <p className="text-lg mt-4">
            Organize your tasks efficiently with our task manager app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
