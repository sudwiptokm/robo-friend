import React from "react";

const Card = (props) => {
    const {name, id, email} = props; //Object Destructuring
    return(
        <div className = "tc bg-light-blue br3 dib pa3 ma2 dim bw5 shadow-5">
            <img alt = "Robots" src = {`https://robohash.org/${id}`} width="300px"/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
        </div>
    )
}

export default Card;