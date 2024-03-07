"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative my-4">
      <input
        id={id}
        autoComplete="off"
        disabled={disabled}
        {...register(id, { required })}
        type={type}
        placeholder=""
        className={`w-full peer p-4 pt-6 outline-none bg-white font-light rounded-md border-2 transition disabled:opacity-70 disabled:cursor-not-allowed 
        ${errors[id] ? "border-rose-400" : "border-gray-300"} 
        ${errors[id] ? "focus:border-rose-400" : "focus:border-gray-300"}`}
      />
      <label
        className={`absolute cursor-text text-md duration-150 transform -translate-y-3 top-5 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 
        ${errors[id] ? "focus:border-rose-400" : "focus:border-gray-300"}`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
