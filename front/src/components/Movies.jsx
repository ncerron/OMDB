import React from 'react'
import { Link} from 'react-router-dom'

export default function Movies({ films, favourites, handleClickDelete}) {
    console.log(favourites)
    return (
        <div className="container ">
            <div className="row">
                <div className="col-sm-10 mt-5 card-group " >
                {films.Error && films.Error? <h3 style={{ color: "#af9abbde" }}>{films.Error}</h3>:null}
                    {films.Search && films.Search.map(m =>
                        <Link to={`/singleMovie/${m.imdbID}`} key={m.imdbID}>
                            <div id="card" className="card mr-2 mb-2" style={{ width: "15rem", height: "20rem" }}>
                                <img className="rounded mt-4 mx-auto d-block" src={m.Poster} style={{ width: "75%" }} alt="Card image cap" />
                            </div>
                        </Link>
                    )}
                </div>

                <div className="col-sm-2 pl-1 text-center mt-5">
                   {favourites.length > 0 ?  <h5>Favourites</h5> : null }
                    {favourites && favourites.map(m =>
                        <div key={m.id}>
                            <div className="card mt-3 mx-auto" style={{ width: "12rem" , backgroundColor: "#4b355859"}}>
                                <div className="card-body">
                                    <h6 className="card-title">{m.title}</h6>
                                    <h6>{m.year}</h6>
                                    <button href="#" onClick={() => handleClickDelete(m.id)} className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
