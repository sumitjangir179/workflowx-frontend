"use client";

import React, { useEffect } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/landing/Footer";
import { getCurrentUser } from "@/services/auth.service";
import { login } from "@/store/features/auth.slice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

function App() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        if (user.success) {
          dispatch(login(user.data));
          router.push("/dashboard");
        }else{
          router.push("/");
        }
      })
      .catch((error) => {
        console.error("Error fetching current user:", error);
        router.push("/");
      });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default App;
