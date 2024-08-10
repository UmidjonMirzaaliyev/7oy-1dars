import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import jsonData from "./data.json";
import Card from "./components/Card";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./App.css";
import FormRange from "react-bootstrap/FormRange";
import Button from "react-bootstrap/Button";

function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const options = [
    { label: "All", value: "all" },
    { label: "Tables", value: "Tables" },
    { label: "Chairs", value: "Chairs" },
    { label: "Kids", value: "Kids" },
    { label: "Sofas", value: "Sofas" },
    { label: "Beds", value: "Beds" },
  ];

  useEffect(() => {
    setData(jsonData);
    setFilteredData(jsonData);
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    let filtered = data;

    if (category !== "all") {
      filtered = filtered.filter((item) => item.category === category);
    }

    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredData(filtered);
  };

  return (
    <Container>
      <br />
      <br />
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="">Search Products</label>
        <br />
        <input type="text" value={searchQuery} onChange={handleSearchChange} />
        <br />
        <br />
        <label htmlFor="">Select Category</label>
        <Form.Select
          aria-label="Default select example"
          onChange={handleCategoryChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
        <br />
        <Form.Label>Select price</Form.Label>
        <FormRange />
        <br />
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>{" "}
      </form>
      <br />
      <Row>
        {filteredData.map((item) => (
          <Col key={item.id} md={4}>
            <Card title={item.title} img={item.image} price={item.price} category={item.category}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
