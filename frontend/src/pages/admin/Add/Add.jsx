import React, { useContext } from 'react';
 import { useFormik } from 'formik';
 import "./add.scss"
import axios from 'axios';
import Swal from "sweetalert2"
import dataContexts from '../../../contexts/contexts';
 

const Add = () => {
    const{data,setData,original}=useContext(dataContexts)
    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8080/final/${id}`).then(res=>{
                    const deleted=data.filter((item)=>item._id!==id)
                    setData([...deleted])
                })
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
       
    }
    const handleClick=(e)=>{
        e.preventDefault()
        const sorted=data.sort((a,b)=>a.price-b.price)
        setData([...sorted])
    }
    const handleClic=(e)=>{
        e.preventDefault()
        const sorted=data.sort((a,b)=>b.price-a.price)
        setData([...sorted])
    }
    const handleCli=(e)=>{
        e.preventDefault()
        const sorted=data.sort((a,b)=>b.price-a.price)
        setData([...sorted])
    }
    const handleCl=(e)=>{
        e.preventDefault()
        const sorted=data.sort((a,b)=>a.name.localeCompare(b.name))
        setData([...sorted])
    }
    const handleC=(e)=>{
        e.preventDefault()
        const sorted=data.sort((a,b)=>b.name.localeCompare(a.name))
        setData([...sorted])
    }
    const handleChange=(e)=>{
      const searched=  e.target.value.trim().toLowerCase()
      if(searched==""){
        setData(original)
      }else{
        const datasrc=data.filter((data)=>data.name.trim().toLowerCase().includes(searched))
        setData(datasrc)
      }
    }
    const formik = useFormik({
     
        onSubmit:async values => {
         await axios.post("http://localhost:8080/technical",values).then(res=>{
            setData([...data,values])
                
Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500
  });
          })
        },
      });
      return (
     <div className="orta">
 
           <form className='form' onSubmit={formik.handleSubmit}>
          <label htmlFor="name"> Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
    
          <label htmlFor="image">image</label>
          <input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
          />
          {formik.touched.image && formik.errors.image ? (
            <div>{formik.errors.image}</div>
          ) : null}
    
          <label htmlFor="satis">satis</label>
          <input
            id="satis"
            name="satis"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.satis}
          />
          {formik.touched.satis && formik.errors.satis ? (
            <div>{formik.errors.satis}</div>
          ) : null}
            <label htmlFor="satis">satis</label>
          <input
            id="alis"
            name="alis"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.alis}
          />
          {formik.touched.alis && formik.errors.alis ? (
            <div>{formik.errors.alis}</div>
          ) : null}
    
    <label htmlFor="satis">endirim</label>
          <input
            id="endirim"
            name="endirim"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endirim}
          />
          {formik.touched.endirim && formik.errors.endirim ? (
            <div>{formik.errors.satis}</div>
          ) : null}
    
          <button className='btn btn-success' type="submit">Submit</button>
        </form>
        <div className="flex">
            <button onClick={(e)=>handleClick(e)} className='btn btn-info'>1-9</button>
            <button onClick={(e)=>handleClic(e)} className='btn btn-info'>9-1</button>
            <button onClick={(e)=>handleCli(e)} className='btn btn-info'>a-z</button>
            <button onClick={(e)=>handleCl(e)} className='btn btn-info'>z-a</button>
        </div>
        <input className='search' onChange={(e)=>handleChange(e)} type="text" placeholder='search' />
        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
{
    data.map((item,index)=>(
    
        <tr key={index}>
          <th scope="row"><img src={item.image} alt="" /></th>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td><button onClick={(e)=>handleDelete(item._id)} className='btn btn-danger'>Delete</button></td>
         
        </tr>
    
  
    ))
}
</tbody>
</table>
     </div>
      );
}

export default Add