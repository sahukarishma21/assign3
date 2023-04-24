import { Fragment } from "react"

function Invitation(props){
   
   const details={
    Subject: "  Birthday party Invitation" ,
    To:"  jaGdish@gmail.com",
    partyname: " birthday party",
    otherguest:"Ritu , Saurabh , Kartik",
    near: "Green field Avenue",
    name:<h4>jaGdish</h4>
}
   //partyname,otherguest,near,from}
    return(
        <Fragment>
    <h4>Subject:{details.Subject}</h4>
    <h4>To:{details.To}</h4>
<div> I am having a {details.partyname} next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming . you know some of them -{details.otherguest}.
<br></br>
<br></br>
my house behind our school , near {details.near} .
<br></br>
<br></br>
I hope you will come and see you soon .
<br></br>
from,{details.name}

</div>

    </Fragment>
    );
}
export default Invitation ;