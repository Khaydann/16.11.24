"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/joy/Box";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";
import './Menues.css';

const OurMenuTab = () => {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    id: "",
    name: "",
    price: "",
    img: "",
  });

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://673cda4596b8dcd5f3fbef5e.mockapi.io/Aksessuarlar"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Məhsullar yüklənərkən səhv baş verdi:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProduct = {
      name: formData.get("name"),
      price: formData.get("price"),
      img: formData.get("image"),
    };
    try {
      const response = await axios.post(
        "https://673cda4596b8dcd5f3fbef5e.mockapi.io/Aksessuarlar",
        newProduct
      );
      setProducts((prevProducts) => [...prevProducts, response.data]);
      setCreateModalOpen(false);
    } catch (error) {
      console.error("Məhsul əlavə edilərkən səhv baş verdi:", error);
    }
  };

  const handleEditProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://673cda4596b8dcd5f3fbef5e.mockapi.io/Aksessuarlar/${selectedItem.id}`,
        selectedItem
      );
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === selectedItem.id ? selectedItem : product
        )
      );
      setOpen(false);
    } catch (error) {
      console.error("Məhsul redaktə edilərkən səhv baş verdi:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://673cda4596b8dcd5f3fbef5e.mockapi.io/Aksessuarlar/${id}`
      );
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Məhsul silinərkən səhv baş verdi:", error);
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 4,
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
      }}
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
        <TabList disableUnderline className="special">
          <Tab disableIndicator className="special">
            <ListItemDecorator className="special" onClick={() => setCreateModalOpen(true)}>
              Məhsul əlavə et
            </ListItemDecorator>
          </Tab>
        </TabList>
      </Tabs>
      <br />

      {/* Məhsul əlavə etmə Modalı */}
      <Modal open={createModalOpen} onClose={() => setCreateModalOpen(false)}>
        <ModalDialog>
          <DialogTitle className="mehsul-buttonn">Yeni Məhsul Əlavə Et</DialogTitle>
          <form onSubmit={handleAddProduct}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Məhsulun Adı</FormLabel>
                <Input name="name" placeholder="Adı" required />
              </FormControl>
              <FormControl>
                <FormLabel>Qiymət</FormLabel>
                <Input name="price" placeholder="Qiymət" required />
              </FormControl>
              <FormControl>
                <FormLabel>Şəkil URL</FormLabel>
                <Input name="image" placeholder="Şəkil URL" required />
              </FormControl>
              <Button type="submit">Əlavə Et</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>

      {/* Redaktə Modalı */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Məhsulu Redaktə Et</DialogTitle>
          <form onSubmit={handleEditProduct}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Məhsulun Adı</FormLabel>
                <Input
                  name="name"
                  value={selectedItem.name}
                  onChange={(e) =>
                    setSelectedItem({ ...selectedItem, name: e.target.value })
                  }
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>Qiymət</FormLabel>
                <Input
                  name="price"
                  value={selectedItem.price}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectedItem,
                      price: e.target.value,
                    })
                  }
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>Şəkil URL</FormLabel>
                <Input
                  name="img"
                  value={selectedItem.img}
                  onChange={(e) =>
                    setSelectedItem({ ...selectedItem, img: e.target.value })
                  }
                  required
                />
              </FormControl>
              <Button type="submit">Yadda Saxla</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>

      {loading ? (
        <Typography>Yüklənir...</Typography>
      ) : (
        <Grid container spacing={2} className="product-grid">
          {products.map((product) => (
            <Grid item xs={6} sm={6} md={4} lg={4} key={product.id} className="product-item">
              <div className="product-card">
                <img src={product.img} alt={product.name} className="product-image" />
                <h4>{product.name}</h4>
                <h4>{product.price} AZN</h4>
                <div className="button-container">
                  <Button
                    className="edit-button"
                    onClick={() => (setSelectedItem(product), setOpen(true))}
                  >
                    Redaktə Et
                  </Button>
                  <Button
                    className="delete-button"
                    onClick={() => handleDelete(product.id)}
                  >
                    Sil
                  </Button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default OurMenuTab;
