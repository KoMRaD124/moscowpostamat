import React from "react";
import styles from "./Input.module.scss"
import { dontShowPass, showPass } from "../../../assets/img";
export const Input = ({ type, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ position: 'relative', with:"100%"}}>
    <input className={styles.input}
      type={showPassword ? 'text' : type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {type === 'password' && (
      <button
      onClick={handleTogglePassword}
      style={{
        position: 'absolute',
        top: '62%',
        right: '26px',
        transform: 'translateY(-50%)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {showPassword ? (
        <img src={showPass} alt="пароль скрыт" /> // иконка при скрытом пароле
      ) : (
        <img src={dontShowPass} alt="пароль показан" /> // иконка при показанном пароле
      )}
    </button>
    )}
  </div>
);
};