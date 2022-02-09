import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useParams } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ItemComponent = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Item = (item) => {
    const { centreId } = useParams();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box
        backgroundColor="lightgreen"
        sx={{
          p: 0.5,
        }}
      >
        <Stack sx={{ width: "100%" }}>
          <ItemComponent
            sx={{
              p: 2,
            }}
          >
            {item.item.name.name}
            <Button variant="contained" color="success" sx={{ m: 1 }}>
              Rs. {item.item.price} /=
            </Button>
            <Button onClick={handleOpen}>VIEW</Button>
            <Link to={`/graph/${centreId}/${item.item.name._id}`} style={{ textDecoration: "none" }}>view graph </Link>
          </ItemComponent>
        </Stack>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {item.item.name.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Rs. {item.item.price} /=
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Item;
