import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginPay, register } from "@/store/AuthSlice";
import { useTranslation } from "react-i18next";
import CircularProgress from "@mui/material/CircularProgress";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { FireToast } from "@/lib/fireToast";

const style = {
  marginBottom: "20px",
};

const Login = (props) => {
  const [item, setItem] = useState(props.item);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isNew, setIsNew] = useState(true);
  const [checked, setChecked] = useState(false);
  const { loading } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checked) {
      FireToast("error", t("accept_terms"));
      return;
    }
    if (isNew) {
      dispatch(register(item));
    } else {
      dispatch(loginPay({ ...item, fcm_token: "test123" }));
    }
  };
  return (
    <>
      <h2>{t("sub_benefits")}</h2>
      <p>1- {t("sub_benefits1")}</p>
      <p>2- {t("sub_benefits2")}</p>
      <p>3- {t("sub_benefits3")}</p>
      <p>4- {t("sub_benefits4")}</p>
      <p>5- {t("sub_benefits5")}</p>
      <p>6- {t("sub_benefits6")}</p>
      <FormControl sx={{ my: 3 }}>
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

      <h3 style={style}>{isNew ? t("register") : t("login")}</h3>

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

      <Box>
        <FormControl sx={{ mb: 3 }}>
          <FormControlLabel
            value={checked}
            control={<Checkbox />}
            onChange={() => setChecked(!checked)}
            label={t("accept_privacy_policy")}
          />
        </FormControl>
      </Box>

      <Button variant="contained" onClick={handleSubmit}>
        {loading ? <CircularProgress /> : t("save")}
      </Button>
    </>
  );
};

export default Login;
