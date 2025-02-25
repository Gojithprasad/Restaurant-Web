import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import likeIcon from '../../assets/like.png';
import heartIcon from '../../assets/heart.png';
import shareIcon from '../../assets/share.png';

import styled from '@emotion/styled';

function CustomCard({ img, price, item, likes, heart, share }) {
    const DishBox = styled(Box)(({ theme }) => ({
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        maxWidth: "350px", // Corrected here
        backgroundColor: "#fff", 
        
        "&:hover": {
            backgroundColor: "#f5f5f5",
            boxShadow: "0 0 5px rgba(0,0,0,0.2)", // Corrected here
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out",
        },
    }));
    

    const ImgContainer = styled(Container)(({ theme }) => ({ // Corrected spelling here
        width: "100%",
        marginTop:"15px"
    }));

    const InfoBox = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }));

    return (
        <DishBox>
            <ImgContainer>
                <img src={img} alt='housepic' style={{ maxWidth: "100%" }} />
            </ImgContainer>
            <Box sx={{ padding: "1rem" }}>
                <Typography variant="body1" sx={{ fontWeight: "700" }}>
                    ${price}
                </Typography>
                <Typography variant="body1" sx={{ my: 2 }}>
                    {item}
                </Typography>
                <Box sx={{
                    display: "flex",
                    alignItems: "center", // Corrected here
                    justifyContent: "space-between",
                }}>
                    <InfoBox>
                        <img src={likeIcon} alt='icon' />
                        <Typography variant="body2" sx={{ mt: 1 }}> {/* Corrected here */}
                            {likes}
                        </Typography>
                    </InfoBox>
                    <InfoBox>
                        <img src={heartIcon} alt='icon' />
                        <Typography variant="body2" sx={{ mt: 1 }}> {/* Corrected here */}
                            {heart}
                        </Typography>
                    </InfoBox>
                    <InfoBox>
                        <img src={shareIcon} alt='icon' />
                        <Typography variant="body2" sx={{ mt: 1 }}> {/* Corrected here */}
                            {share}
                        </Typography>
                    </InfoBox>
                </Box>
            </Box>
        </DishBox>
    );
}

export default CustomCard;
