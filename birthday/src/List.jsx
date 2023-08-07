import React from "react";
import Person from "./Person";

const List = ({ friends })  => {
    return (
        <section>
            {friends.map((person) => {
                return <Person key={person.id} {...person} />
            })}
        </section>
    );
};

export default List;