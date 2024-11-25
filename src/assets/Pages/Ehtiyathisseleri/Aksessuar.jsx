import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Aksesuar.scss";

const Aksessuar = () => {
  const [aksessuarlar, setAksessuarlar] = useState([]);
  const [filteredAksessuarlar, setFilteredAksessuarlar] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Axtarış üçün state
  const [sortOption, setSortOption] = useState(""); // Filtrasiya seçimi üçün state
  const apiUrl = "https://673cda4596b8dcd5f3fbef5e.mockapi.io/Aksessuarlar";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setAksessuarlar(response.data);
        setFilteredAksessuarlar(response.data); // Başlanğıcda bütün məhsullar göstərilir
      } catch (error) {
        console.error("API-dən məlumat çəkilərkən xəta baş verdi:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = aksessuarlar.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
    setFilteredAksessuarlar(filtered);
  };

  const handleSort = (option) => {
    setSortOption(option);

    let sorted = [...filteredAksessuarlar];
    if (option === "az") {
      sorted.sort((a, b) => a.name.localeCompare(b.name)); // A-dan Z-yə sıralama
    } else if (option === "za") {
      sorted.sort((a, b) => b.name.localeCompare(a.name)); // Z-dən A-ya sıralama
    } else if (option === "priceLowHigh") {
      sorted.sort((a, b) => a.price - b.price); // Qiymətə görə artan sıralama
    } else if (option === "priceHighLow") {
      sorted.sort((a, b) => b.price - a.price); // Qiymətə görə azalan sıralama
    }
    setFilteredAksessuarlar(sorted);
  };

  const handleAddToCart = (id) => {
    alert(`Məhsul ID-si ${id} səbətə əlavə edildi!`);
  };

  return (
    <>
      <Header />
      <div className="aksesuar-container">
        {/* Filtrasiya və Axtarış */}
        <div className="aksesuar-filters">
          {/* Filtrasiya seçimi */}
          <select
            className="aksesuar-select"
            onChange={(e) => handleSort(e.target.value)}
            value={sortOption}
          >
            <option value="">Filtr seçin</option>
            <option value="az">A-dan Z-yə</option>
            <option value="za">Z-dən A-ya</option>
            <option value="priceLowHigh">Qiymət (Azdan Çoxa)</option>
            <option value="priceHighLow">Qiymət (Çoxdan Aza)</option>
          </select>

          {/* Axtarış sahəsi */}
          <input
            type="text"
            className="aksesuar-search"
            placeholder="Məhsul axtar..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        {/* Məhsul kartları */}
        <div
          className={`aksesuar-cards ${
            filteredAksessuarlar.length === 0 ? "empty" : ""
          }`}
        >
          {filteredAksessuarlar.length > 0 ? (
            filteredAksessuarlar.map((item) => (
              <Card
                key={item.id}
                images={[item.img]}
                texts={[item.name]}
                span={[item.price]}
                id={[item.id]}
                onAddToCart={() => handleAddToCart(item.id)}
              />
            ))
          ) : (
            <p className="aksesuar-empty">Belə məhsul mövcud deyil</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aksessuar;
