"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { X } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef();

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="pt-10 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-7xl lg:text-[70px] pb-6 gradient-title">
          Take Control of Your Money <br /> with AI Precision
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          {/* <Button
            size="lg"
            variant="outline"
            className="px-8"
            onClick={() =>
              toast("🚀 Demo launching soon!", {
                description: "We're polishing the AI experience. Stay tuned!",
              })
            }
           
          >
            Watch Demo
          </Button> */}
          <Button
            size="lg"
            variant="outline"
            className="px-8"
            onClick={() =>
              toast.custom((t) => (
                <div className="relative bg-white p-4 rounded-lg shadow-md w-[300px]">
                  {/* Close Button */}
                  <button
                    onClick={() => toast.dismiss(t)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-black"
                  >
                    <X size={18} />
                  </button>

                  <p className="font-semibold">🚀 Demo launching soon!</p>
                  <p className="text-sm text-gray-600">
                    We're polishing the AI experience. Stay tuned!
                  </p>
                </div>
              ))
            }
          >
            Watch Demo
          </Button>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            {/* <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            /> */}
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-xl shadow-2xl border mx-auto max-w-4xl w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
