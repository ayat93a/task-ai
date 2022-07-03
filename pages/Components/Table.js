import React, {useState , useEffect} from 'react'
import axios from 'axios'
import {RiSearchLine} from 'react-icons/ri'
import{BiReset} from 'react-icons/bi'
import Link from 'next/link'


const Table = () => {
    const [data , setData] = useState([])
    const [value , setValue] = useState("")
    const [order , setOrder] = useState("ASC")
  


  
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
    const handelFilter = async(value) => {
    return await axios.get(`http://localhost:5000/drugs?status=${value}`)
    .then((response)=> setData(response.data))
    .catch((err) => console.log(err));
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
        <h1 className='text-center'>Implement Search, Sort and Filter using JSON Server as a fake rest api, the search bar cover the search and filter features</h1>
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

            {/* <form className='flex flex-row p-8'  >
                <div><input className='mr-4 bg-transparent p-2  bg-gray-400 w-[200px] sm:w-[400px] focus:outline-none placeholder-white' type='text' placeholder='Search ...' value={value}
                onChange={(e) => setFilter(e.target.value)}
                ></input></div>
                <div><input className='mr-4 bg-transparent  bg-gray-400 w-[200px] sm:w-[400px] focus:outline-none p-2 placeholder-white' type='text' placeholder='Search ...' value={value}
                onChange={(e) => setFilter(e.target.value)}
                ></input></div>
                <div><input className='mr-4 bg-transparent  bg-gray-400 w-[200px] sm:w-[400px] focus:outline-none p-2 placeholder-white' type='text' placeholder='Search ...' value={value}
                onChange={(e) => setFilter(e.target.value)}
                ></input></div>
                
                <button>
                    <RiSearchLine className='text-white bg-blue-300 hover:scale-105'   size={40} onClick={handelMultiple}/>
                </button>
                
            </form> */}
            
            <div className='justify-between px-8 py-2 ' >
                <hi>Filter By Status</hi>
                <button className='py-2 mx-4 bg-blue-300 rounded-lg' onClick={() => handelFilter('available')}>Available</button>
                <button className='py-2 bg-red-500 rounded-lg' onClick={() => handelFilter('unavailable')}>Not Available</button>
            </div>
        <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
                <table class="min-w-full ">
                <thead class="border-b">
                    <tr >
                    <th scope="col" class=" text-sm font-medium text-gray-900 px-6 py-4 text-left" onClick={() => sorting("Product ID")}>
                    Product ID
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left" onClick={() => sorting("Product name")}>
                    Product name
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left" onClick={() => sorting("Branch")}>
                    Branch
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left" onClick={() => sorting("Date")}>
                    Date
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left" onClick={() => sorting("Current quantity")}>
                    Current quantity
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left" onClick={() => sorting("Last order quantity")}>
                    Last order quantity 
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left" onClick={() => sorting("Days to supply")}>
                    Days to supply
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left" onClick={() => sorting("Discount")}>
                    Discount
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left" onClick={() => sorting("Bonus")}>
                    Bonus
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left" onClick={() => sorting("Bonus quantity")}>
                    Bonus quantity
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left" onClick={() => sorting("Cost per item")}>
                    Cost per item
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left" onClick={() => sorting("Profit per item")}>
                    Profit per item
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left" onClick={() => sorting("Total Profit")}>
                    Total Profit
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left" onClick={() => sorting("Total Profit")}>
                    Status
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
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.product_name}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.Branch}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.Date}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.available_quantity}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.last_order_quantity}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.days_to_supply}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.discount}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.bonus}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.bonus_quantity}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.cost_per_item}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.profit_per_item}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.total_profit}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.status}
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

export default Table