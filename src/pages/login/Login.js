import React from "react";
import "./login.css";
import { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ name: "", password: "" });
  const handleChange = (e) => {
    if (e.target.type === "text") {
      setUser({ ...user, name: e.target.value });
      console.log(user);
    } else if (e.target.type === "password") {
      setUser({ ...user, password: e.target.value });
      console.log(user);
    }
  };
  const navigate = useNavigate();
  const handleClick = () => {
    if (user.name === "") {
      alert("Email boş bırakılamaz");
    } else if (user.password === "") {
      alert("Şifre boş bırakılamaz");
    } else {
      alert("Email: " + user.name + "  Şifre: " + user.password);
      navigate("/");
    }
  };
  return (
    <div className="login">
      <Form title={"Giriş Formu"}>
        <Input
          type={"text"}
          placeholder={"Email"}
          onChange={handleChange}
          value={user.name}
        />
        <Input
          type={"password"}
          placeholder={"Şifre"}
          onChange={handleChange}
          value={user.password}
        />
        <Button onClick={handleClick} title={"Giriş Yap"} />
      </Form>
    </div>
  );
}

export default Login;
