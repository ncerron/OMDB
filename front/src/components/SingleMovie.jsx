import React from 'react'

export default function SingleMovie({movie, handleClickAdd,favourites, handleClickDelete}) {
    return (
        <div className="container ">
            <div className="row">
                <div className="col-sm-8 mt-5" >
                    <div className="card mt-2 text-center mx-auto" style={{ width: "20rem", color:"#4b3558" }}>
                        <img className="rounded mx-auto d-block mt-3" src={movie.Poster} style={{ width: "80%" }} alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="card-title">{movie.Title}</h4>
                            <p>{movie.Plot}</p>
                            <h5>{movie.Year}</h5>
                            <p>{movie.Genre}</p>
                            <button onClick={handleClickAdd} className="btn btn-primary">Add to Favorite</button>
                        </div>
                    </div>
                    </div>
                <div className="col-sm-4 text-center mt-3" >
                    {favourites.length > 0 ? <h5>Favourites</h5> : null}
                    {favourites && favourites.map(m =>
                        <div key={m.id}>
                            <div className="card mt-3 text-center mx-auto" style={{ width: "12rem", backgroundColor: "#4b355859" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{m.title}</h5>
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
