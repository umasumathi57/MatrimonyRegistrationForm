let arr=[
    {
            diaUname:"SmartManoj",
            diaFname:"ManojKumar",
            diaGen:"Male",
            diaQuali:"MCA",
            diaAge:"21",
            diaMblno:"1234567890",
            diaEmail:"manoj@gmail.com",
            diaLang:["Malayalam","Tamil"]

    },
    {
            diaUname:"umabalu",
            diaFname:"Sriumadevi",
            diaGen:"Female",
            diaQuali:"BE",
            diaAge:"22",
            diaMblno:"9876543210",
            diaEmail:"umasumathi57@gmail.com",
            diaLang:["Telugu","Tamil"]
    },
    {
            diaUname:"lovlyIndu",
            diaFname:"Indumathi",
            diaGen:"Female",
            diaQuali:"BE",
            diaAge:"23",
            diaMblno:"3456789065",
            diaEmail:"indu@gmail.com",
            diaLang:["English"]
    }
]
export const list=()=>{
    return arr;
}

export const create=(ob)=>{
        arr.push(ob)
}

export const del=(uma)=>{
        arr=arr.filter((ele,pos)=>{

             return pos!==uma   
        })
         return list();
        
}

export const read=(index)=>{
  return arr[index]
}

export const fetch=(name)=>{

        const temp=arr.filter((ele)=>{
                return ele.diaUname===name
        } )
        return temp[0]

}

export const alter=(place,data)=>{
        arr[place]=data;
}