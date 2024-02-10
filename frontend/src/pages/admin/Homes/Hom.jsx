import React, { useContext } from 'react';
import axios from 'axios';
import { MdDeleteOutline } from 'react-icons/md';
import { FaArrowRight, FaRegEdit } from 'react-icons/fa';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import dataContexts from '../../../contexts/contexts'; 
import "./Admin.scss"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Hom() {
  let { data, setData, loading } = useContext(dataContexts);

  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8080/technical/${id}`).then(() => {
      const deleteTable = data.filter((item) => item._id !== id);
      setData([...deleteTable]);
      Swal.fire({
        title: "Silmək istədiyinizə əminsiz?",
        text: "Bunu geri qaytara bilməyəcəksiniz!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Əminəm,Silin!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Silindi!",
            text: "Faylınız silindi.",
            icon: "success"
          });
        }
      });
    }, []);
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
        <div className="to">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Buy</TableCell>
                  <TableCell align="right">Endirim</TableCell>
                  <TableCell align="right">Sell</TableCell>
                  <TableCell align="right">Videokart (GPU)</TableCell>
                  <TableCell align="right">Prosessor</TableCell>
               
                  <TableCell align="right">(RAM)</TableCell>
                  <TableCell align="right">Ekran</TableCell>
                  <TableCell align="right">Sistem</TableCell>
                  <TableCell align="right">Katagoriya</TableCell>
                  <TableCell align="right">Brend</TableCell>
                  <TableCell align="right">Sil</TableCell>
                  <TableCell align="right">Düzəlt</TableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell align="right">{item.alis!==""? item.alis:"-"}</TableCell>
                    <TableCell align="right">{item.endirim!==""? item.endirim:"-"}</TableCell>
                    <TableCell align='right'>{item.satis!==""? item.satis:"-"} </TableCell>
                    <TableCell align="right">{item.video!==""? item.video:"-"}</TableCell>
                    <TableCell align="right">{item.prs!==""? item.prs:"-"}</TableCell>
                    <TableCell align="right">{item.yaddas!==""? item.yaddas:"-"}</TableCell>
                    <TableCell align="right">{item.screen!==""? item.screen:"-"}</TableCell>
                    <TableCell align="right">{item.system!==""? item.system:"-"}</TableCell>
                    <TableCell align="right">{item.catagory!==""? item.catagory:"-"}</TableCell>
                    <TableCell align="right">{item.brand!==""? item.brand:"-"}</TableCell>
                
            
                    <TableCell align="right">
                  
                        <MdDeleteOutline className='tabledelete' onClick={() => handleDelete(item._id)} />

                    </TableCell>
                    <TableCell align="right">
                    
                    <Link to={`/edit/${item._id}`}><FaRegEdit className='tableedit' /></Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
}

export default Hom;
