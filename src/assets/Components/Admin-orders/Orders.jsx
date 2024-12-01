import { Box, TabPanel, Tabs } from "@mui/joy";
import React, { useEffect, useState } from "react";
import Tab, { tabClasses } from "@mui/joy/Tab";
import axios from "axios";

const Order = () => {
  const [data, setData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // Loading state

  async function getData() {
    try {
      const response = await axios.get(
        "https://6744c25db4e2e04abea38787.mockapi.io/contact"
      );
      setLoading(false); // Set loading to false once data is fetched
      setData(response.data); // Set the fetched data into state
    } catch (error) {
      console.error("Error fetching data:", error); // Log any errors
      setLoading(false); // Set loading to false even on error
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box className="order-container" sx={{ height: "100vh" }}>
    <Tabs
      size="lg"
      aria-label="Bottom Navigation"
      sx={{
        p: 1,
        borderRadius: 16,
        width: "89%",
        mx: "auto",
        boxShadow: (theme) => theme.shadow.sm,
        [`& .${tabClasses.root}`]: {
          py: 1,
          flex: 1,
          transition: "0.3s",
          fontWeight: "md",
          fontSize: "md",
          width: "150px",  // Burada tab'ların genişliyini təyin edirik
          [`&:not(.${tabClasses.selected}):not(:hover)`]: {
            opacity: 0.7,
          },
        },
      }}
    >
      <TabPanel>
        <h4>Contact</h4>
        {data.length > 0 ? (
          <div className="card-container">
            {data.map((item, index) => (
              <div key={index} className="cardl">
                <p><span>Name:</span> {item.name}</p>
                <p><span>Surname:</span> {item.surname}</p>
                <p><span>Email:</span> {item.email}</p>
                <p><span>Phone:</span> {item.phone}</p>
                <p><span>Message:</span> {item.message}</p>
                <p><span>Branch:</span> {item.branch}</p>
              </div>
            ))}
          </div>
        ) : (
          <span className="loading">Loading data...</span>
        )}
      </TabPanel>
    </Tabs>
  </Box>
  
  );
};

export default Order;
