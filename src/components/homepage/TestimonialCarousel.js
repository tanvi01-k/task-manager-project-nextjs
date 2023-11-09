'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "This task manager is amazing! It has improved my productivity tenfold.",
    author: "John Doe",
  },
  {
    text: "I can't imagine my life without this app. It's a game-changer!",
    author: "Jane Smith",
  },
  {
    text: "Effortlessly managing tasks has never been easier. I love it!",
    author: "Alice Johnson",
  },
  {
    text: "This app is fantastic. It keeps me organized and on track.",
    author: "Bob Williams",
  },
  {
    text: "I've tried many task managers, and this one is by far the best.",
    author: "Ella Davis",
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display three testimonials at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="bg-gray-800">
    <div className="bg-gray-800 py-10 max-w-5xl mx-auto">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-gray-700">{testimonial.text}</p>
              <p className="text-gray-600 font-semibold mt-2">{testimonial.author}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default TestimonialCarousel;
