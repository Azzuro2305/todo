import { React, useState } from "react";
import Images from "../Images/Images";
import { Link } from "react-router-dom";
import { CategoryForm } from "../../Pages/CategoryForm";
import axios from "axios";

export function Category({ txt, imageUrl, id }) {
    const deleteHandler = (id) => {
        const deleteapiUrl = `http://localhost:8080/categories/${id}`;
        axios
            .delete(deleteapiUrl)
            .then(() => {
                window.location.reload();
            })
            .catch((error) => console.error.apply(error));
    };

    return (
        <>
            <div className="flex flex-col gap-2 items-center relative group">
                <button
                    onClick={() => deleteHandler(id)}
                    className="absolute bottom-5 left-6 opacity-0 group-hover:opacity-100"
                >
                    <img src={Images.category_delete} alt="category_image" />
                </button>
                <Link
                    to={`categoryform/${id}`}
                    className="absolute bottom-5 right-6 opacity-0 group-hover:opacity-100"
                >
                    <img src={Images.category_edit} alt="category_image" />
                </Link>
                <button className="bg-[#F2F2F2] p-2 rounded-[20px] w-[50px] h-[50px]">
                    <img
                        className="max-w-full"
                        src={imageUrl}
                        alt="category_image"
                    />
                </button>
                <p className="w-14 overflow-x-hidden text-center">{txt}</p>
            </div>
        </>
    );
}
