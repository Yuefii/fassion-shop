"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Heading from "../products/Heading";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };

  return (
    <div>
      <Heading title="Sign Up" />

      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="Email"
        type="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Button
        label={isLoading ? "Loading" : "Sign Up"}
        onClick={handleSubmit(onSubmit)}
      />
      <div className="mt-4">
        <Button
          outline
          label="Sign Up with GOOGLE"
          icon={FaGoogle}
          onClick={() => {}}
        />
      </div>
      <p className="text-sm mt-2">
        Already have account?{" "}
        <Link className="underline font-semibold" href="/auth/login">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default FormRegister;
