import React from 'react'
import {Box,Button,Typography} from '@mui/material'
import {styled} from '@mui/material'
import {Container} from '@mui/material'
import CustomButton from '../../components/CustomButton/CustomButton'
import welcome from '../../assets/welcome.png'


function Welcome() {
const CustomBox =styled(Box)(({theme}) => ({
  display:'flex',
  justifyContent:'center',
  gap:theme.spacing(3),
  marginTop:theme.spacing(3),
  [theme.breakpoints.down("md")]:{
    flexDirection: "column",
    alignItems: "center",
    textAligh:"center",
  },


}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  color: "#FFF",
  fontWeight: "bold",
  margin: theme.spacing(4, 0, 4, 0),
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
  },
}));


  return (
   <Box sx={{backgroundColor:"#FED801", minHeight: "80vh"}}>
    <Container>
    <CustomBox>
      <Box sx={{flex:'1'}}>
        <Typography variant='body2'
        sx={{
          fontSize:"18px",
          color:"#687690",
          fontWeight:"500",
          mt:10,
          mb:4,
        }}>
          Welcome to techflix Restorent
        </Typography>
        <Title variant='h1'>
          Discover a place where you'll love to Eat
        </Title>
        <Typography
        variant='body2' 
        sx={{
          fontSize:"18px" ,color:"#5A6473", my:4
        }}>
          fjfsjbfsjbfdsjbdsjfbdsmnbdasmdasmdjasbm sdbfjsbfjsdbfmsfjkascm,nsjkfas,mfnkjsnfm,,sfnjksdm,sf skj
        </Typography>
        <CustomButton 
        backgroundColor="#0F1B4C"
        color="#FFF"
        buttontext="More about us"
        welcomeBtn={true}
        />
      </Box>
      <Box sx={{flex:"1.25"}}>
        <img 
        src={welcome}
        alt='Welocme'
        style={{maxWidth:'100%', marginBottom:"2rem"}}
        />

      </Box>
      </CustomBox>
    </Container>
   </Box>
  )
}

export default Welcome
