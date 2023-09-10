import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/store/CategorySlice";
import Autocomplete from "@mui/material/Autocomplete";

import {
  addRecommendation,
  updateRecommendation,
} from "@/store/RecommendationSlice";
import { MenuItem } from "@mui/material";

const style = {
  marginBottom: "20px",
};

const EditRecommendation = (props) => {
  const [item, setItem] = useState(props.item);
  const [image, setImage] = useState(item?.image);
  const dispatch = useDispatch();
  const { categories } = useSelector(({ categories }) => categories);
  const [expire, setExpire] = useState(props.item?.expire_time.split(" ")[1]);
  const [expireNum, setExpireNum] = useState(
    props.item?.expire_time.split(" ")[0]
  );

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setItem({ ...item, image: file });
      setImage(URL.createObjectURL(file));
    } else {
      setItem({ ...item, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("expire_time", expireNum + " " + expire);
    formData.append("image", item?.image);
    formData.append("name", item?.name);
    formData.append("trade_style", item?.trade_style);
    formData.append("status", item?.status);
    formData.append("action", item?.action);
    formData.append("open_price", item?.open_price);
    formData.append("first_target_price", item?.first_target_price);
    formData.append("second_target_price", item?.second_target_price);
    formData.append("stop_loss", item?.stop_loss);
    formData.append("risk_per_trade", item?.risk_per_trade);
    formData.append("trade_result", item?.trade_result);
    formData.append("win_rate", item?.win_rate);
    formData.append("category", item?.category);
    formData.append("comment", item?.comment);
    formData.append("last_update", item?.last_update);
    formData.append("opening_time", item?.opening_time);
    formData.append("is_paid", item?.is_paid);

    if (item._id) {
      formData.append("_id", item._id);
      dispatch(updateRecommendation({ item: formData, id: item._id }));
    } else {
      dispatch(addRecommendation({ formData, is_paid: item?.is_paid }));
    }
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <h1 style={style}>Recommendation</h1>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={item?.name}
          onChange={handleChange}
          style={style}
          sx={{ width: "24%" }}
        />

        <FormControl variant="outlined" sx={{ width: "24%" }} style={style}>
          <InputLabel htmlFor="input-group">Trade Style</InputLabel>

          <Select
            label="Select"
            value={item?.trade_style}
            onChange={handleChange}
            name="trade_style"
            fullWidth
          >
            <MenuItem value="0">Swing Trade</MenuItem>
            <MenuItem value="1">Interday</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ width: "24%" }} style={style}>
          <InputLabel htmlFor="input-group">Status</InputLabel>

          <Select
            label="Select"
            value={item?.status}
            onChange={handleChange}
            name="status"
            fullWidth
          >
            <MenuItem value="0">Pending</MenuItem>
            <MenuItem value="1">Active</MenuItem>
            <MenuItem value="2">Expired</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ width: "24%" }} style={style}>
          <InputLabel htmlFor="input-group">Action</InputLabel>

          <Select
            label="Select"
            value={item?.action}
            onChange={handleChange}
            name="action"
            fullWidth
          >
            <MenuItem value="Buy">Buy</MenuItem>
            <MenuItem value="Sell">Sell</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TextField
          label="Open Price"
          variant="outlined"
          name="open_price"
          fullWidth
          type="number"
          value={item?.open_price}
          onChange={handleChange}
          style={style}
          sx={{ width: "24%" }}
        />

        <TextField
          label="First Target Price"
          variant="outlined"
          name="first_target_price"
          type="number"
          fullWidth
          value={item?.first_target_price}
          onChange={handleChange}
          style={style}
          sx={{ width: "25%" }}
        />

        <TextField
          label="Second Target Price"
          variant="outlined"
          name="second_target_price"
          fullWidth
          type="number"
          value={item?.second_target_price}
          onChange={handleChange}
          style={style}
          sx={{ width: "25%" }}
        />

        <TextField
          label="Stop Loss"
          variant="outlined"
          name="stop_loss"
          fullWidth
          type="number"
          value={item?.stop_loss}
          onChange={handleChange}
          style={style}
          sx={{ width: "24%" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TextField
          label="Rist Per Trade"
          variant="outlined"
          name="risk_per_trade"
          type="number"
          value={item?.risk_per_trade}
          onChange={handleChange}
          style={style}
          sx={{ width: "24%" }}
        />

        <FormControl variant="outlined" sx={{ width: "24%" }} style={style}>
          <InputLabel htmlFor="input-group">Trade Result</InputLabel>

          <Select
            label="Select"
            value={item?.trade_result}
            onChange={handleChange}
            name="trade_result"
            fullWidth
          >
            <MenuItem value="0">Waiting</MenuItem>
            <MenuItem value="1">Break even</MenuItem>
            <MenuItem value="2">Target 1</MenuItem>
            <MenuItem value="3">Target 2</MenuItem>
            <MenuItem value="4">Stop loss</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Win Rate"
          variant="outlined"
          name="win_rate"
          fullWidth
          type="number"
          value={item?.win_rate}
          onChange={handleChange}
          style={style}
          sx={{ width: "24%" }}
        />

        <FormControl variant="outlined" sx={{ width: "24%" }} style={style}>
          <InputLabel htmlFor="input-group">Paid Or Free</InputLabel>

          <Select
            label="Select"
            value={item?.is_paid}
            onChange={handleChange}
            name="is_paid"
            fullWidth
          >
            <MenuItem value="0">Free</MenuItem>
            <MenuItem value="1">Paid</MenuItem>
            <MenuItem value="2">All</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          label="Expired Time"
          variant="outlined"
          name="expire_time"
          value={expireNum}
          onChange={(e) => setExpireNum(e.target.value)}
          style={style}
        />
        <FormControl variant="outlined" sx={{ width: "24%" }} style={style}>
          <InputLabel htmlFor="input-group">Days Or Hours</InputLabel>

          <Select
            label="Select"
            value={expire}
            onChange={(e) => setExpire(e.target.value)}
            fullWidth
          >
            <MenuItem value="Days">Days</MenuItem>
            <MenuItem value="Hours">Hours</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ width: "24%" }} style={style}>
          <InputLabel htmlFor="input-group">Market</InputLabel>

          <Select
            label="Select"
            value={item?.category}
            onChange={handleChange}
            name="category"
            fullWidth
          >
            {categories.map((item) => (
              <MenuItem key={item} value={item._id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box display={"flex"}>
        <Box mb={5}>
          <p>Last Update</p>
          <input
            type="datetime-local"
            name="last_update"
            onChange={handleChange}
            value={item?.last_update}
            style={{ padding: "15px", marginBottom: "20px" }}
          />
          <p>{new Date(item?.last_update).toLocaleString()}</p>
        </Box>
        &nbsp;&nbsp;
        <Box>
          <p>Opening Time</p>
          <input
            type="datetime-local"
            name="opening_time"
            onChange={handleChange}
            value={item?.opening_time}
            style={{ padding: "15px", marginBottom: "20px" }}
          />
          <p>{new Date(item?.opening_time).toLocaleString()}</p>
        </Box>
      </Box>

      <TextField
        label="Comment"
        variant="outlined"
        name="comment"
        fullWidth
        multiline
        rows={5}
        value={item?.comment}
        onChange={handleChange}
        style={style}
      />

      <Box sx={style}>
        <input type="file" name="image" onChange={handleChange} />
        <br />
        {image && (
          <img
            src={image}
            alt="Selected Image"
            style={{ width: "100px", height: "auto" }}
          />
        )}
      </Box>

      <Button variant="contained" onClick={handleSubmit}>
        Save
      </Button>
    </>
  );
};

export default EditRecommendation;
