"use client";
import * as React from "react";
import axios from "axios";
import Box from "@mui/joy/Box";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import { TiDelete } from "react-icons/ti";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import Typography from "@mui/joy/Typography";

const OurMenuTab = () => {
  const [index, setIndex] = React.useState(0);
  const colors = ["primary", "danger", "success", "warning"];
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState({
    id: "",
    name: "",

    price: "",
   
    img: "",
  });

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://673cda4596b8dcd5f3fbef5e.mockapi.io/Aksessuarlar");
      setProducts(response.data);
    } catch (error) {
      console.error("Məhsullar yüklənərkən səhv baş verdi:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async (newProduct) => {
    try {
      const response = await axios.post("https://673cda4596b8dcd5f3fbef5e.mockapi.io/Aksessuarlar", newProduct);
      setProducts([...products, response.data]);
    } catch (error) {
      console.error("Məhsul əlavə edilərkən səhv:", error);
    }
  };

  const handleEditProduct = async (updatedProduct) => {
    try {
      await axios.put(`https://673cda4596b8dcd5f3fbef5e.mockapi.io/Aksessuarlar/${updatedProduct.id}`, updatedProduct);
      setProducts(products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      ));
    } catch (error) {
      console.error("Məhsul redaktə edilərkən səhv:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://673cda4596b8dcd5f3fbef5e.mockapi.io/Aksessuarlar/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Məhsul silinərkən səhv:", error);
    }
  };

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    handleEditProduct(selectedItem);
    setOpen(false);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 4,
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
      }}
      style={{ "--colors-index": colors[index] }}
    >
      <Tabs
        size="lg"
        value={index}
        onChange={(event, value) => setIndex(value)}
        sx={{
          width: "89%",
          mx: "auto",
          [`& .${tabClasses.root}`]: {
            py: 1,
            flex: 1,
            transition: "0.3s",
          },
        }}
      >
        <TabList disableUnderline>
          <Tab disableIndicator>
            <ListItemDecorator>
              All
            </ListItemDecorator>
          </Tab>
        </TabList>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog>
            <DialogTitle>Edit Product</DialogTitle>
            <form onSubmit={handleSaveChanges}>
              <Stack spacing={2}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    name="name"
                    value={selectedItem.name}
                    onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })}
                    required
                  />
                   <FormLabel>Price</FormLabel>
                  <Input
                    name="price"
                    value={selectedItem.price}
                    onChange={(e) => setSelectedItem({ ...selectedItem,price: e.target.value })}
                    required
                  />
                   <FormLabel>Img</FormLabel>
                  <Input
                    name="img"
                    value={selectedItem.img}
                    onChange={(e) => setSelectedItem({ ...selectedItem, img: e.target.value })}
                    required
                  />
                </FormControl>
                <Button type="submit">Save Changes</Button>
              </Stack>
            </form>
          </ModalDialog>
        </Modal>
      </Tabs>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <img src={product.img} alt={product.name} />
            <h4>{product.name}</h4>
            <h4>{product.price}</h4>
            <Button onClick={() => handleOpen(product)}>Edit</Button>
            <Button onClick={() => handleDelete(product.id)}>Delete</Button>
          </div>
        ))
      )}
    </Box>
  );
};

export default OurMenuTab;
