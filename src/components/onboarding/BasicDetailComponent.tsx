"use client";

import React, { useState } from "react";
import {
  User,
  Lock,
  Upload,
  Eye,
  EyeOff,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import InputWithIcon from "../ui/InputWithIcon";
import { useForm } from "react-hook-form";
import z from "zod";
import { basicDetailSchemaValidation } from "@/validations/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserDetails } from "@/services/auth.service";
import { login } from "@/store/features/auth.slice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type FormData = z.infer<typeof basicDetailSchemaValidation>;

const BasicDetailComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [profilePicPreview, setProfilePicPreview] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePic(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(basicDetailSchemaValidation) });

  const onSubmitHandler = async (data: FormData) => {
    try {
      const user = await updateUserDetails({
        name: data.name,
        password: data.password,
      });
      if (user.success) {
        dispatch(login(user.data.user));
        router.push("/dashboard");
      } else {
        toast.error(user.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Just a few basic details
          </h2>
          <p className="text-gray-600">
            This won't take long - just the essentials to get you started!
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-6">
            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-gray-100">
                  {profilePicPreview ? (
                    <img
                      src={profilePicPreview}
                      alt="Profile preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="h-16 w-16 text-gray-400" />
                  )}
                </div>
                <label className="absolute bottom-2 right-2 bg-blue-500 rounded-full p-3 cursor-pointer hover:bg-blue-600 transition-colors shadow-lg">
                  <Upload className="h-5 w-5 text-white" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePicChange}
                    className="hidden"
                  />
                </label>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Upload your profile picture
              </p>
            </div>

            <InputWithIcon
              label="Name"
              type="text"
              placeholder="What should we call you?"
              register={register("name")}
              error={errors.name?.message}
              Icon={User}
            />

            <InputWithIcon
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              register={register("password")}
              error={errors.password?.message}
              Icon={showPassword ? EyeOff : Eye}
              onClickIcon={togglePasswordVisibility}
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center group"
            >
              Let's Go!
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicDetailComponent;
