import React from "react";
import {
  Box,
  Card,
  Container,
  CardContent,
  Typography,
  Grid
} from "@mui/material";
import { bigTeenz2 } from "../data/BottomCardData";



const BottomCard = (props) => {
  
  return (
    <Box sx={{ 
      marginTop:{xs:'75px', sm:'150px'}
       }}>
          <Container >
        
          <Typography sx={{
             fontSize: { xs: "24px", sm: "28px" },
             lineHeight: { xs: "28px" },
             fontWeight: { xs: "700" },
             paddingTop: {xs:"16px", sm: "24px"},
             paddingBottom: {xs:"16px", sm: "24px"}
           }}
           color = {props.mode? 'hsl(0, 0%, 100%)': ' hsl(230, 17%, 14%)'}>Overview - Today</Typography>
          <Grid container 
             spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {bigTeenz2.map((teenz) => {
              return (
                props.mode? (
                  <Grid item  xs={12} md={3} sx={{padding:{xs:'10px', sm:'20px'}}}>
                <Card
                  key={teenz.id}
                  sx={{
                    width: 260,
                    height: 200,
                    borderTop:` 5px solid ${teenz.bordertop}`,
                    backgroundColor: "hsl(228, 28%, 20%)",
                    "&:hover": {
                      backgroundColor: "hsl(228, 28%, 20%)",
                      opacity: 0.8,
                    }
                    
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
                </Card> </Grid>)
                : (
                  <Grid item  xs={12} md={3}
                  spacing={{ xs: 1, sm: 2, md: 4 }}>
                    <Card
                  key={teenz.id}
                  sx={{
                    width: 260,
                    height: 200,
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
                </Card> </Grid>) 
              );
            })}
          </Grid>
        
        </Container></Box>
      
  );
};

export default BottomCard