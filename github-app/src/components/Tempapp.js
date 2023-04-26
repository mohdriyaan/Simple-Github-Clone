import React, { useEffect, useState } from "react"
import "./css/style.css"

const Tempapp=()=>{ 

const [profile,setProfile] = useState(null)    
const [search,setsearch] = useState("")
    
useEffect(()=>{
    const fetchApi=async()=>{
        const url = `https://api.github.com/users/${search}`
        const response = await fetch(url)
        const resJson = await response.json()
        setProfile(resJson.login)
    }
    fetchApi()
},[search])
return(
    <>
    <div className="nav">
        <h2 style={{color:"white",padding:20}}>Github</h2>
    </div>

    <div>
        <input type="search" value={search} onChange={(event)=>{
            setsearch(event.target.value)
        }}/>
    </div>

    {!profile?(
        <p>No Data Found</p>
    ):(
        <div>
            <h3>{profile}</h3>
            {/* <h3>{profile.login}</h3> */}
        </div>
    )}
    </>

)
}

export default Tempapp