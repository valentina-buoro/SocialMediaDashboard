import React from 'react'
import './index.css'
import BottomCard from './components/BottomCard';
import TopCard from './components/TopCard';
import {
  Box,
  Container,
  Stack,
  Switch,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

function App() {
  const [mode , setMode] = React.useState(false)
  const toggle = ()=>{
    setMode(!mode)
  }
  return (
    <Box
      fontFamily="'Inter', sans-serif"
      backgroundColor = {mode? 'hsl(230, 17%, 14%)': 'hsl(0, 0%, 100%)'} 
    >
    <Container
     
     sx={{
       maxWidth: { xs: "84%", sm: "90%", md: "84%" },
       
     }}
     backgroundColor = {mode? 'hsl(232, 19%, 15%)' : 'hsl(225, 100%, 98%)'}
   >
     <Box
       sx={{ display: "flex", 
       flexDirection: { xs: "column", sm: "row" },
         paddingTop:{xs:'16px'} }}
     >
       <Stack sx={{ width: { sm: "50%" } }}>
         <Typography
           sx={{
             fontSize: { xs: "24px", sm: "28px" },
             lineHeight: { xs: "28px" },
             fontWeight: { xs: "700" },
           }}
           color = {mode? 'hsl(0, 0%, 100%)': ' hsl(230, 17%, 14%)'}
         >
           Social Media Dashboard
         </Typography>
         <Typography
         >Total No. of followers</Typography>
       </Stack>
       <Box sx={{ width: { sm: "50%" } }}>
         <FormGroup>
           <FormControlLabel
             value="top"
             control={<Switch color="primary" />}
             label="Top"
             labelPlacement="right"
             onChange = {toggle}
           />
         </FormGroup>
       </Box>
       </Box>

    
    <TopCard mode = {mode}/> 
    <BottomCard mode = {mode}/>
    </Container>
    </Box>
  );
}

export default App;


