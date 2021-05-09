import React from "react";
import Profil from "./Profile";
function ActionButton(e,Profil){
  
    e.preventDefault();
     
    alert ("Yassine Maaoui");
    

}

export const Bouton=(props) =>{
return(
    <button onClick={ActionButton}  style={{width : "100px",height:"30px" ,border :"solid 1px grey",borderRadius:"6px",backgroundColor :"#0001",textAlign :"center",marginLeft : 410,marginTop:24}}>click{props.children} </button>

    );
};