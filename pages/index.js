import React , {useState , useEffect} from 'react'
import axios from 'axios'
import Nav from './Components/Nav'
import Table from './Components/Table'
import AImodel from './Components/AImodel'
import Shipping from './Components/Shipping '



const App = () => {
  const [data , setData] = useState([])

  useEffect(() =>{
    loadDrugsData();
  }, [])

  const loadDrugsData = async () => {
    return await axios
    .get("http://localhost:5000/drugs")
    .then((response)=> setData(response.data))
    .catch((err) => console.log(err));
  };

  console.log("data" , data)


  return (
    <div>
      <Nav />
      <Table />
      <AImodel />
      <Shipping />
   
      
      
    </div>
    // <MDBContainer>
    //   <div style={{marginTop : "100px"}}>
    //     <h2>Search , Filter , Sort and Pagination using JSON FAKE REAT API</h2>
    //     <MDBRow>
    //       <MDBCol >
    //       <MDBTable>
    //         <MDBTableHead>
    //           <tr  className='table-dark'>
    //             <th scope='col'>Product ID</th>
    //             <th scope='col'>Product name</th>
    //             <th scope='col'>Branch</th>
    //             <th scope='col'>Date</th>
    //             <th scope='col'>Current quantity</th>
    //             <th scope='col'>Last order quantity</th>
    //             <th scope='col'>Days to supply</th>
    //             <th scope='col'>Discount</th>
    //             <th scope='col'>Bonus</th>
    //             <th scope='col'>Bonus quantity</th>
    //             <th scope='col'>Cost per item</th>
    //             <th scope='col'>Profit per item</th>
    //             <th scope='col'>Total Profit</th>
    //           </tr>

    //         </MDBTableHead>
    //         {data.length ===0 ? (
    //           <MDBTableBody className='mb-0 align-center'>
    //             <tr>
    //               <td colSpan={8} className='mb-0 text-center'>No Data Available</td>
    //             </tr>
    //           </MDBTableBody>
    //         ):(
    //           data.map((item,index)=>(
    //             <MDBTableBody key ={index}>
    //               <tr>
    //                 <th scope='row'>{index+1}</th>
    //                 <td>{item.product_name}</td>
    //                 <td>{item.Branch}</td>
    //                 <td>{item.Date}</td>
    //                 <td>{item.available_quantity}</td>
    //                 <td>{item.last_order_quantity}</td>
    //                 <td>{item.days_to_supply}</td>
    //                 <td>{item.discount}</td>
    //                 <td>{item.bonus}</td>
    //                 <td>{item.bonus_quantity}</td>
    //                 <td>{item.cost_per_item}</td>
    //                 <td>{item.profit_per_item}</td>
    //                 <td>{item.total_profit}</td>

    //               </tr>
    //             </MDBTableBody>
    //           ))
    //         )}
    //       </MDBTable>
    //       </MDBCol>
    //     </MDBRow>

    //   </div>

    // </MDBContainer>
  )
}

export default App