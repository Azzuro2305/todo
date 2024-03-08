import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import Images from "../Images/Images";
import axios from "axios";

export function Task({ txt, id }) {
    const deleteHandler = (id) => {
        const deleteapiUrl = `http://localhost:8080/tasks/${id}`;
        axios
            .delete(deleteapiUrl)
            .then(() => {
                window.location.reload();
            })
            .catch((error) => console.error.apply(error));
    }

    return (
        <>
            <div className="flex justify-between bg-white p-4 rounded-lg">
                <div className="flex gap-4">
                    <input type="checkbox" />
                    <p>{txt}</p>
                </div>
                <div className="flex gap-2">
                    <Link to={`taskform/${id}`}>
                        <img src={Images.edit} alt="" />
                    </Link>
                    <button onClick={() => deleteHandler(id)}>
                        <img src={Images.bin} alt="" />
                    </button>
                </div>
            </div>
        </>
    );
}
