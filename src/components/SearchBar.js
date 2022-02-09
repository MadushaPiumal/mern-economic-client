import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCertreDetails } from "../redux/actions/centreActions";
import { useParams } from "react-router-dom";
import { listItems } from "../redux/actions/itemActions";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SearchBar = () => {
  const { centreId } = useParams();
  const [date, setDate] = useState("");
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filterHandler = () => {
    dispatch(filterCertreDetails(centreId, date, search));
  };

  const itemList = useSelector((state) => state.itemList);
  const { items } = itemList;

  useEffect(() => {
    dispatch(listItems());
  }, [dispatch]);

  return (
    <AppBar position="static" color="default">
      <Container sx={{ m: 2 }} justify="center">
        <Toolbar disableGutters>
          <Box
            sx={{ flexGrow: 1, display: { md: "flex" } }}
            alignItems="center"
            justifyContent="center"
          >
            <Stack spacing={2} component="form" noValidate>
              <TextField
                id="date"
                label="pick date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>

            <Box sx={{ minWidth: 170 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Product
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={search}
                  label="Age"
                  onChange={handleChange}
                >
                  {items?.map((item) => (
                    <MenuItem key={item._id} value={item._id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Button variant="outlined" onClick={() => filterHandler()}>
              Filter
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default SearchBar;
