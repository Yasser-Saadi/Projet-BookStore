import axios from "./http_common"


async function getAll()
{
    return  await axios.get("/Book")
}
async function getone(id)
{
    return  await axios.get(`/Book/${id}`)
}
async function Deleteone(id)
{
    return  await axios.delete(`/Book/${id}`)
}
async function Addone(tmp)
{
    return  await axios.post("/Book/",tmp)

}async function Updateone(tmp)
{
    return  await axios.put(`/Book/${tmp._id}`,tmp)
}

const req={getAll,Deleteone,Addone,getone,Updateone}
export default req