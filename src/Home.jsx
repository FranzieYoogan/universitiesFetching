import { useState } from "react"
import Header from "./Header"
import './assets/home.css'
import axios from 'axios'

function Home() {

    const [inputValue,setInputValue] = useState('')
    const [data,setData] = useState(null)
    const [error,setError] = useState('')

    const handleInput = (event) =>  {

        event.preventDefault()

        const url = `http://universities.hipolabs.com/search?country=${inputValue}`

        setData(null)
        setError('')

        axios.get(url)
        .then(response => {
            console.log(response.data)
            setData(response.data)
        })
        .catch(error => {
            console.log(error)
            setError(error, "Fetching failed")
        })


    }

   

    return(

        <>

            <Header></Header>

            <section>

        
<form className="formStyle max-w-md mx-auto" onSubmit={handleInput}>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" onChange={(event) => setInputValue(event.target.value)} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

{data ? (
                    data.length > 0 ? (
                        <ul>
                            {data.map((university, index) => (
                                <li key={index}>
                                    <h1>{university.name}</h1>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <h1>No universities found.</h1>
                    )
                ) : (
                    <h1 className="text-red-500">{error}</h1> // Display error message
                )}


            </section>

        </>

    )

}

export default Home