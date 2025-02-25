import React from 'react'
import { Typography } from '@mui/material'
import {Box,Container} from '@mui/system'
import {styled} from '@mui/system'

import fbIcon from "../../assets/facebook.png"
import twitterIcon from "../../assets/twitter.png"
import linkedinIcon from "../../assets/instagram.png"


function Footer() {

    const CustomContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-around",
        gap: theme.spacing(5),
        paddingTop: theme.spacing(4), // Adds space at the top
        paddingBottom: theme.spacing(4), // Adds space at the bottom
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            textAlign: "center",
        },
    }));
    

    const IconBox= styled(Box)(({ theme }) => ({
       display:"flex",
       alignItems:"center",
       gap:"1rem",

        [theme.breakpoints.down("sm")]: {
           justifyContent: 'center'
        },
    }));

    const FooterLink= styled("span")(({ theme }) => ({
        fontsize:"16px",
        color: "#000066",
        fontWeight:"300",
        cursor:"pointer",
        "&:hover": {
           color: "#66B2FF",
        },
    }));
    
    const footer_link = [{
        display : 'Guides',
        display1 : 'Location'  
    },{
        display : 'Services',
        display1 : 'Partnerships'  
    },{
        display : 'Contact Us',
        display1 : 'terms of use & Privacy Policies'  
    }]
  return (
    <Box sx={{
        py:"10", backgroundColor:"#FFF6B2"
    }}>
        <CustomContainer>
            <Box>
                <Typography sx={{
                    fontSize:"20px",
                    color:"#1C1C1D",
                    fontWeight:"700",
                    mb : 2,
                }}>
                        Featured
                </Typography>
                {
                    footer_link.map((item,index)=>(
                        
                        <FooterLink>{item.display}<br/></FooterLink>
                        
                    ))
                }
                

            </Box>
            <Box>
            <Typography sx={{
                    fontSize:"20px",
                    color:"#1C1C1D",
                    fontWeight:"700",
                    mb : 2,
                }}>
                        Overview
                </Typography>

                {
                    footer_link.map((item,index)=>(
                        
                        <FooterLink>{item.display1}<br/></FooterLink>
                        
                    ))
                }

            </Box>
            <Box>
            <Typography sx={{
                    fontSize:"20px",
                    color:"#1C1C1D",
                    fontWeight:"700",
                    mb : 2,
                }}>
                        Get in touch
                </Typography>
                <Typography sx={{
                    fontSize:"16px",
                    color:"#7A7A7E",
                    fontWeight:"500",
                    mb : 2,
                }}>
                       Keep In  touch with our social media pages
                </Typography>
                <IconBox>
                    <img src={fbIcon} alt='fbicon' style={{cursor:"pointer"}}></img>
                    <img src={twitterIcon} alt='twittericon' style={{cursor:"pointer"}}></img>
                    <img src={linkedinIcon} alt='linkedinicon' style={{cursor:"pointer"}}></img>
                    
                    
                </IconBox>

            </Box>
        </CustomContainer>

    </Box>
  )
}

export default Footer
