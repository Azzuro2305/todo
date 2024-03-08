import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Images from "../Components/Images/Images";
import { AddBtn } from "../Components/Buttons/AddBtn";
import axios from "axios";

export function CategoryForm() {
    const [categoryData, setCategoryData] = useState({
        name: "",
        imageUrl: "",
    });

    const { id } = useParams();

    useEffect(() => {
        if(id != null) {
          axios.get(`http://localhost:8080/categories/${id}`)
            .then(response => {
              const categoryData = response.data;
              setCategoryData({
                name: categoryData.name,
                imageUrl: categoryData.imageUrl,
              });
            })
            .catch(error => {
              console.error("Error fetching category data:", error);
            });
        }
      }, [id]);




    const submitHandler = (e) => {
        e.preventDefault();
        if (!categoryData.imageUrl || !categoryData.name) {
            alert("Please fill all the fields");
            return;
        }
    
        const apiUrl = "http://localhost:8080/categories";
        if (id != null) {
            axios
                .put(`${apiUrl}/${id}`, {
                    name: categoryData.name,
                    imageUrl: categoryData.imageUrl,
                })
                .then((value) => {
                    console.log(value);
                    window.location.reload();
                });
        } else {
            axios
                .post(apiUrl, {
                    name: categoryData.name,
                    imageUrl: categoryData.imageUrl,
                })
                .then((value) => {
                    console.log(value);
                    window.location.reload();
                });
        }
    };



    

    return (
        <>
            <section className="px-10 py-20 w-[430px] h-[932px] bg-gray-500">
                <div>
                    <Link className="link" to="/">
                        <img src={Images.back_arrow} alt="" />
                    </Link>
                    <h1 className="font-bold mt-6 mb-8">Add Category</h1>
                </div>
                <form action="" onSubmit={submitHandler}>
                    <label className="block mb-4" htmlFor="">
                        Name
                    </label>
                    <input
                        className="bg-[#F2F2F2] mb-4 p-3 rounded-lg w-full"
                        value={categoryData.name}
                        onChange={(e) => setCategoryData({ ...categoryData, name: e.target.value })}
                        type="text"
                        placeholder="example: Book"
                    />
                    <label className="block mb-4" htmlFor="">
                        Image
                    </label>
                    <input
                        className="bg-[#F2F2F2] p-3 rounded-lg w-full"
                        value={categoryData.imageUrl}
                        onChange={(e) => setCategoryData({ ...categoryData, imageUrl: e.target.value })}
                        type="text"
                        placeholder="Image Url"
                    />
                    {id != null ? <AddBtn txt={"Update Category"} /> : <AddBtn txt={"Create Category"} />}
                </form>
            </section>
        </>
    );
}
