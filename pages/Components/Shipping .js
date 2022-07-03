import React, {useState , useEffect} from 'react'
import axios from 'axios'
import {RiSearchLine} from 'react-icons/ri'
import{BiReset} from 'react-icons/bi'
import Link from 'next/link'


const Shipping = () => {
    const [data , setData] = useState([])
    const [value , setValue] = useState("")
    const [order , setOrder] = useState("ASC")
    const [product , setProduct ] = useState(false)
    
  
    
  
    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...data].sort((a,b) => 
            a[col]?.toLowerCase() > b[col]?.toLowerCase() ? 1 : -1);
            setData(sorted);
            setOrder("DSC")
        }
        if (order === "DSC") {
            const sorted = [...data].sort((a,b) => 
            a[col]?.toLowerCase() < b[col]?.toLowerCase() ? 1 : -1);
            setData(sorted);
            setOrder("ASC")
        }
    }
  

 
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

  const handelSearch = async(e) => {
    e.preventDefault();
    return await axios.get(`http://localhost:5000/drugs?q=${value}`)
    .then((response) => {
        setData(response.data),
        setValue('')  
            })
        
    
    .catch((err) => console.log(err))
  }
  const handelReset = (e) => {
    e.preventDefault();
    loadDrugsData()
  }

  return (
    <div className='pt-28'>
        <h1 className='text-center'>Shipping & Transfer: Process orders and recommendations</h1>
        <form className='flex flex-row p-8 '  >
                <input className=' bg-transparent  bg-gray-400 w-[300px] sm:w-[400px] focus:outline-none p-2 placeholder-white' type='text' placeholder='Search ...' value={value}
                onChange={(e) => setValue(e.target.value)}
                ></input>
                <button>
                    <RiSearchLine className='text-white bg-blue-300 hover:scale-105'   size={40} onClick={handelSearch}/>
                </button>
                <button>
                    <BiReset className='text-white bg-black hover:scale-105'   size={40} onClick={handelReset}/>
                </button>
            </form>
           
        <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
                <table class="min-w-full ">
                <thead class="border-b">
                    <tr >
                    
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left" onClick={() => sorting("Branch")}>
                    Branch
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left" onClick={() => sorting("Branch")}>
                    Total Items
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left" onClick={() => sorting("Branch")}>
                    Total cost
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left" onClick={() => sorting("Branch")}>
                    Action
                    </th>
                    
                    </tr>
                </thead>
                {data.length ===0 ? (
                    <tbody className='mb-0 align-center'>
                        <tr>
                        <td colSpan={8} className='mb-0 text-center'>No Data Available</td>
                        </tr>
                    </tbody>
                    ):(
                    data.map((item,index)=>(
                        <tbody key ={index}>
                
                <tr class="border-b">
                    
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.Branch}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.last_order_quantity}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.total_cost}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    
                    
                    <div className='justify-between px-4 py-2 '>
                        <button className='p-4 mx-4 bg-blue-300 rounded-lg'>Print</button>
                        <button className='p-4 bg-green-400 rounded-lg'>View</button>
                    </div>
            </td>
                    </tr>
                    
                </tbody>
                    ))
                    )}
                </table>
            </div>
            </div>
        </div>
        </div>
           
     
        
    </div>
  )
}

export default Shipping