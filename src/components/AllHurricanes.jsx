
// You'll probably need these imports...

import { useEffect, useState } from "react"
import Hurricane from "./Hurricane";
import { Col, Container, Pagination, Row } from "react-bootstrap";

export default function AllHurricanes() {

    // 0. Create a state variable called "hurricanes".
    //    By default, it should be an empty array.
    // 1. Fetch data from https://cs571.org/api/f23/weekly/week05
    //    and save it to this state variable.
    // 2. Display a Hurricane component for each hurricane.
    // 3. Display the data for this hurricane.
    // 4. Make it responsive so that...
    //     - On XS devices, 1 column is displayed.
    //     - On MD devices, 2 columns are displayed.
    //     - On LG devices, 3 columns are displayed.
    // 5. Fix your key error!
    // 6. Paginate so that up to 6 elements are displayed on a page.

    const [hurricanes, setHurricanes] = useState([]);

    useEffect(() => {
        fetch("https://cs571.org/api/f23/weekly/week05", {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        }).then(res => res.json())
        .then(data => {
            setHurricanes(data)
        })
    }, []);

    console.log(hurricanes)

    return <div>
        <h1>Hurricane Finder</h1>
        {
            hurricanes.map(hurr => <Hurricane {...hurr} />)
        }
    </div>
}