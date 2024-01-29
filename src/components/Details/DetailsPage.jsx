import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'



const DetailsPage = () => {

    const movies = useSelector(store => store.movies);
    const details = useSelector(store => store.details)
    const history = useHistory();




    return (
        <>Hello there! this is the details page!
        <section className="movies">
            {movies.map((movie) => {
                return (
                    <div key= {movie.id}> {movie.description}</div>
                )

            })}
      </section>
      </>
    )
}


export default DetailsPage