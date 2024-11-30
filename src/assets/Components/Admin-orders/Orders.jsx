import { Box, TabPanel, Tabs } from "@mui/joy";
import React, { useEffect, useState } from "react";
import Tab, { tabClasses } from "@mui/joy/Tab";
import axios from "axios";
import { Rating } from "@mui/material";

const Order = () => {
  const [data, setData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // Loading state

  const colors = ["primary", "danger", "success", "warning"];

  async function getData() {
    try {
      const response = await axios.get(
        "https://6744c25db4e2e04abea38787.mockapi.io/contact"
      );
      console.log(response.data); // Log the response data
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
    <Box
      className="w-[100%]"
      sx={{
        flexGrow: 1,
        m: -3,
        p: 4,
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
        position: "relative",
        // bgcolor: `${colors[index]}.500`,
      }}
    >
      <Tabs
        size="lg"
        aria-label="Bottom Navigation"
        sx={(theme) => ({
          p: 1,
          borderRadius: 16,
          width: "89%",
          mx: "auto",
          boxShadow: theme.shadow.sm,
          // "--joy-shadowChannel": theme.vars.palette[colors[index]].darkChannel,
          [`& .${tabClasses.root}`]: {
            py: 1,
            flex: 1,
            transition: "0.3s",
            fontWeight: "md",
            fontSize: "md",
            [`&:not(.${tabClasses.selected}):not(:hover)`]: {
              opacity: 0.7,
            },
          },
        })}
      >
        <TabPanel>
          <h4>Contact</h4>
          {data.length > 0 ? (
            <div className="flex gap-5 flex-wrap relative">
              {data.map((item, index) => (
                <div key={index} className="text border p-2 w-[23%] rounded-md">
                 
                  {/* {item.name} */}
                  {/* {item.phone} */}
                  <p><span>Name:</span> {item.name}</p>
                  <p><span>Emai:l</span> {item.email }</p>
                  <p><span>Phone:</span> {item.phone}</p> {/* Display the name */}
                  <p><span>Message:</span>{item.message}</p>
                  <p><span>Filial</span>{item.branch}</p>
                </div>
              ))}
            </div>
          ) : (
            <span>Loading data...</span> // Show a loading message until data is fetched
          )}
        </TabPanel>
      </Tabs>
    </Box>
  );
};

export default Order;
