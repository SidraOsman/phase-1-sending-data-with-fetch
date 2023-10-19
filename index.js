// Add your code here
destinationUrl = "http://localhost:3000/dogs"

const formData ={
    dogName:"Byron",
    dogBreed:"Poodle",
}

const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      dogName: "Byron",
      dogBreed: "Poodle",
    }),
  };

  fetch (destinationUrl , configurationObject)
  .then(res=>res.json())
  .then((object)=>{console.log(object);})
  .catch(function(error){
    alert("Bad things! Ragnarök!");
    console.log(error.message);
  });


  const submitData = {
    method:"POST",
    headers:{
        "Conent-Type":"application/json",
        Accept:"application/json",
    },
    body:JSON.stringify({
        name:"Mary Anne",
        email:"maryanne@gmail.com",
    }),
  };

  url = "http://localhost:3000/users"


  fetch(url , submitData)
  .then(res=>res.json())
  .then((object)=>{console.log(object);})
  .catch(function(error){
    alert("Bad things!");
    console.log(error.message);
  });
