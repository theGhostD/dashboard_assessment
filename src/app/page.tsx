"use client";
import { images } from "@/theme";
import { Form, Input } from "antd";
import Image from "next/image";
import CustomInput from "./components/customInput/input";
import CustomBtn from "./components/customBtn";
import Cookies from "js-cookie";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);
  const [isloading, setisloading] = useState(false);
  const [isError,setIsError] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    setisloading(true);
    try {
      setTimeout(() => {
        localStorage.setItem("userDetails", JSON.stringify(values));
        Cookies.set("ABCD",btoa(JSON.stringify(values)));
        router.push('/customers')
      }, 2000);
    } catch (error) {}
  };
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center  md:w-[600px] w-[90%] mx-auto p-5 md:p-8 lg:p-10 rounded-2xl shadow fade-in bg-white border-[#E9EAEB] border ">
        <Image src={images.logo} alt="logo" width={159} height={39} />
        <p className="text-[#000000] text-[24px] font-normal text-center mt-2 ">
          Welcome Back Evano 👋🏼,
        </p>

        <Form
          form={form}
          layout="vertical"
          className="flex flex-col w-full gap-4 mt-4!"
        >
          <CustomInput
            fieldName="email"
            label="Email Address"
            type="email"
            placeholder="Enter email"
            isSubmitting={isloading}
            setIsError={setIsError}
            isError={isError}

            
          />

          <Form.Item
            name={"password"}
            label={
              <p className="text-[#181D27] lg:text-[14px] text-[14px] leading-[21px] font-normal ">
                Enter Password
              </p>
            }
          >
            <Input.Password
              className={`text-[#181D27]! font-normal! text-[16px]! outline-none! shadow-none! placeholder:text-[#A0A3B1]! placeholder:font-normal! h-[41px]! py-2.5! px-3.5! border border-[#E9EAEB] rounded-lg overflow-clip w-full!`}
              disabled={isloading}
              placeholder="password"
            />
          </Form.Item>

          <CustomBtn
            handleSubmit={() => handleSubmit()}
            text="Login"
            variant="filled"
            disable={!values || !values.email || !values?.password || isloading || isError}
            loading={isloading}
          />
        </Form>
      </div>
    </div>
  );
}
