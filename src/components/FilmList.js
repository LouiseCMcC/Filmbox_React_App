import React from "react";
import Film from "./Film";

const FilmList = ({films}) => {

    const filmNodes = films.map(film => {
        return (
            <li className="film-list"><Film url={film.url} key={film.id}>{film.name}</Film></li>
        );
    });

    return(
        <>
        {filmNodes}
        </>
    );
};

export default FilmList;




