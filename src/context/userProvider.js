"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { toast } from "react-toastify";
import { httpAxios } from "@/helper/httpHelper";
import { currentUser } from "@/services/userService";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    
    async function load(){
        try {
            const logUser = await currentUser();
            console.log(logUser);
            setUser({ ...logUser});
      
            httpAxios.get("/api/cuurent");
          } catch (error) {
            console.log(error);
            //toast.error("error in loading current user !!");
            setUser(undefined);
          }
    }
   load();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
