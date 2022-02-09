import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";

const Centre = (centre) => {
  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader          
          title={centre.centre.name}
          subheader={centre.centre.address}
        />
        <CardMedia
          component="img"
          height="194"
          image={centre.centre.imgUrl}
          alt="dambulla"
        />
        {/* <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent> */}
      </Card>
    </Box>
  );
};

export default Centre;
