import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./sf.css"

const Sifaris = () => {
    const [ord, setOrd] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/orders")
            .then(res => {
                setOrd(res.data);
            });
    }, []);

    return (
        <div>
            <h2>Siparişler</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>City</th>
                        <th>Email</th>
                        <th>Items</th>
                    </tr>
                </thead>
                <tbody>
                    {ord.map((item, index) => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.mobile}</td>
                            <td>{item.city}</td>
                            <td>{item.email}</td>
                            <td>
                                <ul>
                                    {item.items.map((product, index) => (
                                        <li key={product._id}>
                                            <img src={product.image} alt={product.name} />
                                            <span>{product.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Sifaris;
