import React, { useEffect, useState } from "react";
import axios from "axios";

const MainContent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalSum, setTotalSum] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [menu, setMenu] = useState([]);

  async function getData() {
    try {
      const response = await axios.get(
        "https://6744c25db4e2e04abea38787.mockapi.io/login"
      );
      setLoading(false);
      setData(response.data);
      const sum = response.data.reduce(
        (acc, item) => acc + parseFloat(item.budget || 0),
        0
      );
      setTotalSum(sum);
      setOrderCount(response.data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  async function getUser() {
    try {
      const response = await axios.get(
        "https://6744c25db4e2e04abea38787.mockapi.io/login"
      );
      setLoading(false);
      setUserCount(response.data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  async function getMenu() {
    try {
      const response = await axios.get(
        "https://66eba35c2b6cf2b89c5b2596.mockapi.io/pizza"
      );
      setLoading(false);
      setMenu(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
    getMenu();
    getUser();
  }, []);

  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Admin Panel</h1>
          {data.length > 0 ? (
            <div>
              {data.map((item, index) => (
                <div key={index} className="text">
                </div>
              ))}
            </div>
          ) : (
            <span>Loading data...</span>
          )}
        </div>
      </div>
      <ul className="box-info">
        <li>
          <span className="text">
            <h3>{orderCount}</h3>
            <p>New Order</p>
          </span>
        </li>
        <li>
          <span className="text">
            <h3>{userCount}</h3>
            <p>Visitors</p>
          </span>
        </li>
        <li>
          <span className="text">
            <h3>{totalSum}₼</h3>
            <p>Total Sales</p>
          </span>
        </li>
      </ul>
      <div className="table-data">
      </div>
    </main>
  );
};

export default MainContent;
