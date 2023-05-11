
export const addStories = async ( formdata  : formdata | any ) => {   
  try{


    if(!formdata) return 
    const res = await fetch(`http://localhost:4000/stories/addStories`, {
        method: "POST",
        headers: {          
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata),
      });
    const responsedata = await res.json();
    return responsedata
  } catch (err){
    console.warn(err)
  }
}