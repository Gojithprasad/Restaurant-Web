import React from 'react';
import { Box, Container, styled, Typography } from '@mui/material';
import { Data } from '../../StaticData/Data';
import CustomCard from '../../components/CustomCard/CustomCard';

function Dishes() {
    const PropertiesTextBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            textAlign: "center"
        },
    }));

    const DishesBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-between",
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column", // Corrected here
            alignItems: "center"
        },
    }));

    return (
        <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
            <Container>
                <PropertiesTextBox>
                    <Typography sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold", ml: "13px" }}>
                        Featured Dishes
                    </Typography>
                    <Typography sx={{ color: "#000339", fontSize: "16px", ml: "13px", mt: 1 }}> {/* Corrected here */}
                        Discover our delicious selection
                    </Typography>
                </PropertiesTextBox>
                <DishesBox>
    {Data.map((foodItem) => (
        <CustomCard
            key={foodItem.id}  // It's a good practice to include a unique key
            item={foodItem.item}
            img={foodItem.img}
            price={foodItem.price}
            likes={foodItem.likes}
            heart={foodItem.heart}
            share={foodItem.share}
        />
    ))}
</DishesBox>

            </Container>
        </Box>
    );
}

export default Dishes;
