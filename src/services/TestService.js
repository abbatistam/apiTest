import axios from "axios";

const BASE_CONFIG = {
    baseURL: import.meta.env.VITE_API_URL,
    headers: { "Content-Type": "application/json", Accept: "*/*" },
    timeout: 50000,
  };


export const createUserService = () => {

    const instance = axios.create(BASE_CONFIG)
    
    const getUser = async () => {
        const response = await instance.get("/users")

        if(response.statusCode !== undefined){
            console.log("Error")
            console.log(response.statusCode)
        } else {
            console.log("Success")
            return response.data
        }
        
    }

    const createUser = async (name, job) => {
        const mokupData = {
            name: name,
            job: job
        }
        const response = await instance.post("/users",mokupData)

        if(response.statusCode !== undefined){
            console.log("Error")
            console.log(response.statusCode)
        } else {
            console.log("Success")
            return response
        }
    }

    const updateUser = async (id, name, job) => {
        const mokupData = {
            name: name,
            job: job
        }

        const response = await instance.patch(`/users/${id}`,mokupData)

        if(response.statusCode !== undefined){
            console.log("Error")
            console.log(response.statusCode)
        } else {
            console.log("Success")
            return response
        }
    }

    const deleteUser = async (id) => {
        const response = await instance.delete(`/users/${id}`)

        if(response.statusCode !== undefined){
            console.log("Error")
            console.log(response.statusCode)
        } else {
            console.log("Success")
            return response
        }
    }

    return {
        createUser,
        getUser,
        updateUser,        
        deleteUser
      };

}

export const userService = createUserService()