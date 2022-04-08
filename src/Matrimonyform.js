import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { create } from "./PersonDetails";

export const MetDetails=()=>
{
    const[diary,SetDiary]=useState(
        {
            diaUname:"",
            diaFname:"",
            diaGen:"",
            diaQuali:"",
            diaAge:"",
            diaMblno:"",
            diaEmail:"",
            diaLang:new Array()

        }
    )
    const trace=(team)=>{
        const{name,value}=team.target;
        SetDiary(
            (prev)=>{
                return{
                ...prev,
                [name]:value
            }
        }
            )
        
    }
    const track=(teams)=>{
        const{value}=teams.target
        diary.setLang.push(value)

    }

    const save=()=>{
        alert("Details saved successfully")
        create(diary)
    }

    const remove=()=>{
        alert("details discarded")
    }


    const Imgsrc=
    {
        width:'170px',
        height:'180px',
        backgroundImage:'Images/Matrimony images.jpg'
    }
    const ff={
        fontFamily:'Viner Hand ITC'
    }
    const shape1={
        fontFamily:'Harrington',
        width:'130px'
    }
    const shape={
        fontFamily:'Viner Hand ITC'
    }
    return(
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-10 col-sm-12 p-4 bg-secondary text-light card ">
                    <h1 style={ff} className="card-title text-center"> TAMIL MATRIMONY</h1>
                    <div className="card-body">
                    <img src="Images/mrgstill.jpg" className="card-img " style={Imgsrc} ></img>
                    <p className=" float-end" style={shape1}><span className="text-dark" style={shape}>Marriage</span> <br/>Infinite blessings,<br/>Thousands of people,<br/>Three knots,<br/>Two hearts<br/>Becomes<br/>One soul</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-10 col-sm-12 p-4 mt-3 shadow">
                    <div className="form-group mt-2">
                        <label>Username</label>
                        <input type="text" 
                        onChange={trace}
                        value={diary.diaUname}
                        name="diaUname"
                        placeholder="Enter the username" 
                        className="form-control"/>
                    </div>
                    <div className="form-group mt-2">
                        <label>Fullname</label>
                        <input type="text" 
                        onChange={trace}
                        value={diary.diaFname}
                        name="diaFname"
                        placeholder="Enter the Fullname" 
                        className="form-control"/>
                    </div>
                    <div>
                        <label className="mt-2">Gender</label>
                        <input 
                        onChange={trace}
                        value={diary.diaGen}
                        type="radio" 
                        name="diaGen" 
                        className="ms-3"/>Male
                        <input 
                        onChange={trace}
                        value={diary.diaGen}
                        type="radio" 
                        name="diaGen" 
                        className="ms-3"/>Female
                        <input 
                        onChange={trace}
                        value={diary.diaGen}
                        type="radio" 
                        name="diaGen" 
                        className="ms-3"/>others
                    </div>
                    <div className="form-group mt-2">
                        <label>Qualification</label>
                        <input 
                        type="text" 
                        name="diaQuali"
                        onChange={trace}
                        value={diary.diaQuali}
                        placeholder="Enter Your qualification" 
                        className="form-control"/>
                    </div>
                    <div className="form-group mt-2">
                        <label>Looking for selected age</label>
                        <select 
                        onChange={trace}
                        name="diaAge"
                        value={diary.diaAge}
                        className="form-select mt-">
                            <option selected hidden>Age limit</option>
                            <option>21-25</option>
                            <option>26-30</option>
                            <option>31-40</option>
                        </select>
                    </div>
                    <div className="form-group mt-2">
                        <label>Contact no</label>
                        <input 
                        type="tel" 
                        onChange={trace}
                        name="diaMblno"
                        value={diary.diaMblno}
                        placeholder="Enter the number" className="form-control"/>
                    </div>
                    <div className="form-group mt-2">
                        <label>Mail-id</label>
                        <input 
                        type="email" 
                        onChange={trace}
                        name="diaEmail"
                        value={diary.diaEmail}
                        placeholder="Enter your email-id" className="form-control"/>
                    </div>
                    <div className="form-group mt-2">
                        <label>Languages</label>
                        <input onChange={track}

                        type="checkbox"  className="form-input-check ms-4"/>Tamil
                        <input 
                        onChange={track}
                        name="Telugu"
                        value="Telugu"
                        type="checkbox"  className="form-input-check ms-4"/>Telugu

                        <input 
                        onChange={track}
                        type="checkbox"  
                        name="Kannada"
                        value="Kannada"
                        className="form-input-check ms-4"/>Kannada
                        

                        <input
                        name="Malayalam"
                        value="Malayalam"
                        onChange={track}

                        type="checkbox"  className="form-input-check ms-4"/>Malayalam
                    </div>
                    <div className="row justify-content-around mt-4">
                        <button onClick={save} className="btn btn-outline-success col-4">Register </button>
                        <button onClick={remove} className="btn btn-outline-danger col-4">Cancel</button>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
    
    
}