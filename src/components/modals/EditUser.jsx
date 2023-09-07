import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "@/store/UserSlice";

const style = {
  marginBottom: "20px",
};

const EditUser = (props) => {
  const [item, setItem] = useState(props.item);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (item._id) {
      dispatch(updateUser(item));
    }
  };
  return (
    <>
      <h1 style={style}>User</h1>

      <FormControl variant="outlined" fullWidth style={style}>
        <InputLabel htmlFor="outlined-age-native-simple">
          Admin Or User
        </InputLabel>
        <Select native name="role" value={item?.role} onChange={handleChange}>
          <option value="user">User</option>
          <option value="Admin">Admin</option>
        </Select>
      </FormControl>

      <FormControl variant="outlined" fullWidth style={style}>
        <InputLabel htmlFor="outlined-age-native-simple">
          Free Or Paid
        </InputLabel>
        <Select
          native
          name="is_paid"
          value={item?.is_paid}
          onChange={handleChange}
        >
          <option value="1">Paid</option>
          <option value="0">Free</option>
        </Select>
      </FormControl>

      <Button variant="contained" onClick={handleSubmit}>
        Save
      </Button>
    </>
  );
};

export default EditUser;
