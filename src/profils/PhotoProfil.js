import React from "react";
export const Photo=(props) => {
    return(
        <>
        <img src ={props.image} style={{ height:230}}/>
        </>
    );
};
Photo.defaultProps={image:  "/photoprofil.jpg" };