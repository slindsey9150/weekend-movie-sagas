import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';





const DetailsPage = () => {

    const movies = useSelector(store => store.movies);
    console.log("here are the movies", movies);
    const details = useSelector(store => store.details)
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS'});
      }, [dispatch]);


    const buttonClick = () => {
        history.push('/')
    }

    if (Object?.keys(details)?.length > 0) {
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
                        {details.genres.map(element => { return element.name }).join(', ')}
                    </b>
                    <p>
                        {details?.description}
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