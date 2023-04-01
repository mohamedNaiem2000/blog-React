import React from "react";
import "./Input.css";
function Input({ label, value, onChange, name, type, placeholder }) {
  return (
    <div className="form-control w-full max-w-xs">
      <label htmlFor={name} className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className="input input-bordered w-full max-w-xs"
        placeholder={placeholder}
        accept="image/*"
        required
      />
    </div>
  );
}

export default Input;
