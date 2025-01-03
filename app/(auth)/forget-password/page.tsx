"use client";
import logo from "@/asset/images/logo.png";
import { ForgotIcon, LeftArrowIcon } from "@/components/icons/auth-icons";
import { Heading } from "@/components/ui/heading";
import { forgetSchema } from "@/validations/auth/login.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
// import {SuperTable} from '../../components/ui/SuperTable';

type LoginFormForgetInput = z.infer<typeof forgetSchema>;
// data

export default function ForgetPassword() {

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormForgetInput>({
    resolver: zodResolver(forgetSchema),
  });

  const onSubmit = (data:any) => {
    console.log("Forgetpassword",data);
    router.push('/new-password')
  };
  const onSubmitFailure = (data:any) => {
    console.log("failed Forgetpassword",data);
    // router.push('/new-password')
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
            <div className="flex justify-center mb-4">
              <ForgotIcon />
            </div>
            <div className="text-center">
              <Heading>Forget Password?</Heading>
              <p className="text-sm my-4">
                No worries, We'll send you reset instruction.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <Input
                label="Email"
                size="lg"
                labelPlacement="outside"
                placeholder="Enter your email"
                type="email"
                {...register("email")}
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message}
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
                <span className="mr-4"><LeftArrowIcon/></span><span>Back to Login</span>
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
