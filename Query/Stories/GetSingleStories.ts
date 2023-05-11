
export const GetSIngleStories = async (id : string) => {      
    if(!id) return 
    try{
      const res = await fetch(`http://localhost:4000/stories/getSingleStories/${id}`, {
        method: "GET",
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