"use client";
import logo from "@/asset/images/logo.png";
import { ForgotIcon, LeftArrowIcon } from "@/components/icons/auth-icons";
import {
  EyeFilledIcon,
  EyeSlashFilledIcon,
} from "@/components/icons/passwordHide";
import { Heading } from "@/components/ui/heading";
import { forgetSchema, newPasswordSchema } from "@/validations/auth/login.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import {SuperTable} from '../../components/ui/SuperTable';

type LoginFormForgetInput = z.infer<typeof newPasswordSchema>;
// data

export default function NewPassword() {
  const [isVisible1, setIsVisible1] = React.useState(false);
  const [isVisible2, setIsVisible2] = React.useState(false);
  const toggleVisibility1 = () => setIsVisible1(!isVisible1);
  const toggleVisibility2 = () => setIsVisible2(!isVisible2);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormForgetInput>({
    resolver: zodResolver(newPasswordSchema),
  });

  const onSubmit = (data:any) => {
    console.log("Forgetpassword");
  };
  const onSubmitFailure = (data:any) => {
    console.log("failed Forgetpassword");
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
          <div className="mt-14 flex flex-col w-72">
            <div className="flex justify-center mb-4">
              <ForgotIcon />
            </div>
            <div className="text-center">
              <Heading>Forget Password?</Heading>
              <p className="text-sm my-4">
              Your new password must be different to previously used passwords.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <Input
                className="max-w-xs"
                endContent={
                  <button
                    aria-label="toggle password visibility"
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility1}
                  >
                    {isVisible1 ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                label="Create New Password"
                labelPlacement="outside"
                placeholder="Enter your New password"
                type={isVisible1 ? "text" : "password"}
                variant="flat"
                {...register("newPassword")}
                isInvalid={!!errors.newPassword}
                errorMessage={errors.newPassword?.message}
              />
              {/* <PasswordInput /> */}
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <Input
                className="max-w-xs"
                endContent={
                  <button
                    aria-label="toggle password visibility"
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility2}
                  >
                    {isVisible2 ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                label="Password"
                labelPlacement="outside"
                placeholder="Enter your password"
                type={isVisible2 ? "text" : "password"}
                variant="flat"
                {...register("reEnterPassword")}
                isInvalid={!!errors.reEnterPassword}
                errorMessage={errors.reEnterPassword?.message}
              />
              {/* <PasswordInput /> */}
            </div>
            <Button
              type="submit"
              variant="solid"
              // color="primary"
              className="bg-btnColorProject text-white font-semibold mt-8"
              isLoading={isSubmitting}
            >
              Reset Password
            </Button>

            <div className="flex mt-5 justify-center">
              {/* <h4 className="text-base font-semibold"></h4> */}
              <Link
                href={{
                  pathname: "/login",
                  // query: { name: "forget-password" },
                }}
                className="text-xs text-textColor-default font-semibold"
              >
                <span className="flex items-center">
                  <span className="mr-4">
                    <LeftArrowIcon />
                  </span>
                  <span>Back to Login</span>
                </span>
              </Link>
            </div>
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
    </div>
  );
}
