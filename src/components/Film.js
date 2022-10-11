import React from "react";

const Film = ({url, children}) => {
    return (
        <>
        <div>
            <a className="film-link" href={url} target="blank">{children}</a>
            </div>
        </>
    );
};

export default Film;

