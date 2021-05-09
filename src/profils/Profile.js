import react from "react";
import { Bouton } from "./Bouton";


    const Profil =(props)=>{
return(
    <div style={{display : "flex"}}>
    {props.children}
    <div>
<h1 style={{marginLeft :20,marginTop : -8}}>{props.fullName}</h1>
<h2 style={{ width :70 , height : 45 ,marginLeft :40 , marginTop : -20}}>{props.profession}</h2>
<p style = {{ width : "50%" , height : 110,marginLeft: 20,marginTop : 0}}>{props.bio}</p>
<Bouton/>
    </div>
    </div>
);
};
Profil.defaultProps={
    fullName :"Yassine Maaoui",
    profession :"Avocat",
    bio : "Diplomé d'une licence en droit privée en 2013 j'ai réussis le concours d'entré à l'institut supérieur à la profession d'avocat ou j'ai passé 2 ans d'étude qui ont aboutit à l'obtention du certificat d'aptitude à la profession d'avocat avec laquelle j'ai pu m'inscrire en tant qu'avocat l'ordre national d'avocat de tunisie."};
    

export default Profil
