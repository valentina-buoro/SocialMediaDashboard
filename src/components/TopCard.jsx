import React from "react";
import {
  Box,
  Container,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { bigTeenz1 } from "../data/BottomCardData";



const TopCard = (props) => {
  
  return (
   
        <Box sx={{ position:'absolute',
        top:{xs:'75px', sm:'150px'}}}>
          <Container >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-around"
            alignItems="center"
          >
            {bigTeenz1.map((teenz) => {
              return (
                props.mode? (
                <Card
                  key={teenz.id}
                  sx={{
                    width: 300,
                    height: 300,
                    borderTop:` 5px solid ${teenz.bordertop}`,
                    backgroundColor: "hsl(228, 28%, 20%)",
                    "&:hover": {
                      backgroundColor: "hsl(228, 28%, 20%)",
                      opacity: 0.8,
                    },
                  }}
                >
                  <CardContent ><Typography color = 'hsl(228, 34%, 66%)'>{teenz.socialMedia}</Typography></CardContent>
                  <CardContent>
                    <Typography  color = 'hsl(0, 0%, 100%)' sx={{
                fontSize: { xs: "28px", sm: "32px" },
                lineHeight: { xs: "28px" },
                fontWeight: { xs: "700" },
              }}>{teenz.followerCount}</Typography>
                    <Typography color='hsl(228, 12%, 44%)'>{teenz.followers}</Typography></CardContent>
                  <CardContent><Typography color= 'hsl(163, 72%, 41%)'>{teenz.increase}</Typography></CardContent>
                </Card>)
                : (<Card
                  key={teenz.id}
                  sx={{
                    width: 300,
                    height: 300,
                    borderTop:` 5px solid ${teenz.bordertop}`,
                    backgroundColor: "hsl(227, 47%, 96%)",
                    "&:hover": {
                      backgroundColor: "hsl(227, 47%, 96%)",
                      opacity: 0.8,
                    },
                  }}
                >
                  <CardContent  color = {props.mode? 'hsl(0, 0%, 100%)': ' hsl(230, 17%, 14%)'}>{teenz.socialMedia}</CardContent>
                  <CardContent>
                    <Typography  color = {props.mode? 'hsl(0, 0%, 100%)': ' hsl(230, 17%, 14%)'} sx={{
                fontSize: { xs: "28px", sm: "32px" },
                lineHeight: { xs: "28px" },
                fontWeight: { xs: "700" },
              }}>{teenz.followerCount}</Typography>
                    <Typography color='hsl(228, 12%, 44%)'>{teenz.followers}</Typography></CardContent>
                  <CardContent><Typography color= 'hsl(163, 72%, 41%)'>{teenz.increase}</Typography></CardContent>
                </Card>)
              );
            })}
          </Stack>
          </Container>
        
    </Box>
  );
};

export default TopCard