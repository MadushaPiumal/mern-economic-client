import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Product = (item) => {
  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.item.imgUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The carrot (Daucus carota) is a root vegetable often claimed to be
              the perfect health food. It is crunchy, tasty, and highly
              nutritious. Carrots are a particularly good source of beta
              carotene, fiber, vitamin K1, potassium, and antioxidants
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link
              to={`/product/${item.item._id}`}
              style={{ textDecoration: "none" }}
            >
              View Product
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Product;
