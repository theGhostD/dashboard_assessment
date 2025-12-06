import { customInputProps } from "@/services/utils/interfaces";
import { images } from "@/theme";
import { Form, Input } from "antd";
import Image from "next/image";
import React from "react";

const formatVerificationCode = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 6);
  if (digits.length <= 3) {
    return digits;
  } else {
    return `${digits.slice(0, 3)} - ${digits.slice(3)}`;
  }
};

const CustomInput = ({
  isSubmitting,
  isError,
  setIsError,
  type,
  fieldName,
  label,
  placeholder,
}: customInputProps) => {
  return (
    <div>
      <Form.Item
        name={fieldName}
        label={
          <p className="text-[#181D27] lg:text-[14px] text-[14px] leading-[21px] font-normal ">
            {label}
          </p>
        }
        rules={
          type === "email"
            ? [
                {
                  validator: async (_, value) => {
                    if (
                      !value ||
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      )
                    ) {
                      if (setIsError) setIsError(false);
                      return Promise.resolve();
                    }
                    if (setIsError) setIsError(true);
                    return Promise.reject(new Error("Invalid Email"));
                  },
                  message: (
                    <div className="mt-1.5 flex justify-start items-center gap-2 ">
                      <Image
                        src={images.infoRed}
                        alt=""
                        width={14}
                        height={14}
                      />
                      <p className="text-[#E4626F] text-[12px] font-medium leading-5 ">
                        Invalid Email
                      </p>
                    </div>
                  ),
                  validateTrigger: ["onChange", "onBlur"],
                },
              ]
            : []
        }
      >
        <Input
          className={`text-[#181D27]! font-normal! text-[16px]! outline-none! w-full! shadow-none! placeholder:text-[#A0A3B1]! placeholder:font-normal! h-[41px]! py-2.5! px-3.5! border rounded-lg overflow-clip ${
            isError ? "border-[red]!" : "border-[#E9EAEB]!"
          }`}
          type={type}
          disabled={isSubmitting}
          placeholder={placeholder || ""}
          
        />
      </Form.Item>
    </div>
  );
};

export default CustomInput;
