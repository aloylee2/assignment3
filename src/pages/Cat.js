import React from 'react'

const ShowCat = () => {

    const webURL = 'https://api.thecatapi.com/v1/images/search/?limit=15&page=100&order=DESC'

    const render = ( data ) => {
        if (data.loading === true) return <p>Loading....</p>

        console.log('Data is here', data);
    
    return ( data.trans.map(cat => (

        <div key={cat.id}>
            <img class='image' src={cat.url} alt='cat img'/>
        </div>
    )))
    }


  return (
    <div>
        <Resource path={webURL} render={render}/>
    </div>
  )
}

export default ShowCat
