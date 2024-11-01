import React from 'react'

const Searchbar = () => {
  return (
    <div class='searchbar'>
        <input type='text' placeholder='Search breed ...' value={value} onchange={(e)=>{
            setValue(e.target.value);
        }}
        />
        </div>
  )
}


export default Searchbar;