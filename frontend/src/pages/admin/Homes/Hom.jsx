import React, { useContext } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';
import dataContexts from '../../../contexts/contexts';

function Hom() {
  let { data, setData, loading } = useContext(dataContexts);

  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8080/technical/${id}`).then(() => {
      const deleteTable = data.filter((item) => item._id !== id);
      setData([...deleteTable]);
  
    },[]);
  };

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
<div className="top">
<table style={{"paddingTop":"200px"}}  class="table table-sm ">
          <thead >
            <tr>
            <th className='text-center' scope="col">Image</th>
              <th className='text-center' scope="col">name</th>
              <th className='text-center' scope="col">Description</th>
              <th className='text-center' scope="col">Price</th>
              <th className='text-center' scope="col">Category</th>
              <th className='text-center' scope="col">Delete</th>
              <th className='text-center' scope="col">Detail</th>
              <th className='text-center' scope="col">Edit</th>
              <th className='text-center' scope="col">Add</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (

              <tr key={index}>
                   <td className='text-center'>
                  <img   src={item.image} alt={item.title} style={{ width: '100px', height: '120px' }} />
                </td>
                <td className='text-center'>{item.name}</td>
                <td className='text-center'>{item.description}</td>
                <td className='text-center'>{item.price}</td>
                <td className='text-center'>{item.category}</td>
             
                <td className='text-center'>
                  <button onClick={() => handleDelete(item._id)} type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
                <td className='text-center'>
                  <Link to={`/${item._id}`}>
                    <button className="btn btn-info">Detail</button>
                  </Link>
                </td>
                <td className='text-center'>
                  <Link to={`edit/${item._id}`}>
                    <button className="btn btn-success">Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
</div>
      )}

    </>
  );
}

export default Hom;
