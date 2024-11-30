import { Box, Button, FormControl, FormLabel, Input, Modal, ModalClose, Sheet, Stack, TabPanel, Typography } from "@mui/joy";
import React from "react";
import Tabs from "@mui/joy/Tabs";
import Tab, { tabClasses } from "@mui/joy/Tab";
import axios from "axios";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";

const Clients = () => {
  const colors = ["primary", "danger", "success", "warning"];
  const [index, setIndex] = React.useState(0);
  const [data, setData] = React.useState([]); // Store fetched data
  const [add, setAdd] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });
  async function getData() {
    try {
      const response = await axios.get(
        "https://6744c25db4e2e04abea38787.mockapi.io/login"
      );
      console.log(response.data); // Log the response data
      setData(response.data); // Set the fetched data into state
    } catch (error) {
      console.error("Error fetching data:", error); // Log any errors
    }
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Form alanını günceller
    }));
  };
  const handleAddPerson = async (e) => {
    e.preventDefault();
    const newPerson = {
      name: e.target.name.value,
      email: e.target.email.value,
      image: e.target.image.value,
      password: e.target.password.value,
    };
    try {
      console.log(formData);
      const response = await axios.post(
        "https://6744c25db4e2e04abea38787.mockapi.io/login",
        formData
      );
      setData((prevData) => [...prevData, response.data]); // Update the state with new data
      setAdd(false); // Close the modal
      setFormData({ name: "", email: "", password: "", image: "" }); // Reset form
    } catch (error) {
      console.error("Error adding person:", error);
    }
  };
  React.useEffect(() => {
    getData(); // Fetch data when the component mounts
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
        value={index}
        className="sm:w-[100%]"
        onChange={(event, value) => setIndex(value)}
        sx={(theme) => ({
          p: 1,
          borderRadius: 16,
          width: "89%",
          mx: "auto",
          boxShadow: theme.shadow.sm,
          "--joy-shadowChannel": theme.vars.palette[colors[index]].darkChannel,
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
          "@media (max-width: 768px)": {
            width: "auto", // Width will be auto on phone screens
          },
        })}
      >
        <TabPanel>
          <button
            className="absolute top-2 right-2 bg-[#c46d6d] text-white px-3 py-1 rounded-md shadow-md hover:bg-[#a34d4d] transition duration-300"
            onClick={() => setAdd(true)}
          >
            Add
          </button>
          <div className="flex flex-wrap sm:gap-5 items-center justify-around sm:w-[100%]">
            {data.map((item) => (
              <div
                key={item.id}
                className="card relative flex sm:w-[47%] w-auto sm:h-[100px] items-center justify-between p-2 border-4 rounded-sm border-s-[#c46d6d] border-y-transparent border-e-transparent md:flex-row flex-col"
              >
                <img
                  src={
                    item.image
                      ? item.image
                      : "https://6744c25db4e2e04abea38787.mockapi.io/login"
                  }
                  alt={item.name}
                  className="w-[90px] h-[90px] m-2 rounded-[50%]"
                />
                <div className="title w-[50%]">
                  <p className="name font-sans">{item.name}</p>
                  <p className="password font-mono w-auto">{item.password}</p>
                  <p className="email font-mono w-auto">{item.email}</p>
                </div>
                <p className="money font-sans w-auto">{item.budget}₼</p>
          
              </div>
            ))}
            <Modal open={add} onClose={() => setAdd(false)}>
            <ModalDialog className="w-[50px]">
              <DialogTitle>Add person</DialogTitle>
              <DialogContent>
                Please fill in the information
              </DialogContent>
              <form
                onSubmit={(e) => {
                  handleAddPerson(e);
                  setAdd(false)
                }}
              >
                <Stack spacing={2}>
                  <div className="flex gap-3">
                    <div>
                      <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input
                          name="name"
                          placeholder="John"
                          autoFocus
                          value={formData.name} // formData ile bağlantı kur
                          onChange={handleInputChange} // onChange olayını bağla

                          required
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                          name="email"
                          placeholder="jhonadin@gmail.com"
                          value={formData.email} // formData ile bağlantı kur
                          onChange={handleInputChange} // onChange olayını bağla

                          autoFocus
                          required
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                          name="password"
                          placeholder="gdhjkH876"
                          autoFocus
                          value={formData.password} // formData ile bağlantı kur
                          onChange={handleInputChange} // onChange olayını bağla

                          required
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Image</FormLabel>
                        <Input
                          name="image"
                          placeholder="Image link..."
                          value={formData.image} // formData ile bağlantı kur
                          onChange={handleInputChange} // onChange olayını bağla

                          autoFocus
                          required
                        />
                      </FormControl>
                    </div>
                  </div>
                  <Button
                    type="submit"
                  >
                    Submit
                  </Button>
                </Stack>
              </form>
            </ModalDialog>
          </Modal>
          </div>
        </TabPanel>
      </Tabs>
    </Box>
  );
};

export default Clients;
