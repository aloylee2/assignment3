import Resource from './Resource';

const ShowCat = () => {
  const API_KEY = 'live_8kDRkKIA0PLZz2JMNvjE1LHQakFW8eWnPVx5olD2EhHIEEpMJw6AuDh5HpqmLnJS';
  const webURL = `https://api.thecatapi.com/v1/images/search?limit=50&has_breeds=1&api_key=${API_KEY}`;
  
  const render =(data)=>{
    if(data.loading=== true)return<p>loading....</p>
    console.log('got data', data);
    return data.trans
    .filter(cat => cat.breeds && cat.breeds.length > 0 && cat.url)
    .slice(0,13)
    .map(cat=>(
        <div key={cat.id}>
            <img className='image' src={cat.url} alt={cat.breeds[0]?.name || 'Cat Image'}/>
            <h2 className='breed-name'>Breed Type: {cat.breeds[0]?.name || 'Unknown Breed'}</h2>
        </div>
    ))
  }  
  
  return (
    <div>
        <Resource path={ webURL  } render={ render } />
    </div>
  )
}

export  default ShowCat;