import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginPay, register } from "@/store/AuthSlice";
import { useTranslation } from "react-i18next";

const style = {
  marginBottom: "20px",
};

const Login = (props) => {
  const [item, setItem] = useState(props.item);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isNew, setIsNew] = useState(true);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNew) {
      dispatch(register(item));
    } else {
      dispatch(loginPay({ ...item, fcm_token: "test123" }));
    }
  };
  return (
    <>
      <FormControl sx={{ mb: 3 }}>
        <RadioGroup row value={isNew} onChange={() => setIsNew(!isNew)}>
          <FormControlLabel
            value={true}
            control={<Radio />}
            label={t("new_user")}
          />
          <FormControlLabel
            value={false}
            control={<Radio />}
            label={t("old_user")}
          />
        </RadioGroup>
      </FormControl>

      <h1 style={style}>{isNew ? t("register") : t("login")}</h1>

      {isNew ? (
        <>
          <TextField
            label={t("email")}
            name="email"
            fullWidth
            value={item?.email}
            type="email"
            onChange={handleChange}
            style={style}
          />

          <TextField
            label={t("password")}
            name="password"
            type="password"
            fullWidth
            value={item?.password}
            onChange={handleChange}
            style={style}
          />
          <TextField
            label={t("passwordConfirm")}
            name="passwordConfirm"
            type="password"
            fullWidth
            value={item?.passwordConfirm}
            onChange={handleChange}
            style={style}
          />
        </>
      ) : (
        <>
          <TextField
            label={t("email")}
            name="email"
            fullWidth
            value={item?.email}
            type="email"
            onChange={handleChange}
            style={style}
          />

          <TextField
            label={t("password")}
            name="password"
            type="password"
            fullWidth
            value={item?.password}
            onChange={handleChange}
            style={style}
          />
        </>
      )}

      <Button variant="contained" onClick={handleSubmit}>
        Save
      </Button>
    </>
  );
};

export default Login;
