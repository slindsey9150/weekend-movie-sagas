import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'



const DetailsPage = () => {

    const movies = useSelector(store => store.movies);
    console.log("here are the movies", movies);
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
                        <button
                            data-testid="toList"
                            onClick={handleClick}>
                            Go back to movies list
                        </button>
                    </div>
                </section>

                <section>
                    <h3>Movie Details!</h3>
                    <img src={details?.poster} />
                    <h2>{details?.title}</h2>
                    <p>Genre:</p><b>
                        {details?.genres.map(element => { return element.name }).join(', ')}
                    </b>
                    <p>
                        {details?.description}
                    </p>
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
                    Go back to movies list
                </button>
            </>

        )
    }
}


export default DetailsPage