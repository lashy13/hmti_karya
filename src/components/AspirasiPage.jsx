import React, { useState } from 'react';
import Navbar from './Navbar';
import Contact from './Contact';
import '../styles/aspirasi-page.css';

function AspirasiPage() {
  const [formData, setFormData] = useState({
    name: '',
    nim: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Aspirasi berhasil dikirim! Terima kasih atas masukanmu.');
    setFormData({ name: '', nim: '', email: '', message: '' });
  };

  return (
    <div className="aspirasi-page-container">
      <Navbar />

      <section className="aspirasi-form-section">
        <div className="aspirasi-card">
          
          <div className="aspirasi-header-text">
            <h2>Aspiration</h2>
            <p>Send your Aspiration Here! Your Aspiration is important for us!</p>
          </div>

          <form onSubmit={handleSubmit} className="aspirasi-form">
            
            <div className="form-row">
              <div className="form-group">
                <label>Your name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Naufal" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>NIM</label>
                <input 
                  type="text" 
                  name="nim" 
                  placeholder="2303040142" 
                  value={formData.nim} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="mnaufalainula@gmail.com" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label>Aspirasi</label>
              <textarea 
                name="message" 
                rows="4" 
                placeholder="Message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              ></textarea>
            </div>

            <button type="submit" className="send-btn">Send</button>

          </form>

        </div>
      </section>

      <Contact />
    </div>
  );
}

export default AspirasiPage;