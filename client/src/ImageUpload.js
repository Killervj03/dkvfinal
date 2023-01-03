import React,{useState} from "react";

function ImageUpload(){
    const [data,setData]=useState();
    console.log(data)
    return(
        
        <div className="main">
            
            <div className="uploadimage">
                <label htmlFor="imgs">Upload</label>

            
            <input id="image" type="file" accept="image/png, image/jpeg" onChange={(e)=>setData(e.target.files)}/>
            </div>
        </div>

    );

}
export default ImageUpload;