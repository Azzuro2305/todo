import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Images from "../Components/Images/Images";
import { Category } from "../Components/Category/Category";
import { CategoryContainerRequest } from "../api/CategoryContainerRequest";
import axios from "axios";

export function CategoryContainer() {
    const [categories, setCategories] = useState([]);
    const apiUrl = "http://localhost:8080/categories";
    useEffect(() => {
        axios
            .get(apiUrl)
            .then((res) => {
                setCategories(res.data);
            })
            .catch((error) => console.error.apply(error));
    }, []);

    return (
        <>
            <section className="mt-4">
            <hr className="border-black"/>
                <div className="my-2">
                    <h1 className="font-bold">Hey there, Vally</h1>
                    <p>Organize your plans for the day</p>
                    <div className="flex flex-row justify-between mt-5">
                        <h3>Categories</h3>
                        <div>
                            <Link className="link" to="/categoryform">
                                <img src={Images.add_category} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className="categories flex gap-8 justify-start items-center overflow-x-scroll mt-2">
                    {
                        categories.map((category) => {
                            return (
                                <Category
                                    key={category.id}
                                    txt={category.name}
                                    imageUrl={category.imageUrl}
                                    id={category.id}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
}
