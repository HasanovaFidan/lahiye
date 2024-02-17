import React, { useContext, useState } from 'react';
import axios from 'axios';
import { MdDeleteOutline } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import dataContexts from '../../../contexts/contexts'; 
import "./Admin.scss"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Hom() {
  const { data, setData, loading } = useContext(dataContexts);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

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
        confirmButtonText: "Əminəm, Silin!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Silindi!",
            text: "Faylınız silindi.",
            icon: "success"
          });
        }
      });
    });
  };

  // Logic to get current data for pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="to" style={{ margin: '30px', color: 'orangered' }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Buy</TableCell>
                  <TableCell align="right">Discount</TableCell>
                  <TableCell align="right">Sell</TableCell>
                  <TableCell align="right">Videocard (GPU)</TableCell>
                  <TableCell align="right">Processor</TableCell>
                  <TableCell align="right">(RAM)</TableCell>
                  <TableCell align="right">Screen</TableCell>
                  <TableCell align="right">System</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Delete</TableCell>
                  <TableCell align="right">Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentRows.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className='imagetable'><img src={item.image} alt="" /></TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell align="right">{item.alis !== "" ? item.alis : "-"}</TableCell>
                    <TableCell align="right">{item.endirim !== "" ? item.endirim : "-"}</TableCell>
                    <TableCell align='right'>{item.satis !== "" ? item.satis : "-"} </TableCell>
                    <TableCell align="right">{item.video !== "" ? item.video : "-"}</TableCell>
                    <TableCell align="right">{item.prs !== "" ? item.prs : "-"}</TableCell>
                    <TableCell align="right">{item.yaddas !== "" ? item.yaddas : "-"}</TableCell>
                    <TableCell align="right">{item.screen !== "" ? item.screen : "-"}</TableCell>
                    <TableCell align="right">{item.system !== "" ? item.system : "-"}</TableCell>
                    <TableCell align="right">{item.catagory !== "" ? item.catagory : "-"}</TableCell>
                    <TableCell align="right">
                      <MdDeleteOutline className='tabledelete' onClick={() => handleDelete(item._id)} />
                    </TableCell>
                    <TableCell align="right">
                      <Link to={`/e/${item._id}`}><FaRegEdit className='tableedit' /></Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* Pagination */}
          <div className="paginationn">
            {Array.from({ length: Math.ceil(data.length / rowsPerPage) }, (_, i) => (
   <Button
   key={i}
   onClick={() => paginate(i + 1)}
   variant={currentPage === i + 1 ? "contained" : "outlined"}
   sx={{
     color: 'darkred', // Set text color to white
     border: '1px solid orangered', // Set border color and width to red
     borderRadius: "4px", // Remove border radius to keep it consistent
     '&.MuiButton-contained': {
       backgroundColor: currentPage === i + 1 ? 'orangered' : 'transparent', // Set background color for contained buttons for active page, otherwise transparent
     },
     '&:hover': {
       backgroundColor: 'transparent', // Remove hover effect
     },
   }}
 >
   {i + 1}
 </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Hom;
