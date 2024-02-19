import React, { useState } from 'react';
import "./cont.scss";
import { BsTelephone } from 'react-icons/bs';
import { IoMdContact } from 'react-icons/io';
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        mailAddress: '',
        phone: '',
        messagge: ''
    });

    const [isSent, setIsSent] = useState(false); // Durum değişkeni ekle

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/users/mail", formData);
            setIsSent(true); 
            setFormData({ 
                name: '',
                mailAddress: '',
                phone: '',
                messagge: ''
            });
        } catch (error) {
            console.error('Error sending message:', error);
            // Hata durumunda gerekli işlemleri yapabilirsiniz
        }
    };

    return (
        <div className="lr">
            <div className="contact">
                <div className="contact-flex">
                    <div className="elaqe">
                        <div className="py">
                            <h2>Bizimle əlaqəyə keç</h2>
                            <p>Əgər hər hansısa təklifin və ya şikayətin varsa bizimlə əlaqəyə keç.</p>
                        </div>
                        <div className="melumat">
                            <form onSubmit={handleSubmit}>
                                <div className="emailyan">
                                    <input type="text" name="name" placeholder='Ad Soyad' value={formData.name} onChange={handleChange} />
                                    <input type="email" name="mailAddress" placeholder='E-posta' value={formData.mailAddress} onChange={handleChange} />
                                </div>
                                <div className="ikiyan">
                                    <input type="tel" name="phone" placeholder='Telefon' value={formData.phone} onChange={handleChange} />
                                    <textarea name="messagge" placeholder='Mesaj' value={formData.messagge} onChange={handleChange}></textarea>
                                    <button type="submit">Gönder</button>
                                </div>
                            </form>
                            {isSent && <p style={{ color: 'green' }}>Mesaj uğurla göndərildi!</p>} {/* Gönderildiğinde geri bildirim */}
                        </div>
                    </div>
                    <div className="maps">
                        <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3099665183017!2d49.8392803758657!3d40.379822271445626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d20580b1817%3A0x5dc247fc2370b764!2sGameNote!5e0!3m2!1sen!2saz!4v1707415947420!5m2!1sen!2saz" style={{ width: "100%", height: "100%", style: "border:0;" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="solid"></div>
                <div className="align">
                    <div className="topla">
                        <p> <BsTelephone />+994 77 517-57-47</p>
                        <p> <IoMdContact />994775175747</p>
                        <p><MdOutlineLocalPostOffice />info@gamenotebaku.az</p>
                    </div>
                    <div className="topla">
                        <p>Bizi sosyal medyada takip edin</p>
                        <div className="div">
                            <span><FaWhatsapp /></span>
                            <span><FaInstagram /></span>
                            <span><FaFacebookF /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
