import React, { useState } from 'react';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-background" style={{ backgroundImage: `url(${images[0]})` }}>
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
                  >
                    <option value="">Filial seçin</option>
                    <option value="Automobile Center Absheron LLC">Automobile Center Absheron LLC</option>
                    <option value="AutoStar Kaukasus GmbH Azerbaijan LLC">AutoStar Kaukasus GmbH Azerbaijan LLC</option>
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
                <button className="contact-button" type="submit">Göndər</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
