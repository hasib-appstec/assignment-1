import React, {useState} from 'react'
import "../App.css"
import Jsondata from "./Data.json"

const SearchFilter = () => {

  const [search, setSearch] = useState("")
  return (
    <div className='search'>
      <input type="text" placeholder='search' value={search}
        onChange={event => {setSearch(event.target.value)}} />
      {Jsondata.filter((val) => {
        if (search == "") {
          return val
        } else if (val.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <div className='user' key={key}>
            <p>{val.name}</p>
            {/* <p>{val.email}</p> */}
          </div>
        )
      })}

    </div>
  )
}

export default SearchFilter