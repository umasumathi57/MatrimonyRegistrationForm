import Axios from 'axios'

const connect="http://localhost:8081/Task1"

export const join=async(obj)=>{

    const hi=await Axios.post(`${connect}/Newadd`,obj)
    return hi
}

export const assemble=async()=>{

const hlo= await Axios.get(`${connect}/view`)
return hlo
}

export const ReadOne=async(pos)=>{
    const yet=await Axios.get(`${connect}/reading/${pos}`)
    return yet
}

export const UpdateOne=async(obj)=>{
    const my=await Axios.put(`${connect}/update/`,obj)
    return my
}

export const clean=async(dd)=>{
    const hey=await Axios.delete(`${connect}/del/${dd}`)
    return hey
}