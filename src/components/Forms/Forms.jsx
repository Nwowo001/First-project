import React, { useState } from "react";
import "./Forms.css";
import background from "../../assets/background.jpg";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import ButtonComponent from "../Button/ButtonComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Forms = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setErrors({ ...errors, terms: "" });
    }
  };

  const handleChange = ({ target: { id, value } }) => {
    setFormData({ ...formData, [id]: value });
    if (errors[id]) {
      setErrors({ ...errors, [id]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.surname.trim()) {
      newErrors.surname = "Surname is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!isChecked) {
      newErrors.terms = "You must agree to the Terms & Conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:5000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        alert(result.message);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://accounts.google.com/signin";
  };

  const handleAppleLogin = () => {
    window.location.href = "https://appleid.apple.com/account/signin";
  };

  return (
    <div className="form-container">
      <div className="info">
        <div className="background">
          <img src={background} alt="Background" />
        </div>
        <div className="container">
          <div className="header">
            <h1>Create an account</h1>
          </div>
          <div className="text">
            <p>
              Already have an account?{" "}
              <span>
                <a href="/login">Login</a>
              </span>
            </p>
          </div>
          <form className="inputs" onSubmit={handleSubmit}>
            <div className="username">
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
              <input
                id="surname"
                type="text"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleChange}
              />
              {errors.surname && <p className="error">{errors.surname}</p>}
            </div>
            <div className="address">
              <input
                id="email"
                type="email"
                placeholder="someone@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="password">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Suggest a strong password"
                value={formData.password}
                onChange={handleChange}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                {showPassword ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </span>
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="box">
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <p>
                  I agree to the <span>Terms & Conditions</span>
                </p>
              </label>
              {errors.terms && <p className="error">{errors.terms}</p>}
            </div>
            <ButtonComponent
              backgroundColor="hsl(238, 37%, 34%)"
              fontSize="16px"
              borderRadius="5px"
              color="white"
              border="none"
              margin="10px"
              padding="17px 30px"
              cursor="pointer"
              fontFamily="Arial"
              className="create-account"
              type="submit"
            >
              Create account
            </ButtonComponent>

            <div className="footer">
              <p>Or register with</p>
            </div>
            <div className="alternative-buttons">
              <ButtonComponent
                backgroundColor="hsla(237, 19%, 22%, 0.957)"
                fontSize="16px"
                borderRadius="8px"
                color="white"
                border="1px solid white"
                margin="10px"
                padding="0px 30px"
                cursor="pointer"
                fontFamily="Arial"
                className="google"
                onClick={handleGoogleLogin}
              >
                <img src={google} alt="Google" />
                <span>Continue with Google</span>
              </ButtonComponent>
              <ButtonComponent
                backgroundColor="hsla(237, 19%, 22%, 0.957)"
                fontSize="16px"
                borderRadius="8px"
                color="white"
                border="1px solid white"
                margin="10px"
                padding="0px 30px"
                cursor="pointer"
                fontFamily="Arial"
                className="apple"
                onClick={handleAppleLogin}
              >
                <img src={apple} alt="Apple" />
                <span>Continue with Apple</span>
              </ButtonComponent>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forms;
