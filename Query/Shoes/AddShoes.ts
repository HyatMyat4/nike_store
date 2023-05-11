
 export const addShoe = async ( formdata  : formdata | any ) => {   
    if(!formdata) return 
    const res = await fetch(`http://localhost:4000/shoes/addShoes`, {
        method: "POST",
        headers: {          
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata),
      });
    const responsedata = await res.json();
    return responsedata
}