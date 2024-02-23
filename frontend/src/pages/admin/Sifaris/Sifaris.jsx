import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./sf.css"

const Sifaris = () => {
    const [ord, setOrd] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);

    useEffect(() => {
        axios.get("http://localhost:8080/orders")
            .then(res => {
                setOrd(res.data);
            });
    }, []);
    const handleStatusChange = (orderId, newStatus) => {
        // Axios kullanarak veritabanına güncelleme gönderme işlemi yapılabilir
        axios.put(`http://localhost:8080/orders/${orderId}`, { status: newStatus })
            .then(res => {
                // Başarılı bir şekilde güncellendiğinde yapılacak işlemler
                window.location.reload();
                console.log("Durum güncellendi");
            })
            .catch(err => {
                // Hata durumunda yapılacak işlemler
                console.error("Durum güncellenirken bir hata oluştu:", err);
            });
    };
    

    // Sayfadaki mevcut siparişler
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = ord.slice(indexOfFirstItem, indexOfLastItem);

    // Sayfa numaralarının hesaplanması
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(ord.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    // Sayfa değiştirme işlevi
    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    }

    return (
        <div className="table-con">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>City</th>
                        <th>Email</th>
                        <th>Items</th>
                        <th>Delivery</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {currentItems.map((item, index) => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.mobile}</td>
                            <td>{item.city}</td>
                            <td>{item.email}</td>
                            <td>
                                <ul>
                                    {item.items.map((product, index) => (
                                        <li key={product._id}>
                                            <div className="image-container">
                                                <img src={product.image} alt={product.name} />
                                            </div>
                                            <span>{product.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                            <td>
    <select value={item.status} onChange={(e) => handleStatusChange(item._id, e.target.value)}>
        <option value="gozlenir">Gözlenir</option>
        <option value="kurierde">Kuryerde</option>
        <option value="catdirilma">Çatdırıldı</option>
    </select>
</td>


                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} id={number} onClick={handleClick}>
                        {number}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sifaris;
