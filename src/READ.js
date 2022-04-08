import React, { useEffect, useState } from 'react';
import { read } from './PersonDetails';

export const Read=(sri)=>{

    const[book,setBook]=useState({

            diaUname:"",
            diaFname:"",
            diaGen:"",
            DiaQuali:"",
            diaAge:"",
            diaMblno:"",
            diaEmail:"",
            diaLang:new Array()
       
    })

    useEffect(()=>{
        studying()
    })

    const studying=()=>{
        setBook(read(sri.who))
    }

    return(
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="card  bg-dark text-light">
                        <h3 className="card-title text-center">Specific Details</h3>
                        <div className="card-body">
                        <p>{book.diaUname}</p>
                            <p>{book.diaFname}</p>
                            <p>{book.diaGen}</p>
                            <p>{book.diaQuali}</p>
                            <p>{book.diaAge}</p>
                            <p>{book.diaMblno}</p>
                            <p>{book.diaEmail}</p>
                            <p>{book.diaLang}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}