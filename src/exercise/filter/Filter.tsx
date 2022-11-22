import { ChangeEvent, useState } from "react"

const data = [
    {
        'name': 'Adam',
        'id': 1
    },
    {
        'name': 'Thomas',
        'id': 2
    },
    {
        'name': 'Mark',
        'id': 3
    },
    {
        'name': 'Kyle',
        'id': 4
    }
]

function Filter() {

    const [userData, setUserData] = useState(data);

    const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {

        if (event.target.value === "") {
            setUserData(data);
            return
        };

        const dataToFilter = userData;
        const filteredData = dataToFilter.filter((item) =>
            item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        );
        setUserData(filteredData);
    };

    return (
        <div>
            <label htmlFor="filter">Search</label>
            <input
                name="filter"
                onChange={handleFilterChange}></input>

            <ul>
                {userData.map((p) => {
                    return (
                        <li key={p.id}>
                            {p.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Filter