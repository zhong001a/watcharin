"use client";
import React, { useEffect, useState } from "react";
import { getProducts } from "../server/actions";
import { create, submitForm } from "./action";
import { useFormState } from "react-dom";

const page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialState: any = {
    message: "",
    lastname: ""
  };

  const [state, formAction] = useFormState(create, initialState);
  
  const getData = async () => {
    try {
      const result = await getProducts();
      setData(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((product: any, index: number) => (
          <h2 key={index}>{product.name}</h2>
        ))
      )}

      <form action={formAction}>
        <input type="text" name="username" />
        <input type="text" name="lname" />
      
        <button>submit:</button>
      </form>
      <p>username : {state.message}</p>
      <p>lastname : {state.lastname}</p>
    </div>
  );
};

export default page;
