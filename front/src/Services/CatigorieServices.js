import axios from "./http_common"


async function getAll()
{
    return  await axios.get("/Catigorie")
}
async function getone(id)
{
    return  await axios.get(`/Catigorie/${id}`)
}
async function Deleteone(id)
{
    return  await axios.delete(`/Catigorie/${id}`)
}
async function Addone(tmp)
{
    return  await axios.post("/Catigorie/",tmp)

}async function Updateone(tmp)
{
    return  await axios.put(`/Catigorie/${tmp._id}`,tmp)
}

const req2={getAll,Deleteone,Addone,getone,Updateone}
export default req2