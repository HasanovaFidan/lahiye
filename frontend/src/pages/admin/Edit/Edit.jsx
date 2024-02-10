// import React, { useState, useEffect, useContext } from "react";
// import { useFormik } from "formik";
// import axios from "axios";
// import { useParams } from "react-router-dom/dist";
// import { Toaster, toast } from "react-hot-toast";
// import dataContexts from "../../../contexts/contexts";
// const Edit = () => {
//   const [loading, setLoading] = useState(false);
//   const { id } = useParams();
// const {data,setData}=useContext(dataContexts)
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       unitPrice: "",
//     },
//     onSubmit: (values) => {
//       axios
//         .put(`http://localhost:8080/technical/${data.id}`, {
//           ...values,
//         })
//         .then((res) => {
//           toast.success("Item added");
//           console.log(res);
//         });
//     },
//   });
//   return (
//     <>
//         <form className="edit_product_form" onSubmit={formik.handleSubmit}>
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               onChange={formik.handleChange}
//               value={formik.values.name}
//             />
//           </div>
//           <div>
//             <label htmlFor="alis">alis:</label>
//             <input
//               id="alis"
//               name="alis"
//               type="number"
//               onChange={formik.handleChange}
//               value={formik.values.alis}
//             />
//           </div>         
//            <div>
//             <label htmlFor="endirim">endirim</label>
//             <input
//               id="endirim"
//               name="endirim"
//               type="number"
//               onChange={formik.handleChange}
//               value={formik.values.endirim}
//             />
//           </div>

//           <div>
//             <label htmlFor="satis">satis</label>
//             <input
//               id="satis"
//               name="satis"
//               type="number"
//               onChange={formik.handleChange}
//               value={formik.values.satis}
//             />
//           </div>
//           <div>
//             <label htmlFor="video">video</label>
//             <input
//               id="video"
//               name="video"
//               type="text"
//               onChange={formik.handleChange}
//               value={formik.values.video}
//             />
//           </div>
//           <div>
//             <label htmlFor="satis">satis</label>
//             <input
//               id="prs"
//               name="prs"
//               type="text"
//               onChange={formik.handleChange}
//               value={formik.values.prs}
//             />
//           </div>
//           <div>
//             <label htmlFor="yaddas">yaddas</label>
//             <input
//               id="yaddas"
//               name="yaddas"
//               type="text"
//               onChange={formik.handleChange}
//               value={formik.values.yaddas}
//             />
//           </div>
//           <div>
//             <label htmlFor="screen">screen</label>
//             <input
//               id="screen"
//               name="screen"
//               type="text"
//               onChange={formik.handleChange}
//               value={formik.values.screen}
//             />
//           </div>

//           <button type="submit">Submit</button>
//         </form>
//     </>
//   );
// };

// export default Edit;
import React from 'react'

const Edit = () => {
  return (
    <div>
      
    </div>
  )
}

export default Edit
