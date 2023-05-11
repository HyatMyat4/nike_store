

export const GetallStories = async ( ) => {     
    try{
      const res = await fetch(`http://localhost:4000/stories/getallStories`, {
        method: "GET",
        headers: {          
          'Content-Type': 'application/json'
        },   
         cache :'no-cache',
         next :{ revalidate : 20  }
      });
    const responsedata  = await res.json();    
    return responsedata
    } catch (err) {
      console.warn(err);
    }
      
   }