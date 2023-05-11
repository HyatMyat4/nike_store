
export const DeleteStories = async (id : number) => {      
    if(!id) return
    try{
      const res = await fetch(`http://localhost:4000/stories/deleteStories/${id}`, {
        method: "DELETE",
        headers: {          
          'Content-Type': 'application/json'
        },              
      });
         const responsedata = await res.json();   
          return responsedata
    } catch (err) {
      console.warn(err);
    }      
   }