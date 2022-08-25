import axios from "axios"
import React, { useEffect, useState } from "react"
import { ButtonGroup } from "react-bootstrap"
import Modales from "../Utilities/modales"
const Articles = () => {
    const [datas, setDatas] = useState([]) 
    const[limit, setLimit] = useState(3)

    useEffect(() => {
        let isCancelled = false
        if(isCancelled === false) {
            axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`
            }).then((result) => setDatas(result.data))   
        }
        return () => {isCancelled = true}
    }, [limit])

    const handleLimit = (option) => {
        option === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1)
        }

    return (
    <React.Fragment>
    <h5>Halaman ini memiliki {limit} Posts</h5>
    <section className="py-3 py-lg-4 container">
        <div className="row justify-content-center align-item-center">
            {/* mapping data start */}
            {datas.map((data, i) => {
            return (
            <Modales 
                title = {data.title}
                description = {data.body}
                id = {data.id}
                userID = {data.userId}
            />
            )
        })}
            <ButtonGroup className="mt-4 d-flex justify-content-center align-item-center">
                <div className="mt-2 mx-3">
                <button className="btn btn-outline-primary" onClick={() => handleLimit('+')}>add</button>
                </div>
                {
                    limit > 1 ? (
                    <div className="mt-2">
                    <button className="btn btn-outline-danger" onClick={() => handleLimit('-')}>remove</button>
                    </div>
                    ):(
                        ""
                    )}
            </ButtonGroup>
        </div>
    </section>
    </React.Fragment>
    )
}

export default Articles