function deleteCar(id){
    fetch("http://localhost:3000/cars/" +id, {
        method: "DELETE"
    })
    .then (response =>{
        location.reload();
    })
    .catch (error=> console.log(error))
};
function deleteCountry(id){
    fetch("http://localhost:3000/countries/" +id, {
        method: "DELETE"
    })
    .then (response =>{
        location.reload();
    })
    .catch (error=> console.log(error))
};