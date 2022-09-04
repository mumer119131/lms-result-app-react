import React, { useState } from 'react'
import axios from 'axios'
import './search.css'
import Result from './result/Result'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Search = (props) => {
  
  const [stuData, setStuData] = useState({})
  const [semester, setSemester] = useState([])
  async function searchResult(){
    console.log('Func Called')
    let ag = document.getElementById('ag').value;
    let accept = document.getElementById('accept');
    if(!accept.checked){
      toast.error('Accept the Agreement',  {theme: "colored"})
      return
    }
    if(!ag){
      toast.warn('Enter your ag#',  {theme: "colored"})
      return
    }
    const LOADING = document.querySelector('.loading__container')
    const DESC_CONTAINER = document.querySelector('.desc__container')
    const SEARCH_CONTAINER = document.querySelector('.search__container')
    const RESULT_CONTAINER = document.querySelector('.result__container')

    LOADING.style.display = "block"
    DESC_CONTAINER.style.filter = "blur(8px)"
    SEARCH_CONTAINER.style.filter = "blur(8px)"
    RESULT_CONTAINER.style.filter = "blur(8px)"
    await axios.get("https://lms-result-api.herokuapp.com/"+ag)
    .then(res=>{
      setStuData(res.data)
      setSemester(Object.keys(stuData))
    }).catch(()=>{
      toast.error("Invalid ag#",  {theme: "colored"})
    })
      LOADING.style.display = "none"
      DESC_CONTAINER.style.filter = "blur(0)"
      SEARCH_CONTAINER.style.filter = "blur(0)"
      RESULT_CONTAINER.style.filter = "blur(0)"
    
    console.log(semester)
  }

  return (
    <>
      <ToastContainer />
      <div className="search__container">
        <p>&copy;Designed By : Muhammad Umer</p>
        <p><i class="fa-solid fa-circle-exclamation"></i> There is an issue in University GPA and CGPA Calculation System they don't round about the gpa but just cut it off to 2 decimals so the GPA might be different there.</p>
        <input type="text" placeholder='Enter you ag#' id="ag"/>
        
        <label htmlFor="accept"><input type="checkbox" name="accept" id="accept" /> I am doing this on my behalf to scrape the website</label>
        <button id='search-result' onClick={()=>searchResult()}>Search</button>
    </div>
    <div className="result__container">
      {
        Object.keys(stuData).length > 0 && <Result result = {stuData} />
      }
    </div>
    </>
  )
}

export default Search