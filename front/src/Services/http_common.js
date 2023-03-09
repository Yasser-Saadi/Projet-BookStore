import axios from "axios";

export default axios.create(
    {
        baseURL:"http://localhost:4040",
        Headers:{"content-type":"application/json"}
    }
)