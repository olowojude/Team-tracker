import data from "../data"

function Card() {

    data.map(e => (
        console.log(e)
    ))
    return (
        <div>
            {data.map(person => (
                <div key={person.id} className="container">
                    <h3>{person.fullName}</h3>
                    <span>{person.designation}</span>
                </div>
            ))}
        </div>
    )
}

export default Card