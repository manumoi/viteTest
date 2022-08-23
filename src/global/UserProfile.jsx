import React, {useState} from 'react'

const UserProfile =()=>{
    const [organizationId, setOrganizationId]= useState(1234)
    
    function handleIncrement(){
      let oid = organizationId+1
      //     setOrganizationId(oid)
      console.log(oid);
    }
}


export default UserProfile

    // function handleIncrement(){
    //     let oid = organizationId+1
    //     setOrganizationId(oid)
  	//     console.log(oid);
    // 



// const SessionData() => {

    


//     // organizationId:"1234",
//     // organizationName:"IDU",
//     // userId: "abcd",
//     // userName: "Manu",
//     // contentId: "5e6f7g",
//     // contentTitle: "Premier contenu",
//     // variantId: "dfjskljfdkl",
//     // variantTitle : "blablabla",
//     // studyId:"zzzzjhklfdjh",
//     // studyTitle: "evaluation 1"
// }

// export default SessionData;