import React, { useState } from "react";
import "tailwindcss/tailwind.css";

import {
  CalendarIcon,
  StarIcon,
  ClockIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Teachers from "../pages/TeacherList";
import Explore from "./Explore";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const Card = ({ children }) => {
    return (
      <div className="flex-none w-[350px] bg-white rounded-lg shadow mr-4">
        {children}
      </div>
    );
  };

  const CardHeader = ({ children }) => {
    return <div className="px-4 py-3">{children}</div>;
  };

  const CardTitle = ({ children }) => {
    return <h3 className="font-semibold text-lg mb-1">{children}</h3>;
  };

  const CardDescription = ({ children }) => {
    return <p className="text-sm">{children}</p>;
  };

  const CardContent = ({ children }) => {
    return <div className="px-4">{children}</div>;
  };

  const Button = ({ children }) => {
    return (
      <button className="bg-orange-500 text-white px-4 py-2 w-24 rounded-md">
        {children}
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/aparna.png", "/shubham.jpeg", "/beginners.jpeg"]; // Add your image paths here

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleScroll = (direction) => {
    const container = document.getElementById("teacherContainer");
    const scrollDistance = 200;
    if (direction === "left") {
      container.scrollLeft -= scrollDistance;
    } else {
      container.scrollLeft += scrollDistance;
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100">
      <nav className="flex items-center justify-between bg-white p-4">
        <div className="flex items-centern space-x-5">
          <img src="doyoga-share.jpeg" alt="Yoga Logo" className="h-8" />{" "}
          <Link
            to="/explore"
            className="text-orange-600 font-extrabold text-2xl "
          >
            Explore
          </Link>
          {/* <h1 className="text-lg ml-2 font-semibold"> Do Yoga</h1> */}
        </div>
        <div>
          <Link to="/login" className="text-orange-600 font-extrabold text-2xl">
            Login
          </Link>
        </div>
      </nav>

      <section className="py-5 px-4 flex  justify-between">
        <div>
          <div>
            <h2 className="text-2xl text-orange-600 font-bold">
              Do Yoga. Be Healthy.
            </h2>
            <p className="font-bold">100+ online yoga classes.</p>
            <p className="font-bold">Book a trial class at just Rs.50</p>
          </div>
          <div>
            <div className="max-w-sm py-10 ">
              <input
                type="text"
                placeholder="Explore all of yoga..."
                className=" max-w- 96 pl-10 p-3 border-2 bg-white h- 2 px-60  rounded-full text-sm focus:outline-none border-orange-600"
              />
              <button type="submit" className="absolute mt-2 top-52 left-32 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25px"
                  height="25px"
                  viewBox="0 0 50 50"
                >
                  <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.80078 1 7 21 7 Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <img src="girl.png" className=" mr-96 w-40 mb-32" />
      </section>

      <div className=" px-8 py-4 -mt-28">
        <h2 className="text-2xl text-orange-600 font-bold">
          What time do you want to do yoga?
        </h2>
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            3:00 am
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600  px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            4:00 am
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            5:00 am
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            6:00 am
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            7:00 am
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            8:00 am
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            9:00 am
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            10:00 am
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            11:00 am
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            12:00 am
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            2:00 pm
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            3:00 pm
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            4:00 pm
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            5:00 pm
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            6:00 pm
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            7:00 pm
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            8:00 pm
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            9:00 pm
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            10:00 pm
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            11:00 pm
          </button>
          <button
            className={`hover:bg-orange-200 text-orange-600 px-3 py-1 rounded ${isVisible ? "slide-in" : "slide-out"
              }`}
          >
            12:00 am
          </button>
          {/* Add more buttons */}
        </div>

        <div className="flex overflow-x-auto py-6 bg-[#FFFAF1] space-x-4">
          <Card>
            <img
              alt="Yoga"
              className="h-[150px] w-full rounded-t-lg"
              src="/img1.jpg"
              style={{
                aspectRatio: "350/150",
                objectFit: "cover",
              }}
            />
            <CardHeader>
              <CardTitle>Therapy based Yoga, Advanced Meditation...</CardTitle>
              <CardDescription>
                for Beginner by Amit | Devine life Society -...
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-1 text-sm">
                <CalendarIcon className="text-gray-500 w-5 h-5" />
                <span>6 days a week</span>
                <span>M, T, W, T, F, S</span>
              </div>
              <div className="flex items-center space-x-1 my-2">
                <StarIcon className="text-yellow-400 w-5 h-5" />
                <span>5.0</span>
                <span className="text-gray-500">252 streams</span>
              </div>
              <div className="flex items-center space-x-2 my-1">
                <ClockIcon className="text-gray-500 w-5 h-5" />
                <span>4:00 am</span>
                <span>60 min</span>
              </div>

              <div className="flex justify-between">
                <div className="flex items-baseline space-x-1 my-2">
                  <span className="text-lg font-semibold">₹ 2500</span>
                  <span>/ month</span>
                </div>
                <Button className="">Join</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              alt="Yoga"
              className="h-[150px] w-full rounded-t-lg"
              src="/img1.jpg"
              style={{
                aspectRatio: "350/150",
                objectFit: "cover",
              }}
            />
            <CardHeader>
              <CardTitle>Therapy based Yoga, Advanced Meditation...</CardTitle>
              <CardDescription>
                for Beginner by Amit | Devine life Society -...
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-1 text-sm">
                <CalendarIcon className="text-gray-500 w-5 h-5" />
                <span>6 days a week</span>
                <span>M, T, W, T, F, S</span>
              </div>
              <div className="flex items-center space-x-1 my-2">
                <StarIcon className="text-yellow-400 w-5 h-5" />
                <span>5.0</span>
                <span className="text-gray-500">252 streams</span>
              </div>
              <div className="flex items-center space-x-2 my-1">
                <ClockIcon className="text-gray-500 w-5 h-5" />
                <span>4:00 am</span>
                <span>60 min</span>
              </div>

              <div className="flex justify-between">
                <div className="flex items-baseline space-x-1 my-2">
                  <span className="text-lg font-semibold">₹ 2500</span>
                  <span>/ month</span>
                </div>
                <Button className="">Join</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              alt="Yoga"
              className="h-[150px] w-full rounded-t-lg"
              src="/img1.jpg"
              style={{
                aspectRatio: "350/150",
                objectFit: "cover",
              }}
            />
            <CardHeader>
              <CardTitle>Therapy based Yoga, Advanced Meditation...</CardTitle>
              <CardDescription>
                for Beginner by Amit | Devine life Society -...
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-1 text-sm">
                <CalendarIcon className="text-gray-500 w-5 h-5" />
                <span>6 days a week</span>
                <span>M, T, W, T, F, S</span>
              </div>
              <div className="flex items-center space-x-1 my-2">
                <StarIcon className="text-yellow-400 w-5 h-5" />
                <span>5.0</span>
                <span className="text-gray-500">252 streams</span>
              </div>
              <div className="flex items-center space-x-2 my-1">
                <ClockIcon className="text-gray-500 w-5 h-5" />
                <span>4:00 am</span>
                <span>60 min</span>
              </div>

              <div className="flex justify-between">
                <div className="flex items-baseline space-x-1 my-2">
                  <span className="text-lg font-semibold">₹ 2500</span>
                  <span>/ month</span>
                </div>
                <Button className="">Join</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              alt="Yoga"
              className="h-[150px] w-full rounded-t-lg"
              src="/img1.jpg"
              style={{
                aspectRatio: "350/150",
                objectFit: "cover",
              }}
            />
            <CardHeader>
              <CardTitle>Therapy based Yoga, Advanced Meditation...</CardTitle>
              <CardDescription>
                for Beginner by Amit | Devine life Society -...
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-1 text-sm">
                <CalendarIcon className="text-gray-500 w-5 h-5" />
                <span>6 days a week</span>
                <span>M, T, W, T, F, S</span>
              </div>
              <div className="flex items-center space-x-1 my-2">
                <StarIcon className="text-yellow-400 w-5 h-5" />
                <span>5.0</span>
                <span className="text-gray-500">252 streams</span>
              </div>
              <div className="flex items-center space-x-2 my-1">
                <ClockIcon className="text-gray-500 w-5 h-5" />
                <span>4:00 am</span>
                <span>60 min</span>
              </div>

              <div className="flex justify-between">
                <div className="flex items-baseline space-x-1 my-2">
                  <span className="text-lg font-semibold">₹ 2500</span>
                  <span>/ month</span>
                </div>
                <Button className="">Join</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              alt="Yoga"
              className="h-[150px] w-full rounded-t-lg"
              src="/img1.jpg"
              style={{
                aspectRatio: "350/150",
                objectFit: "cover",
              }}
            />
            <CardHeader>
              <CardTitle>Therapy based Yoga, Advanced Meditation...</CardTitle>
              <CardDescription>
                for Beginner by Amit | Devine life Society -...
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-1 text-sm">
                <CalendarIcon className="text-gray-500 w-5 h-5" />
                <span>6 days a week</span>
                <span>M, T, W, T, F, S</span>
              </div>
              <div className="flex items-center space-x-1 my-2">
                <StarIcon className="text-yellow-400 w-5 h-5" />
                <span>5.0</span>
                <span className="text-gray-500">252 streams</span>
              </div>
              <div className="flex items-center space-x-2 my-1">
                <ClockIcon className="text-gray-500 w-5 h-5" />
                <span>4:00 am</span>
                <span>60 min</span>
              </div>

              <div className="flex justify-between">
                <div className="flex items-baseline space-x-1 my-2">
                  <span className="text-lg font-semibold">₹ 2500</span>
                  <span>/ month</span>
                </div>
                <Button className="">Join</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              alt="Yoga"
              className="h-[150px] w-full rounded-t-lg"
              src="/img1.jpg"
              style={{
                aspectRatio: "350/150",
                objectFit: "cover",
              }}
            />
            <CardHeader>
              <CardTitle>Therapy based Yoga, Advanced Meditation...</CardTitle>
              <CardDescription>
                for Beginner by Amit | Devine life Society -...
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-1 text-sm">
                <CalendarIcon className="text-gray-500 w-5 h-5" />
                <span>6 days a week</span>
                <span>M, T, W, T, F, S</span>
              </div>
              <div className="flex items-center space-x-1 my-2">
                <StarIcon className="text-yellow-400 w-5 h-5" />
                <span>5.0</span>
                <span className="text-gray-500">252 streams</span>
              </div>
              <div className="flex items-center space-x-2 my-1">
                <ClockIcon className="text-gray-500 w-5 h-5" />
                <span>4:00 am</span>
                <span>60 min</span>
              </div>

              <div className="flex justify-between">
                <div className="flex items-baseline space-x-1 my-2">
                  <span className="text-lg font-semibold">₹ 2500</span>
                  <span>/ month</span>
                </div>
                <Button className="">Join</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              alt="Yoga"
              className="h-[150px] w-full rounded-t-lg"
              src="/img1.jpg"
              style={{
                aspectRatio: "350/150",
                objectFit: "cover",
              }}
            />
            <CardHeader>
              <CardTitle>Therapy based Yoga, Advanced Meditation...</CardTitle>
              <CardDescription>
                for Beginner by Amit | Devine life Society -...
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-1 text-sm">
                <CalendarIcon className="text-gray-500 w-5 h-5" />
                <span>6 days a week</span>
                <span>M, T, W, T, F, S</span>
              </div>
              <div className="flex items-center space-x-1 my-2">
                <StarIcon className="text-yellow-400 w-5 h-5" />
                <span>5.0</span>
                <span className="text-gray-500">252 streams</span>
              </div>
              <div className="flex items-center space-x-2 my-1">
                <ClockIcon className="text-gray-500 w-5 h-5" />
                <span>4:00 am</span>
                <span>60 min</span>
              </div>

              <div className="flex justify-between">
                <div className="flex items-baseline space-x-1 my-2">
                  <span className="text-lg font-semibold">₹ 2500</span>
                  <span>/ month</span>
                </div>
                <Button className="">Join</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              alt="Yoga"
              className="h-[150px] w-full rounded-t-lg"
              src="/img1.jpg"
              style={{
                aspectRatio: "350/150",
                objectFit: "cover",
              }}
            />
            <CardHeader>
              <CardTitle>Therapy based Yoga, Advanced Meditation...</CardTitle>
              <CardDescription>
                for Beginner by Amit | Devine life Society -...
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-1 text-sm">
                <CalendarIcon className="text-gray-500 w-5 h-5" />
                <span>6 days a week</span>
                <span>M, T, W, T, F, S</span>
              </div>
              <div className="flex items-center space-x-1 my-2">
                <StarIcon className="text-yellow-400 w-5 h-5" />
                <span>5.0</span>
                <span className="text-gray-500">252 streams</span>
              </div>
              <div className="flex items-center space-x-2 my-1">
                <ClockIcon className="text-gray-500 w-5 h-5" />
                <span>4:00 am</span>
                <span>60 min</span>
              </div>

              <div className="flex justify-between">
                <div className="flex items-baseline space-x-1 my-2">
                  <span className="text-lg font-semibold">₹ 2500</span>
                  <span>/ month</span>
                </div>
                <Button className="">Join</Button>
              </div>
            </CardContent>
          </Card>
          {/* Add more cards */}
        </div>

        <div className="bg-white py-12">
          <h2 className="text-2xl text-orange-600 font-bold">
            2000+ people have done yoga with us.
          </h2>
          <Slider {...settings}>
            <div className="w-[300px]">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <p className="italic text-gray-600 px-4 py-3">
                  "Yoga session with Kavita mam starts with warmup and
                  suryanamaskar leading towards different asanas. The variety of
                  asanas keeps class excitin"
                </p>
                <a className="text-orange-500 text-sm px-4 pb-3 block" href="#">
                  show more
                </a>
                <div className="flex items-center px-4">
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                </div>
                <div className="flex items-center px-4 pb-3">
                  <img
                    alt="Wamakshi"
                    src="/reviewimg1.jpg?height=40&width=40"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-semibold">Wamakshi</p>
                    <p className="text-sm text-gray-500">12-Feb-2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px]">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <p className="italic text-gray-600 px-4 py-3">
                  "Yoga session with Kavita mam starts with warmup and
                  suryanamaskar leading towards different asanas. The variety of
                  asanas keeps class excitin"
                </p>
                <a className="text-orange-500 text-sm px-4 pb-3 block" href="#">
                  show more
                </a>
                <div className="flex items-center px-4">
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                </div>
                <div className="flex items-center px-4 pb-3">
                  <img
                    alt="Wamakshi"
                    src="/reviewimg1.jpg?height=40&width=40"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-semibold">Wamakshi</p>
                    <p className="text-sm text-gray-500">12-Feb-2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px]">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <p className="italic text-gray-600 px-4 py-3">
                  "Yoga session with Kavita mam starts with warmup and
                  suryanamaskar leading towards different asanas. The variety of
                  asanas keeps class excitin"
                </p>
                <a className="text-orange-500 text-sm px-4 pb-3 block" href="#">
                  show more
                </a>
                <div className="flex items-center px-4">
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                </div>
                <div className="flex items-center px-4 pb-3">
                  <img
                    alt="Wamakshi"
                    src="/reviewimg1.jpg?height=40&width=40"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-semibold">Wamakshi</p>
                    <p className="text-sm text-gray-500">12-Feb-2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px]">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <p className="italic text-gray-600 px-4 py-3">
                  "Yoga session with Kavita mam starts with warmup and
                  suryanamaskar leading towards different asanas. The variety of
                  asanas keeps class excitin"
                </p>
                <a className="text-orange-500 text-sm px-4 pb-3 block" href="#">
                  show more
                </a>
                <div className="flex items-center px-4">
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                </div>
                <div className="flex items-center px-4 pb-3">
                  <img
                    alt="Wamakshi"
                    src="/reviewimg1.jpg?height=40&width=40"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-semibold">Wamakshi</p>
                    <p className="text-sm text-gray-500">12-Feb-2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px]">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <p className="italic text-gray-600 px-4 py-3">
                  "Yoga session with Kavita mam starts with warmup and
                  suryanamaskar leading towards different asanas. The variety of
                  asanas keeps class excitin"
                </p>
                <a className="text-orange-500 text-sm px-4 pb-3 block" href="#">
                  show more
                </a>
                <div className="flex items-center px-4">
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                </div>
                <div className="flex items-center px-4 pb-3">
                  <img
                    alt="Wamakshi"
                    src="/reviewimg1.jpg?height=40&width=40"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-semibold">Wamakshi</p>
                    <p className="text-sm text-gray-500">12-Feb-2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px]">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <p className="italic text-gray-600 px-4 py-3">
                  "Yoga session with Kavita mam starts with warmup and
                  suryanamaskar leading towards different asanas. The variety of
                  asanas keeps class excitin"
                </p>
                <a className="text-orange-500 text-sm px-4 pb-3 block" href="#">
                  show more
                </a>
                <div className="flex items-center px-4">
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                </div>
                <div className="flex items-center px-4 pb-3">
                  <img
                    alt="Wamakshi"
                    src="/reviewimg1.jpg?height=40&width=40"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-semibold">Wamakshi</p>
                    <p className="text-sm text-gray-500">12-Feb-2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px]">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <p className="italic text-gray-600 px-4 py-3">
                  "Yoga session with Kavita mam starts with warmup and
                  suryanamaskar leading towards different asanas. The variety of
                  asanas keeps class excitin"
                </p>
                <a className="text-orange-500 text-sm px-4 pb-3 block" href="#">
                  show more
                </a>
                <div className="flex items-center px-4">
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                </div>
                <div className="flex items-center px-4 pb-3">
                  <img
                    alt="Wamakshi"
                    src="/reviewimg1.jpg?height=40&width=40"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-semibold">Wamakshi</p>
                    <p className="text-sm text-gray-500">12-Feb-2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px]">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <p className="italic text-gray-600 px-4 py-3">
                  "Yoga session with Kavita mam starts with warmup and
                  suryanamaskar leading towards different asanas. The variety of
                  asanas keeps class excitin"
                </p>
                <a className="text-orange-500 text-sm px-4 pb-3 block" href="#">
                  show more
                </a>
                <div className="flex items-center px-4">
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                </div>
                <div className="flex items-center px-4 pb-3">
                  <img
                    alt="Wamakshi"
                    src="/reviewimg1.jpg?height=40&width=40"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-semibold">Wamakshi</p>
                    <p className="text-sm text-gray-500">12-Feb-2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px]">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <p className="italic text-gray-600 px-4 py-3">
                  "Yoga session with Kavita mam starts with warmup and
                  suryanamaskar leading towards different asanas. The variety of
                  asanas keeps class excitin"
                </p>
                <a className="text-orange-500 text-sm px-4 pb-3 block" href="#">
                  show more
                </a>
                <div className="flex items-center px-4">
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                </div>
                <div className="flex items-center px-4 pb-3">
                  <img
                    alt="Wamakshi"
                    src="/reviewimg1.jpg?height=40&width=40"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-semibold">Wamakshi</p>
                    <p className="text-sm text-gray-500">12-Feb-2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px]">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <p className="italic text-gray-600 px-4 py-3">
                  "Yoga session with Kavita mam starts with warmup and
                  suryanamaskar leading towards different asanas. The variety of
                  asanas keeps class excitin"
                </p>
                <a className="text-orange-500 text-sm px-4 pb-3 block" href="#">
                  show more
                </a>
                <div className="flex items-center px-4">
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-orange-400 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                  <StarIcon className="text-gray-300 w-4 h-4" />
                </div>
                <div className="flex items-center px-4 pb-3">
                  <img
                    alt="Wamakshi"
                    src="/reviewimg1.jpg?height=40&width=40"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-semibold">Wamakshi</p>
                    <p className="text-sm text-gray-500">12-Feb-2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Add more testimonial cards within Slider component */}
            <div className="w-[300px]">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                {/* Testimonial content */}
              </div>
            </div>
            {/* Add more testimonial cards within Slider component */}
          </Slider>
        </div>

        <div>
          <h2 className="text-2xl text-orange-600 font-bold">
            Tell us your details and book your first yoga session with us.
          </h2>
          <p className="font-bold">
            Our yoga counselor will reach you to understand your needs and
            assign the best yoga class for you
          </p>
        </div>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-96 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="mobileNumber"
            className="block mb-2 text-sm text-gray-600"
          >
            Mobile Number (+91)
          </label>
          <input
            type="tel"
            id="mobileNumber"
            className=" w-96 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
          />
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 w-48 h-11  rounded-md">
          Submit & Book Trial
        </button>

        <div className="flex justify-between">
          <div className=" mt-24">
            <h2 className="text-2xl text-orange-600 font-bold">
              Personal Yoga Sessions
            </h2>
            <p className="font-bold">
              Join 1:1 for yoga sessions tailored to your health needs.
            </p>
            <button className="mt-8 bg-orange-500 text-white px-4 py-2 w-60 h-11  rounded-md">
              Book 1:1 session @Rs.599
            </button>
          </div>
          <img src="personal.svg" className="mr-96" />
        </div>

        <div className="flex justify-between">
          <div className=" mt-24">
            <h2 className="text-2xl text-orange-600 font-bold">
              Aahara : Personalized Nutrition Coaching
            </h2>
            <p className="font-bold">
              Elevate your well-being with tailored daily diet plans
              <br /> designed to manage health issues and help you achieve
              <br /> your health goals.
            </p>
            <button className="mt-8 bg-orange-500 text-white px-4 py-2 w-60 h-11  rounded-md">
              Book 1:1 session @Rs.599
            </button>
          </div>
          <img src="aahara.svg" className="mr-96" />
        </div>

        <div className="p-4 mt-24">
          <h2 className="text-2xl text-orange-600 font-bold">
            Yoga for different health goals
          </h2>
          <div className="flex space-x-4 mt-5">
            <div className="flex flex-col items-center">
              <img
                alt="Pregnancy"
                className="rounded-lg mb-2"
                height="100"
                src="/pregnancy.png"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="150"
              />
              <button className=" -mt-2 bg-orange-500 text-white px-4 py-2 w-36 h-10  rounded-md">
                Pregnancy
              </button>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="PCOS"
                className="rounded-lg mb-2"
                height="100"
                src="/pcos.jpeg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="150"
              />
              <button className="-mt-2 bg-orange-500 text-white px-4 py-2 w-36 h-10  rounded-md">
                PCOS
              </button>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="Diabetes"
                className="rounded-lg mb-2"
                height="100"
                src="/diabetes.png"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="150"
              />
              <button className="-mt-2 bg-orange-500 text-white px-4 py-2 w-36 h-10  rounded-md">
                Diabetes
              </button>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="Back Pain"
                className="rounded-lg mb-2"
                height="100"
                src="/backpain.png"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="150"
              />
              <button className="-mt-2 bg-orange-500 text-white px-4 py-2 w-36 h-10  rounded-md">
                Back Pain
              </button>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="Arthritis"
                className="rounded-lg mb-2"
                height="100"
                src="/arthritis.png"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="150"
              />
              <button className="-mt-2 bg-orange-500 text-white px-4 py-2 w-36 h-10  rounded-md">
                Arthritis
              </button>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="Hypertension"
                className="rounded-lg mb-2"
                height="100"
                src="/hypertension.jpeg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="150"
              />
              <button className="-mt-2 bg-orange-500 text-white px-4 py-2 w-36 h-10  rounded-md">
                Hypertension
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto  py-8">
          <h2 className="text-2xl text-orange-600 font-bold ">
            Featured Yoga Classes
          </h2>
          <div className="relative mt-5">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-gray-600"
              onClick={prevImage}
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </button>
            <div className="overflow-hidden rounded-lg">
              <img
                alt="Yoga Class"
                className="w-full h-auto"
                height="400"
                src={images[currentImageIndex]}
                style={{
                  aspectRatio: "1200/400",
                  objectFit: "cover",
                }}
                width="1200"
              />
            </div>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-gray-600"
              onClick={nextImage}
            >
              <ChevronRightIcon className="w-8 h-8" />
            </button>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 space-x-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full ${index === currentImageIndex ? "bg-gray-800" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>
          <div className=" mt-4">
            <h3 className="text-lg font-bold">
              Yoga Classes for Beginners at 6am
            </h3>
          </div>
        </div>

        {/* <div className=" mt-10">
          <h2 className="text-2xl text-orange-600 font-bold">All our Yoga Teachers</h2>
          <div className="relative overflow-hidden mt-5">
            <div id="teacherContainer" className="flex space-x-4 overflow-x-auto" style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}>
              <TeacherCard
                imageUrl="/sowmya.jpeg"
                name="Arka Banerjee"
                location="Kolkata"
                experience="4 years"
              />
              <TeacherCard
                imageUrl="/sowmya.jpeg"
                name="Poonam Ranolia"
                location="Hisar, Haryana"
                experience="7 years"
              />
              <TeacherCard
                imageUrl="/sowmya.jpeg"
                name="Priyanka Mishra"
                location="Jaipur"
                experience="4 years"
              />
            </div>
            <button
              className="absolute left-0 top-0 bottom-0 flex items-center justify-center bg-gray-200 opacity-50 hover:opacity-100"
              onClick={() => handleScroll('left')}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              className="absolute right-0 top-0 bottom-0 flex items-center justify-center bg-gray-200 opacity-50 hover:opacity-100"
              onClick={() => handleScroll('right')}
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div> */}
        <Teachers />
        <div className=" -mt-56 justify-between">
          <h2 className="text-2xl text-orange-600 font-bold">
            Find your yoga practice
          </h2>
          <p className="font-bold">When do you want to do yoga?.</p>
          <div className="space-x-4">
            <button className="mt-8 bg-orange-500 text-white px-4 py-2 w-64 h-16  rounded-md">
              Early Morning
              <br /> 5-7am
            </button>
            <button className="mt-8 bg-orange-500 text-white px-4 py-2 w-64 h-16  rounded-md">
              Early Morning
              <br /> 5-7am
            </button>
            <button className="mt-8 bg-orange-500 text-white px-4 py-2 w-64 h-16  rounded-md">
              Early Morning
              <br /> 5-7am
            </button>
            <button className="mt-8 bg-orange-500 text-white px-4 py-2 w-64 h-16  rounded-md">
              Early Morning
              <br /> 5-7am
            </button>
          </div>
        </div>

        <div className="flex  space-x-8">
          <h2 className="text-2xl text-orange-600 font-bold mt-10">
            Choose Time
          </h2>

          <div className="relative ">
            <select
              id="time"
              className=" mt-8 bg-orange-500 text-white px-4 py-2 w-32 h-16  rounded-md block appearance-none  pr-8  leading-tight focus:outline-none focus:border-gray-500 "
            >
              <option value="00:00">00:00</option>
              <option value="00:30">00:30</option>
              <option value="01:00">01:00</option>
              <option value="01:30">01:30</option>
              <option value="02:00">02:00</option>
              <option value="02:30">02:30</option>
              <option value="03:00">03:00</option>
              <option value="03:30">03:30</option>
              <option value="04:00">04:00</option>
              <option value="04:30">04:30</option>
              <option value="05:00">05:00</option>
              <option value="05:30">05:30</option>
              <option value="06:00">06:00</option>
              <option value="06:30">06:30</option>
              <option value="07:00">07:00</option>
              <option value="07:30">07:30</option>
              <option value="08:00">08:00</option>
              <option value="08:30">08:30</option>
              <option value="09:00">09:00</option>
              <option value="09:30">09:30</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 14.707a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 1.414l-3 3z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl text-orange-600 font-bold">
            Courses you can join
          </h2>
          <p className="font-bold">
            Short & long courses to progress through the yoga journey.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl text-orange-600 font-bold">
            Yoga Nidra: Relax & Meditate
          </h2>
          <div className="flex space-x-80">
            <img src="nidra.svg" className="size-36 mt-10" />
            <p className="font-bold mt-20">
              Yoga Nidra helps you relax completely, get recharged and
              <br /> explore your inner Self. Download the app now.
            </p>
          </div>

          <div className="flex space-x-32 -mt-14 ml-48">
            <img src="google.svg" className="size-60" />
            <img src="apple.svg" className="size-60" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl text-orange-600 font-bold">Blogs</h2>
          <div className="mt-6 flex space-x-6 overflow-x-auto">
            <div className="flex-shrink-0 w-80">
              <img
                alt="Yoga for PCOS"
                className="w-full h-48 object-cover rounded-lg"
                height="192"
                src="/blog.png"
                style={{
                  aspectRatio: "320/192",
                  objectFit: "cover",
                }}
                width="320"
              />
              <h3 className="mt-2 text-lg font-semibold">
                Yoga for PCOS: A Comprehensive Guide to Managing Symptoms
              </h3>
            </div>
            <div className="flex-shrink-0 w-80">
              <img
                alt="Yoga for PCOS"
                className="w-full h-48 object-cover rounded-lg"
                height="192"
                src="/blog.png"
                style={{
                  aspectRatio: "320/192",
                  objectFit: "cover",
                }}
                width="320"
              />
              <h3 className="mt-2 text-lg font-semibold">
                Yoga for PCOS: A Comprehensive Guide to Managing Symptoms
              </h3>
            </div>
            <div className="flex-shrink-0 w-80">
              <img
                alt="Yoga for PCOS"
                className="w-full h-48 object-cover rounded-lg"
                height="192"
                src="/blog.png"
                style={{
                  aspectRatio: "320/192",
                  objectFit: "cover",
                }}
                width="320"
              />
              <h3 className="mt-2 text-lg font-semibold">
                Yoga for PCOS: A Comprehensive Guide to Managing Symptoms
              </h3>
            </div>
            <div className="flex-shrink-0 w-80">
              <img
                alt="Yoga for PCOS"
                className="w-full h-48 object-cover rounded-lg"
                height="192"
                src="/blog.png"
                style={{
                  aspectRatio: "320/192",
                  objectFit: "cover",
                }}
                width="320"
              />
              <h3 className="mt-2 text-lg font-semibold">
                Yoga for PCOS: A Comprehensive Guide to Managing Symptoms
              </h3>
            </div>
            <div className="flex-shrink-0 w-80">
              <img
                alt="Yoga for PCOS"
                className="w-full h-48 object-cover rounded-lg"
                height="192"
                src="/blog.png"
                style={{
                  aspectRatio: "320/192",
                  objectFit: "cover",
                }}
                width="320"
              />
              <h3 className="mt-2 text-lg font-semibold">
                Yoga for PCOS: A Comprehensive Guide to Managing Symptoms
              </h3>
            </div>
            <div className="flex-shrink-0 w-80">
              <img
                alt="Yoga for PCOS"
                className="w-full h-48 object-cover rounded-lg"
                height="192"
                src="/blog.png"
                style={{
                  aspectRatio: "320/192",
                  objectFit: "cover",
                }}
                width="320"
              />
              <h3 className="mt-2 text-lg font-semibold">
                Yoga for PCOS: A Comprehensive Guide to Managing Symptoms
              </h3>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl text-orange-600 font-bold">
            All Yoga practices
          </h2>
          <p className="font-bold">Asana, Pranayama, Mudra, Mantra</p>
          <div className="mt-6 flex space-x-6 overflow-x-auto">
            <div className="flex-shrink-0 w-80">
              <img
                alt="Yoga for PCOS"
                className="w-full h-48 object-cover rounded-lg"
                height="192"
                src="/ajna.png"
                style={{
                  aspectRatio: "320/192",
                  objectFit: "cover",
                }}
                width="320"
              />
              <h3 className="mt-2 text-lg font-semibold">
                Ajna Chakra: definition and
                <br /> features
              </h3>
            </div>
            <div className="flex-shrink-0 w-80">
              <img
                alt="Yoga for PCOS"
                className="w-full h-48 object-cover rounded-lg"
                height="192"
                src="/ajna.png"
                style={{
                  aspectRatio: "320/192",
                  objectFit: "cover",
                }}
                width="320"
              />
              <h3 className="mt-2 text-lg font-semibold">
                Ajna Chakra: definition and
                <br /> features
              </h3>
            </div>
            <div className="flex-shrink-0 w-80">
              <img
                alt="Yoga for PCOS"
                className="w-full h-48 object-cover rounded-lg"
                height="192"
                src="/ajna.png"
                style={{
                  aspectRatio: "320/192",
                  objectFit: "cover",
                }}
                width="320"
              />
              <h3 className="mt-2 text-lg font-semibold">
                Ajna Chakra: definition and
                <br /> features
              </h3>
            </div>
            <div className="flex-shrink-0 w-80">
              <img
                alt="Yoga for PCOS"
                className="w-full h-48 object-cover rounded-lg"
                height="192"
                src="/ajna.png"
                style={{
                  aspectRatio: "320/192",
                  objectFit: "cover",
                }}
                width="320"
              />
              <h3 className="mt-2 text-lg font-semibold">
                Ajna Chakra: definition and
                <br /> features
              </h3>
            </div>
            <div className="flex-shrink-0 w-80">
              <img
                alt="Yoga for PCOS"
                className="w-full h-48 object-cover rounded-lg"
                height="192"
                src="/ajna.png"
                style={{
                  aspectRatio: "320/192",
                  objectFit: "cover",
                }}
                width="320"
              />
              <h3 className="mt-2 text-lg font-semibold">
                Ajna Chakra: definition and
                <br /> features
              </h3>
            </div>
            <div className="flex-shrink-0 w-80">
              <img
                alt="Yoga for PCOS"
                className="w-full h-48 object-cover rounded-lg"
                height="192"
                src="/ajna.png"
                style={{
                  aspectRatio: "320/192",
                  objectFit: "cover",
                }}
                width="320"
              />
              <h3 className="mt-2 text-lg font-semibold">
                Ajna Chakra: definition and
                <br /> features
              </h3>
            </div>
          </div>
        </div>

        <div className="flex space-x-60">
          <img src="chat.jpeg" className="size-60 mt-10" />
          <div className="mt-20">
            <h2 className="text-2xl text-orange-600 font-bold">
              Talk to our yoga counselors
            </h2>
            <h2 className="text-2xl text-orange-600 font-bold mt-5">
              We are here to help you.
            </h2>
            <button className="mt-8 bg-orange-500 text-white px-4 py-2 w-56 h-16  rounded-md">
              Whatsapp Us
            </button>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl text-orange-600 font-bold ">
            FAQs - Frequently Asked Questions
          </h2>

          <div>
            <div className="relative w-full mt-5">
              <button
                type="button"
                onClick={toggleSelect}
                className="flex justify-between w-full h-14 rounded-md border px-4 py-2 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
                id="faq-dropdown"
              >
                <span>How do I book a yoga class on Do Yoga?</span>
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              </button>
              {isOpen && (
                <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    Each course page gives you option to book trial class, book
                    monthly class or book for 3 months at 15% off. You can use
                    either of these options to book the class. Alternatively you
                    can book a trial class directly from the home page by
                    telling us your name and phone number and paying the trial
                    class fees. Our yoga counselor will reach you to assign the
                    right class for your health needs.
                  </div>
                </div>
              )}
            </div>
            <div className="relative w-full mt-5">
              <button
                type="button"
                onClick={toggleSelect}
                className="flex justify-between w-full h-14 rounded-md border px-4 py-2 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
                id="faq-dropdown"
              >
                <span>How do I book a yoga class on Do Yoga?</span>
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              </button>
              {isOpen && (
                <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    Each course page gives you option to book trial class, book
                    monthly class or book for 3 months at 15% off. You can use
                    either of these options to book the class. Alternatively you
                    can book a trial class directly from the home page by
                    telling us your name and phone number and paying the trial
                    class fees. Our yoga counselor will reach you to assign the
                    right class for your health needs.
                  </div>
                </div>
              )}
            </div>
            <div className="relative w-full mt-5">
              <button
                type="button"
                onClick={toggleSelect}
                className="flex justify-between w-full h-14 rounded-md border px-4 py-2 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
                id="faq-dropdown"
              >
                <span>How do I book a yoga class on Do Yoga?</span>
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              </button>
              {isOpen && (
                <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    Each course page gives you option to book trial class, book
                    monthly class or book for 3 months at 15% off. You can use
                    either of these options to book the class. Alternatively you
                    can book a trial class directly from the home page by
                    telling us your name and phone number and paying the trial
                    class fees. Our yoga counselor will reach you to assign the
                    right class for your health needs.
                  </div>
                </div>
              )}
            </div>
            <div className="relative w-full mt-5">
              <button
                type="button"
                onClick={toggleSelect}
                className="flex justify-between w-full h-14 rounded-md border px-4 py-2 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
                id="faq-dropdown"
              >
                <span>How do I book a yoga class on Do Yoga?</span>
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              </button>
              {isOpen && (
                <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    Each course page gives you option to book trial class, book
                    monthly class or book for 3 months at 15% off. You can use
                    either of these options to book the class. Alternatively you
                    can book a trial class directly from the home page by
                    telling us your name and phone number and paying the trial
                    class fees. Our yoga counselor will reach you to assign the
                    right class for your health needs.
                  </div>
                </div>
              )}
            </div>
            <div className="relative w-full mt-5">
              <button
                type="button"
                onClick={toggleSelect}
                className="flex justify-between w-full h-14 rounded-md border px-4 py-2 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
                id="faq-dropdown"
              >
                <span>How do I book a yoga class on Do Yoga?</span>
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              </button>
              {isOpen && (
                <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    Each course page gives you option to book trial class, book
                    monthly class or book for 3 months at 15% off. You can use
                    either of these options to book the class. Alternatively you
                    can book a trial class directly from the home page by
                    telling us your name and phone number and paying the trial
                    class fees. Our yoga counselor will reach you to assign the
                    right class for your health needs.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="font-bold">
            Unroll Your Mat, Unwind Your Mind: Embrace the World of Online Yoga
            Classes
          </p>
          <p>
            Imagine this: sun streaming through your window, your favorite
            playlist gently humming, and you, flowing through a yoga sequence,
            guided by an expert instructor, all from the comfort of your own
            living room. Sounds pretty dreamy, right? Well, welcome to the
            glorious world of online yoga classes – your passport to a journey
            of holistic wellness, accessible anytime, anywhere.
          </p>
          <p className="mt-5">
            Forget the days of battling gym timetables and crowded studios.
            Online yoga classes are a revolution in convenience, empowering you
            to cultivate your practice on your own terms. Whether you're a
            seasoned yogi seeking the familiar embrace of asanas or a curious
            newbie stepping onto the mat for the first time, these virtual
            studios have something for everyone.
          </p>

          <p className="font-bold mt-5">Why Choose Online Yoga Classes?</p>
          <p>
            1. Build Strength without Bulk: Yoga utilizes your bodyweight and
            gravity to challenge muscles in unique ways, leading to lean,
            defined strength without excessive bulk. Online yoga classes guide
            you through poses that target every muscle group, sculpting a strong
            and balanced physique.
          </p>
          <p className="mt-5">
            2. Improve Endurance and Flexibility: Dynamic yoga flows boost
            cardiovascular health, increase stamina, and enhance flexibility.
            You'll move with greater ease, power through challenging workouts,
            and reduce your risk of injuries.
          </p>
          <p className="mt-5">
            3. Challenge Yourself, Embrace Growth: Online yoga offers a variety
            of classes designed to challenge your physical limits and push you
            beyond your comfort zone. Embrace the thrill of mastering new poses,
            building strength, and discovering your body's incredible potential.
          </p>
          <p className="mt-5">
            4. Complement Your Fitness Routine: Yoga seamlessly integrates with
            other fitness activities, enhancing performance and recovery. Online
            yoga classes can improve your running form, increase flexibility for
            weightlifting, and promote faster muscle recovery.
          </p>
          <p className="mt-5">
            5. Find Joy in Movement: Online yoga encourages you to revel in the
            joy of movement, celebrating every progress and embracing the
            journey. You'll learn to appreciate your body's strength and
            resilience, cultivating a positive relationship with fitness.
          </p>
          <p className="font-bold mt-5">Why Choose Online Yoga Classes?</p>
          <p>
            1. Build Strength without Bulk: Yoga utilizes your bodyweight and
            gravity to challenge muscles in unique ways, leading to lean,
            defined strength without excessive bulk. Online yoga classes guide
            you through poses that target every muscle group, sculpting a strong
            and balanced physique.
          </p>
          <p className="mt-5">
            2. Improve Endurance and Flexibility: Dynamic yoga flows boost
            cardiovascular health, increase stamina, and enhance flexibility.
            You'll move with greater ease, power through challenging workouts,
            and reduce your risk of injuries.
          </p>
          <p className="mt-5">
            3. Challenge Yourself, Embrace Growth: Online yoga offers a variety
            of classes designed to challenge your physical limits and push you
            beyond your comfort zone. Embrace the thrill of mastering new poses,
            building strength, and discovering your body's incredible potential.
          </p>
          <p className="mt-5">
            4. Complement Your Fitness Routine: Yoga seamlessly integrates with
            other fitness activities, enhancing performance and recovery. Online
            yoga classes can improve your running form, increase flexibility for
            weightlifting, and promote faster muscle recovery.
          </p>
          <p className="mt-5">
            5. Find Joy in Movement: Online yoga encourages you to revel in the
            joy of movement, celebrating every progress and embracing the
            journey. You'll learn to appreciate your body's strength and
            resilience, cultivating a positive relationship with fitness.
          </p>
          <p className="font-bold mt-5">Why Choose Online Yoga Classes?</p>
          <p>
            1. Build Strength without Bulk: Yoga utilizes your bodyweight and
            gravity to challenge muscles in unique ways, leading to lean,
            defined strength without excessive bulk. Online yoga classes guide
            you through poses that target every muscle group, sculpting a strong
            and balanced physique.
          </p>
          <p className="mt-5">
            2. Improve Endurance and Flexibility: Dynamic yoga flows boost
            cardiovascular health, increase stamina, and enhance flexibility.
            You'll move with greater ease, power through challenging workouts,
            and reduce your risk of injuries.
          </p>
          <p className="mt-5">
            3. Challenge Yourself, Embrace Growth: Online yoga offers a variety
            of classes designed to challenge your physical limits and push you
            beyond your comfort zone. Embrace the thrill of mastering new poses,
            building strength, and discovering your body's incredible potential.
          </p>
          <p className="mt-5">
            4. Complement Your Fitness Routine: Yoga seamlessly integrates with
            other fitness activities, enhancing performance and recovery. Online
            yoga classes can improve your running form, increase flexibility for
            weightlifting, and promote faster muscle recovery.
          </p>
          <p className="mt-5">
            5. Find Joy in Movement: Online yoga encourages you to revel in the
            joy of movement, celebrating every progress and embracing the
            journey. You'll learn to appreciate your body's strength and
            resilience, cultivating a positive relationship with fitness.
          </p>
          <p className="font-bold mt-5">Why Choose Online Yoga Classes?</p>
          <p>
            1. Build Strength without Bulk: Yoga utilizes your bodyweight and
            gravity to challenge muscles in unique ways, leading to lean,
            defined strength without excessive bulk. Online yoga classes guide
            you through poses that target every muscle group, sculpting a strong
            and balanced physique.
          </p>
          <p className="mt-5">
            2. Improve Endurance and Flexibility: Dynamic yoga flows boost
            cardiovascular health, increase stamina, and enhance flexibility.
            You'll move with greater ease, power through challenging workouts,
            and reduce your risk of injuries.
          </p>
          <p className="mt-5">
            3. Challenge Yourself, Embrace Growth: Online yoga offers a variety
            of classes designed to challenge your physical limits and push you
            beyond your comfort zone. Embrace the thrill of mastering new poses,
            building strength, and discovering your body's incredible potential.
          </p>
          <p className="mt-5">
            4. Complement Your Fitness Routine: Yoga seamlessly integrates with
            other fitness activities, enhancing performance and recovery. Online
            yoga classes can improve your running form, increase flexibility for
            weightlifting, and promote faster muscle recovery.
          </p>
          <p className="mt-5">
            5. Find Joy in Movement: Online yoga encourages you to revel in the
            joy of movement, celebrating every progress and embracing the
            journey. You'll learn to appreciate your body's strength and
            resilience, cultivating a positive relationship with fitness.
          </p>
          <p className="font-bold mt-5">Why Choose Online Yoga Classes?</p>
          <p>
            1. Build Strength without Bulk: Yoga utilizes your bodyweight and
            gravity to challenge muscles in unique ways, leading to lean,
            defined strength without excessive bulk. Online yoga classes guide
            you through poses that target every muscle group, sculpting a strong
            and balanced physique.
          </p>
          <p className="mt-5">
            2. Improve Endurance and Flexibility: Dynamic yoga flows boost
            cardiovascular health, increase stamina, and enhance flexibility.
            You'll move with greater ease, power through challenging workouts,
            and reduce your risk of injuries.
          </p>
          <p className="mt-5">
            3. Challenge Yourself, Embrace Growth: Online yoga offers a variety
            of classes designed to challenge your physical limits and push you
            beyond your comfort zone. Embrace the thrill of mastering new poses,
            building strength, and discovering your body's incredible potential.
          </p>
          <p className="mt-5">
            4. Complement Your Fitness Routine: Yoga seamlessly integrates with
            other fitness activities, enhancing performance and recovery. Online
            yoga classes can improve your running form, increase flexibility for
            weightlifting, and promote faster muscle recovery.
          </p>
          <p className="mt-5">
            5. Find Joy in Movement: Online yoga encourages you to revel in the
            joy of movement, celebrating every progress and embracing the
            journey. You'll learn to appreciate your body's strength and
            resilience, cultivating a positive relationship with fitness.
          </p>
        </div>

        <div className="mt-20 space-x-4 text-orange-600">
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Refund Policy</a>
          <a href="#">Term & Conditions</a>
          <a href="#">Sign Up as teacher</a>
        </div>
      </div>
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="focus:outline-none absolute top-1/2 -translate-y-1/2 right-0 z-10"
      onClick={onClick}
    >
      <ChevronRightIcon className="text-gray-400 w-6 h-6" />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="focus:outline-none absolute top-1/2 -translate-y-1/2 left-0 z-10"
      onClick={onClick}
    >
      <ChevronLeftIcon className="text-gray-400 w-6 h-6" />
    </button>
  );
};

function TeacherCard({ name, location, experience, imageUrl }) {
  return (
    <div className="flex flex-col items-center flex-shrink-0">
      <img
        className="object-cover rounded-full w-44 h-44"
        src={imageUrl}
        alt={name}
      />
      <h3 className="mt-2 font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{location}</p>
      <p className="text-sm text-gray-500">Teaching for {experience}</p>
    </div>
  );
}

export default Home;
