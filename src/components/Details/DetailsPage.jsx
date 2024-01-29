import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'



const DetailsPage = () => {

    const movies = useSelector(store => store.movies);
    const details = useSelector(store => store.details)
    const history = useHistory();


    const handleClick = () => {
        history.push('/')
    }

    if (Object?.keys(details)?.length > 0) {
        return (
        <>Hello there! this is the details page!
       <section data-testid='movieDetails'>
                    <div>
                        <button variant="contained"
                            data-testid="toList"
                            onClick={handleClick}>
                            Back to Movie List Page
                        </button>
                    </div>

                </section>

                <section>
                    <h3>Movie details</h3>

                    <img src={details?.poster} />
                    <h2>{details?.title}</h2>
                    <h4>Genre:</h4>
                        
                     {details?.genres.map(element => { return element.name }).join(', ')}
                       
                     {details?.description}
                        
                    
                </section>
      </>
    )
} else {

    return (
        <>
            <p>Movie Details</p>
            <button
                data-testid="toList"
                onClick={handleClick}>
                Back to Movie List Page
            </button>
        </>

    )
}
}


export default DetailsPage