import { React, UseState, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Images from "../Components/Images/Images";
import { AddBtn } from "../Components/Buttons/AddBtn";
import axios from "axios";

export function TaskForm() {
    const [repeatOption, setRepeatOption] = useState("EVERY_DAY");
    const repeatOptions = ["EVERY_DAY", "EVERY_WEEK", "EVERY_MONTH"];
    const [categoryOption, setCategoryOption] = useState([]);
    const [taskData, setTaskData] = useState({
        label: "",
        startTime: "",
        endTime: "",
        repeatType: "",
        category: {
            id: "",
        },
    });

    const { id } = useParams();
    useEffect(() => {
        if (id != null) {
            axios
                .get(`http://localhost:8080/tasks/${id}`)
                .then((response) => {
                    console.log("response" + response.data.category.id);
                    setTaskData({
                        label: response.data.label,
                        startTime: response.data.startTime,
                        endTime: response.data.endTime,
                        repeatType: response.data.repeatType,
                        category: {
                            id: response.data.category.id,
                        },
                    });
                    console.log("category id: " + taskData.category.id);
                })
                .catch((error) => {
                    console.error("Error fetching category data:", error);
                });
        }
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        if (
            !taskData.label ||
            !taskData.startTime ||
            !taskData.endTime ||
            !taskData.category ||
            !taskData.repeatType
        ) {
            alert("Please fill all the fields");
        }
        const apiUrl = "http://localhost:8080/tasks";
        if (id != null) {
            console.log({
                label: taskData.label,
                startTime: taskData.startTime,
                endTime: taskData.endTime,
                repeatType: taskData.repeatType,
                category: {
                    id: taskData.category.id,
                },
            });
            axios
                .put(`${apiUrl}/${id}`, {
                    label: taskData.label,
                    startTime: taskData.startTime,
                    endTime: taskData.endTime,
                    repeatType: taskData.repeatType,
                    category: {
                        id: taskData.category.id,
                    }
                })
                .then((value) => {
                    console.log(value);
                    window.location.reload();
                });
        } else {
            axios
                .post(apiUrl, {
                    label: taskData.label,
                    startTime: taskData.startTime,
                    endTime: taskData.endTime,
                    repeatType: taskData.repeatType,
                    category: {
                        id: taskData.category.id,
                    },
                })
                .then((value) => {
                    window.location.reload();
                });
            console.log(taskData);
            axios.get(apiUrl).then((res) => console.log(res.data));
        }
    };
    console.log(taskData)

    const categoryapiUrl = "http://localhost:8080/categories";
    useEffect(() => {
        axios
            .get(categoryapiUrl)
            .then((res) => {
                setCategoryOption(res.data);
            })
            .catch((error) => console.error.apply(error));
    }, []);

    return (
        <>
            <section className="px-10 py-20 w-[430px] h-[932px] bg-gray-500">
                <div>
                    <Link className="link" to="/">
                        <img src={Images.back_arrow} alt="" />
                    </Link>
                    <h1 className="mt-6 mb-8 font-bold">Add Task</h1>
                </div>
                <form action="" onSubmit={submitHandler}>
                    <div className="">
                        <label className="block mb-4" htmlFor="">
                            Label
                        </label>
                        <input
                            className="bg-[#F2F2F2] p-3 rounded-lg w-full"
                            type="text"
                            placeholder="Create Instagram post"
                            value={taskData.label}
                            onChange={(e) =>
                                setTaskData({
                                    ...taskData,
                                    label: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="my-4" htmlFor="">
                            Start
                        </label>
                        <input
                            className="bg-[#F2F2F2] p-3 rounded-lg"
                            type="time"
                            name="startTime"
                            value={taskData.startTime}
                            onChange={(e) =>
                                setTaskData({
                                    ...taskData,
                                    startTime: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="my-4" htmlFor="">
                            End
                        </label>
                        <input
                            className="bg-[#F2F2F2] p-3 rounded-lg"
                            type="time"
                            name="endTime"
                            value={taskData.endTime}
                            onChange={(e) =>
                                setTaskData({
                                    ...taskData,
                                    endTime: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex justify-center gap-12 items-center my-4">
                        <div>
                            <label
                                className="block mb-4 text-center"
                                htmlFor=""
                            >
                                Category
                            </label>
                            <select
                                className="bg-[#F2F2F2] p-3 rounded-lg mb-4 text-center w-[150px]"
                                name="categoryData"
                                id="categoryData"
                                value={taskData.category.id}
                                onChange={(e) =>
                                    setTaskData({
                                        ...taskData,
                                        category: { id: e.target.value },
                                    })
                                }
                            >

                                {categoryOption &&
                                    categoryOption.map((option, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={option.id}
                                            >
                                                {option.name}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className="input-box">
                            <label
                                className="block mb-4 text-center"
                                htmlFor="repeatOption"
                            >
                                Repeat
                            </label>
                            <select
                                className="bg-[#F2F2F2] p-3 rounded-lg mb-4 text-center w-[150px]"
                                name="repeatOption"
                                id="repeatOption"
                                value={taskData.repeatType}
                                onChange={(e) =>
                                    setTaskData({
                                        ...taskData,
                                        repeatType: e.target.value,
                                    })
                                }
                            >
                                {id != null
                                    ? repeatOptions.map((option, index) => (
                                          <option
                                              key={index}
                                              value={option}
                                              defaultValue={taskData.repeatType}
                                          >
                                              {option}
                                          </option>
                                      ))
                                    : repeatOptions.map((option, index) => (
                                          <option key={index} value={option}>
                                              {option}
                                          </option>
                                      ))}
                            </select>
                        </div>
                    </div>

                    <AddBtn txt={"Create Task"} />
                    {id != null ? (
                        <AddBtn txt={"Update Task"} />
                    ) : (
                        <AddBtn txt={"Create Task"} />
                    )}
                </form>
            </section>
        </>
    );
}
