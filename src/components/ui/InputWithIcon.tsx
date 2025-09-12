import React from "react";

type Props = {
  label?: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  Icon?: React.ElementType;
};

const InputWithIcon = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
  Icon,
}: Props) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={label.toLowerCase()}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {" "}
          {label}{" "}
        </label>
      )}

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {Icon && <Icon className="h-5 w-5 text-gray-400" />}
        </div>
        <input
          id={label?.toLowerCase()}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-gray-900"
          placeholder={placeholder}
          name={label?.toLowerCase()}
        />
      </div>
    </div>
  );
};

export default InputWithIcon;
