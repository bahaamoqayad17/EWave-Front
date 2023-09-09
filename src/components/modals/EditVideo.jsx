import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useDispatch } from "react-redux";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { addVideo, updateVideo } from "@/store/VideoSlice";

const style = {
  marginBottom: "20px",
};

const EditVideo = (props) => {
  const [item, setItem] = useState(props.item);
  const [image, setImage] = useState(item?.image);
  const dispatch = useDispatch();

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
    formData.append("image", item?.image);
    formData.append("url", item?.url);
    formData.append("title", item?.title);
    formData.append("pinned", item?.pinned);
    formData.append("status", item?.status);
    if (item._id) {
      formData.append("_id", item._id);
      dispatch(updateVideo({ item: formData, id: item._id }));
    } else {
      dispatch(addVideo(formData));
    }
  };
  return (
    <>
      <h1 style={style}>Video</h1>

      <TextField
        label="Link"
        variant="outlined"
        name="url"
        fullWidth
        value={item?.url}
        onChange={handleChange}
        style={style}
      />

      <TextField
        label="Title"
        variant="outlined"
        name="title"
        fullWidth
        value={item?.title}
        onChange={handleChange}
        style={style}
      />

      <FormControl variant="outlined" fullWidth style={style}>
        <InputLabel htmlFor="outlined-age-native-simple">
          Pinned Or Not
        </InputLabel>
        <Select
          native
          name="pinned"
          value={item?.pinned}
          onChange={handleChange}
        >
          <option value={0}>Not Pinned</option>
          <option value={1}>Pinned</option>
        </Select>
      </FormControl>

      <FormControl variant="outlined" fullWidth style={style}>
        <InputLabel htmlFor="outlined-age-native-simple">
          Free Or Paid
        </InputLabel>
        <Select
          native
          name="status"
          value={item?.status}
          onChange={handleChange}
        >
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
          <option value="All">All</option>
        </Select>
      </FormControl>

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

export default EditVideo;
