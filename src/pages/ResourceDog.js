import Resource from './Resource';


const ShowDog = () => {
    const API_KEY = 'live_XHTGZfx3FBiaEZ89gg6BxbZEiVho8EKg1Wsk9I9TMy3Y3Q1FZ1PJw0T8O0GN8MBE'; // Your Dog API key
    const webURL = `https://api.thedogapi.com/v1/images/search?limit=30&api_key=${API_KEY}`;

    const render =(data)=>{
        if ( data.loading === true ) return <p>loading ...</p>
        console.log('Got the data', data );
        return data.trans
        .filter(dog => dog.breeds && dog.breeds.length > 0 && dog.url)
        .slice(0,15)
        .map(dog => (
            <div key={dog.id}>
                <img className='image' src={dog.url} alt={dog.breeds[0]?.name || 'Dog Image'} />
                <h2 className='breed-name'>Breed Type: {dog.breeds[0]?.name || 'Unknown Breed'}</h2>
            </div>
        ));
};
    return (
        <div>
            <Resource path={ webURL  } render={ render } />
        </div>
    )
  }
  

export default ShowDog;
