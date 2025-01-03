"use client";
import React from "react";
import Image from "next/image";
import logo from "@/asset/images/logo.png";
import { Heading } from "@/components/ui/heading";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
// Zod Schema for validation
import { z } from "zod";
import { loginSchema } from "@/validations/auth/login.validation";
import { zodResolver } from "@hookform/resolvers/zod";
// store
import { useAuthStore } from "@/store/authStore";
// Other details
import { useForm } from "react-hook-form";
import { ApiLogin } from "@/apis/loginApi";
import {
  EyeFilledIcon,
  EyeSlashFilledIcon,
} from "@/components/icons/passwordHide";
import Cookies from "js-cookie";

// TypeScript types from zod schema
type LoginFormInputs = z.infer<typeof loginSchema>;

export default function Login() {
  const { login } = useAuthStore();
  const router = useRouter();

  // operational States
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    console.log("submit working");
    try {
      console.log("submit working");
      const result = await ApiLogin(data.email, data.password);
      const token = result?.access_token;
      Cookies.set("authToken", token);
      // store value
      login(token);
      console.log("token", token);

      router.push("/");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const onSubmitFailure = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col grow">
      <form
        onSubmit={handleSubmit(onSubmit, onSubmitFailure)}
        className="space-y-4"
      >
        <div className="p-5">
          <Image
            src={logo}
            width={212}
            height={33}
            alt="logo-TestDynamiz"
          ></Image>
        </div>
        <main className="flex flex-col gap-4 justify-center items-center">
          <div className="mt-20 flex flex-col w-72">
            <div className="">
              <Heading>Welcome back!</Heading>
              <p className="text-sm my-4">Login into your Account</p>
            </div>
            <div className="flex mt-2 flex-col gap-4">
              <Input
                label="Email"
                labelPlacement="outside"
                placeholder="Enter your Email"
                type="email"
                {...register("email")}
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message}
              />
              {/* <PasswordInput /> */}
              <Input
                className="max-w-xs"
                endContent={
                  <button
                    aria-label="toggle password visibility"
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                label="Password"
                labelPlacement="outside"
                placeholder="Enter your password"
                type={isVisible ? "text" : "password"}
                variant="flat"
                {...register("password")}
                isInvalid={!!errors.password}
                errorMessage={errors.password?.message}
              />
              <div className="flex mt-1 justify-end">
                {/* <h4 className="text-base font-semibold"></h4> */}
                <Link
                  href={{
                    pathname: "/forget-password",
                    // query: { name: "forget-password" },
                  }}
                  className="text-xs text-btnColorProject font-semibold"
                >
                  Forgot Password
                </Link>
              </div>
            </div>
            <Button
              type="submit"
              variant="solid"
              // color="primary"
              className="bg-btnColorProject text-white font-semibold mt-4"
              isLoading={isSubmitting}
            >
              Login
            </Button>
            {/* <Button
            type="submit"
            color="primary"
            // isLoading={isSubmitting}
            // onClick={onSubmit}
            >Login</Button> */}
          </div>
        </main>
      </form>
      {/* <SuperTable/> */}
      <div className="flex mt-12 text-center">
      <p>TestDynamiz simplifies your testing process, allowing you to automate and manage tests effortlessly.</p>
      </div>
    </div>
  );
}
