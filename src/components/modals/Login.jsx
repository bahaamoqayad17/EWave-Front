import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginPay } from "@/store/AuthSlice";

const style = {
  marginBottom: "20px",
};

const Login = (props) => {
  const [item, setItem] = useState(props.item);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginPay({ ...item, fcm_token: "test123" }));
  };
  return (
    <>
      <h1 style={style}>Login</h1>

      <TextField
        label="Email"
        name="email"
        fullWidth
        value={item?.email}
        type="email"
        onChange={handleChange}
        style={style}
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        fullWidth
        value={item?.password}
        onChange={handleChange}
        style={style}
      />

      <Button variant="contained" onClick={handleSubmit}>
        Save
      </Button>
    </>
  );
};

export default Login;
