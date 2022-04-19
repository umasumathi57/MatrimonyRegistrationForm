import React, { useEffect, useState } from 'react';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { assemble, clean } from './Axiosconnect';
import { MetDetails } from './Matrimonyform';
import { del, list,fetch } from './PersonDetails';
import { Read } from './READ';
import { Update } from './UPDATE';

export const Online=()=>{

    const[localArr,setLocalArr]=useState([])
    const[visual,setVisual]=useState(false)
    const[study,setStudy]=useState(false)
    const[pos,setPos]=useState(0)
    const[edit,setEdit]=useState(false)
    const[object,SetObject]=useState({})

    const view=async()=>{
        const v=await assemble()
        setLocalArr(v.data)
    }

    const toErase=async(value)=>{

        const hey=await clean(value)
        alert(hey.data)
        window.location.assign("/")
    }
    
    useEffect(()=>{
        view()
    },[])
    return(
        <>
        <div className="container">
        {
            (visual)?
            <>
                 <MetDetails/>

                <button onClick={
                    ()=>{
                        setVisual(false)
                        window.location.assign("/")

                    }
                }
                >
                Goback
                </button>
            </>
            :
            (edit)?
            <>
            <Update  store={object}/>

            <button onClick={
                ()=>{
                    setEdit(false)
                    window.location.assign("/")

                }
            }
            >
            Goback
            </button>
            </>
            :
            (study)?
            <>
            <Read who={pos}/>
            <button onClick={
                ()=>{
                    setStudy(false)
                }
            }
            
            >
                Go back
            </button>
            </>
            :
       
        <>

        <button 
        onClick={
            ()=>{
                setVisual(true)
            }
        }
        >
            New
            <i class="bi bi-file-earmark-plus-fill"></i>
        </button>
        

            <div className="row justify-content-center mt-5">
                <div className="card bg-info text-light shadow-lg ">
                <table className='table table-hover'>
                    <thead>
                        <tr>
                        <th> UserName</th>
                        <th> FirstName</th>
                        <th> Gender</th>
                        <th> Qualification</th>
                        <th> Age</th>
                        <th> Mblno</th>
                        <th> Email</th>
                        <th> Lang </th>
                        <th className='text-center'> Action</th>

                        
                        </tr>
                    </thead>
                    <tbody>
                        {localArr.map((elements,index)=>(
                                             
                        <tr>
                            <td>
                                
                                <button onClick={
                                    ()=>{
                                        setStudy(true)
                                        setPos(elements.diaId)
                                    }
                                }
                                >
                                Read
                                </button>
                                
                                
                                
                                {elements.diaUname}</td>

                            <td>{elements.diaFname}</td>
                            <td>{elements.diaGen}</td>
                            <td>{elements.diaQuali}</td>
                            <td>{elements.diaAge}</td>
                            <td>{elements.diaMblNo}</td>
                            <td>{elements.diaEmail}</td>
                            <td>{elements.diaLang}</td>
                            <td>
                               
                                <button className='btn btn-warning ms-3'
                                onClick={
                                    ()=>{
                                        setEdit(true)
                                      //  setPos(index)
                                      //  const my=fetch(elements.diaUname)
                                        SetObject(elements)
                                    }
                                }
                                >
                                    Modify
                                    <i class="bi bi-pencil-square"></i>
                                </button>
                                <button className="btn btn-danger ms-3"

                                onClick={
                                    ()=>{
                                     //</td> setLocalArr( del(pos))
                                     toErase(elements.diaId)
                                    }
                                }
                                
                                >
                                    Discard
                                    <i class="bi bi-trash-fill"></i>
                                </button>
                            </td>

                            
                        </tr>
  ))}
                    </tbody>
            
                </table>
                </div>

            </div>
                            </>
        }
    
        </div>
        </>    
    )}