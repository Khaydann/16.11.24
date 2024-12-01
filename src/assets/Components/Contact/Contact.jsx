import React, { useState } from 'react';
import axios from 'axios';
import './Contact.scss';

const Contact = ({ images }) => {
  const [selectedBranch, setSelectedBranch] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataToSend = {
      ...formData,
      branch: selectedBranch,
    };

    try {
      const response = await axios.post(
        "https://6744c25db4e2e04abea38787.mockapi.io/contact",
        dataToSend
      );

      console.log("Cavab:", response.data);
      setResponseMessage("Məlumat uğurla göndərildi!");
      setFormData({
        name: "",
        surname: "",
        email: "",
        phone: "",
        message: "",
      });
      setSelectedBranch("");
    } catch (error) {
      console.error("Xəta:", error);
      setResponseMessage("Göndəriş zamanı xəta baş verdi!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div
        className="contact-background"
        style={{ backgroundImage: `url(${images[0]})` }}
      >
        <div className="contact-content">
          <div className="contact-left">
            <h2>Bizimlə Əlaqə</h2>
          </div>
          <div className="contact-right">
            <div className="contact-form">
              <h3>Əlaqə Formu</h3>
              <form onSubmit={handleSubmit}>
                <div className="contact-form-group">
                  <label htmlFor="branch">Filial Seçin</label>
                  <select
                    id="branch"
                    name="branch"
                    value={selectedBranch}
                    onChange={handleBranchChange}
                    className="contact-select"
                    required
                  >
                    <option className="contact-o"value="">Filial seçin</option>
                    <option  className="contact-o" value="Automobile Center Absheron LLC">
                      Automobile Center Absheron LLC
                    </option>
                    <option className="contact-o" value="AutoStar Kaukasus GmbH Azerbaijan LLC">
                      AutoStar Kaukasus GmbH Azerbaijan LLC
                    </option>
                  </select>
                </div>
                <div className="contact-form-group">
                  <label htmlFor="name">Ad *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Adınızı daxil edin"
                    required
                    className="contact-input"
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="surname">Soyad *</label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    placeholder="Soyadınızı daxil edin"
                    required
                    className="contact-input"
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="email">E-poçt ünvanı *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E-poçt ünvanınızı daxil edin"
                    required
                    className="contact-input"
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="phone">Əlaqə nömrəsi *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Əlaqə nömrənizi daxil edin"
                    required
                    className="contact-input"
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="message">Mesaj</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Mesajınızı daxil edin"
                    className="contact-textarea"
                  ></textarea>
                </div>
                <button className="contact-button" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Göndərilir..." : "Göndər"}
                </button>
                {responseMessage && <p>{responseMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
