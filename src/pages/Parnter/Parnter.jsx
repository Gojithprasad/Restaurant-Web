import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { styled } from '@mui/material'

import logoImg from "../../assets/logo.png"
import StarsImg from "../../assets/star.png"
import logosImg from "../../assets/logos.png"


function Parnter() {

    const CustomContainer = styled(Container)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: theme.spacing(4), // Adds space at the top
        paddingBottom: theme.spacing(4), // Adds space at the bottom

        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAligh: "center",
            marginBottom: theme.spacing(4),
        },


    }));
    const CustomBox = styled(Container)(({ theme }) => ({
        

        [theme.breakpoints.down("md")]: {
            
            marginBottom: theme.spacing(4),
        },


    }));

    return (
        <Box sx={{ mt: "10" }}>
            <CustomContainer>
                <CustomBox>
                    <img src={logoImg} alt='logo' style={{ maxWidth: "100%" }}></img>
                    <Typography
                        variant='body2'
                        sx={{
                            color: "#7D889",
                            fontSize: "16px",
                            fontWeight: "bold",
                            mt: 2,
                        }}>
                        More than 45,000 Trust
                    </Typography>
                </CustomBox>
                <Box>
                    <img src={StarsImg} alt='STARS' style={{ maxWidth: "100%" }}></img>
                    <Typography variant='body2'
                        sx={{
                            color: "#7D889",
                            fontSize: "16px",
                            fontWeight: "bold",
                            mt: 2,
                        }}>
                            5-Star Rating 
                    </Typography>

                </Box>
            </CustomContainer>
            <Container sx={{display:"flex" ,flexDirection:"column"}}>
                        <img src={logosImg} alt='logsimg'></img>
            </Container>


        </Box>
    )
}

export default Parnter
