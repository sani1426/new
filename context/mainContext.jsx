"use client"

import BackendApi from "@/common/api";
import axios from "axios";

const { createContext, useContext, useState, useEffect } = require("react");


const MainContext = createContext()


export const MainContextProvider = ({children}) => {
        const [services, setServices] = useState([])
        const [menus, setMenus] = useState([])

        const getAllMenu = async () => {
                const { data } = await axios.get(BackendApi.getAll_Menu.url)
                if (data?.success) {
                  setMenus(data?.data)
                }
              }
              const getAllServices = async () => {
                const { data } = await axios.get(BackendApi.getAll_Services.url)
                if (data?.success) {
                  setServices(data?.data)
                }
              }
            
              useEffect(() => {
                getAllMenu()
                getAllServices()
              }, [])

        return (
                <MainContext.Provider value={{services , menus}}>
                        {children}
                </MainContext.Provider>
        )
}

export const useMainContext = ()=> useContext(MainContext)