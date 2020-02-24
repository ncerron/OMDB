import React from 'react'
import { Link } from 'react-router-dom'

export default function Movies({ films, favourites, handleClickDelete }) {
 /*    films.Search && films.Search.length > 0 ? console.log(films.Search.length) : null
 */
console.log(favourites)
    return (
        <div className="container ">
            <div className="row">
                <div className="col-sm-8 mt-4" >
                    {films.Search && films.Search.map(m =>
                        <Link to={`/singleMovie/${m.imdbID}`} key={m.imdbID}>
                            <div className={"mb-3"}>
                                <div className="card mt-2 text-center mx-auto" style={{ width: "20rem" }}>
                                    <img className="rounded mx-auto d-block" src={m.Poster} style={{ width: "80%" }} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{m.Title}</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
{/* 
                <div className="col-sm-4 text-center mt-4">
                    <h5>Favourites</h5>
                    {favourites && favourites.map(m =>
                        <div key={m.id}>
                            <div className="card mt-2 text-center mx-auto" style={{ width: "12rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{m.title}</h5>
                                    <h6>{m.year}</h6>
                                    <button href="#" onClick={() => handleClickDelete(m.id)} className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div> */}
            </div>
        </div>
    )
}
