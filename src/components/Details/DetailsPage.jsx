import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';






const DetailsPage = () => {


    const movies = useSelector(store => store.movies);
    console.log("here are the movies", movies);
    const details = useSelector(store => store.details)
    const history = useHistory();
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch({type: 'FETCH_MOVIES' });
        dispatch({type: 'FETCH_DETAILS', payload: id})
      }, []);

    const buttonClick = () => {
        history.push('/')
    }

    if (Object.keys(details).length > 0) {
        return (
            <div data-testid='movieDetails'>Hello there! this is the details page!
                <section >
                    <div>
                        <button
                            data-testid="toList"
                            onClick={buttonClick}>
                            Go back to movies list
                        </button>
                    </div>
                </section>

                <section>
                    <h3>Movie Details!</h3>
                    <img src={details.poster} />
                    <h2>{details.title}</h2>
                    <p>Genre:</p><b>
                        {details.genres.map(element => { return element.name.toUpperCase() }).join(' | ')}
                    </b>
                    <p>
                        {details.description.replace(/(?![^\n]{1,32}$)([^\n]{1,32})\s/g, '[$1]\n')}
                    </p>
                </section>
            </div>
        )
    } else {

        return (
            <>
                <p>Movie Details</p>
                <button
                    data-testid="toList"
                    onClick={buttonClick}>
                    Go back to movies list
                </button>
            </>

        )
    }
}


export default DetailsPage