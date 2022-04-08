import React, { useEffect, useState } from 'react';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
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

    const view=()=>{
        setLocalArr(list())
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
                    }
                }
                >
                Goback
                </button>
            </>
            :
            (edit)?
            <>
            <Update who={pos} store={object}/>

            <button onClick={
                ()=>{
                    setEdit(false)
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
                                        setPos(index)
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
                            <td>{elements.diaMblno}</td>
                            <td>{elements.diaEmail}</td>
                            <td>{elements.diaLang}</td>
                            <td>
                               
                                <button className='btn btn-warning ms-3'
                                onClick={
                                    ()=>{
                                        setEdit(true)
                                        setPos(index)
                                        const my=fetch(elements.diaUname)
                                        SetObject(my)
                                    }
                                }
                                >
                                    Modify
                                    <i class="bi bi-pencil-square"></i>
                                </button>
                                <button className="btn btn-danger ms-3"

                                onClick={
                                    ()=>{
                                      setLocalArr( del(pos
                                        ) )
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