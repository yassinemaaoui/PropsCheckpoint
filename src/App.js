
import './App.css';
import React from "react";
import PropTypes from "prop-types";
import  { Bouton } from './profils/Bouton';

import { Photo } from './profils/PhotoProfil';
import Profil from './profils/Profile';







const App = () => {
 return (
   <div >
     <div style={{backgroundColor :"#ebf3f5", marginLeft:10, marginTop:10}}>
     
     
     <Profil ><img src ="/photoprofil.jpg" style={{ height:280}}/> </Profil>
     
     
     
     </div>
     
     
     
     
     
   </div>
 );
};


export default App;
