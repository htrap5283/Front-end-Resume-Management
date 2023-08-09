import axios from "axios";

//const baseURL = "http://localhost:8080/api/v1/employees"

const baseURL = process.env.NODE_ENV === "production" ?"api/v1/employees":"http://18.116.50.68:8080/api/v1/employees"

export default axios.create({
    baseURL:baseURL,
});