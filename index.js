let container = document.querySelector("container");
let tableBody = document.querySelector("table>tbody")

let URL ="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees"

const emp = async() => {

    try{

        let res = await fetch(URL)
        let data =await res.json()
        console.log(data)
        displayData(data)

    }
    catch (error){

        console.log(error)
    }
}
emp()

function displayData(data){
        console.log(data)
    let tableBody = document.querySelector("table>tbody")
    tableBody.innerHTML = "";
    
    arr.forEach(function(ele,i){
    
        let tr = document.createElement("tr");
    
        let td1 = document.createElement("td");
        td1.innerHTML= ele.SrNo
    
        let td2 = document.createElement("td");
        td2.innerHTML= ele.name
    
        let td3 = document.createElement("td");
        td3.innerHTML= ele.gender
    
        let td4 = document.createElement("td");
        td4.innerHTML= ele.department
    
        let td5 = document.createElement("td");
        td5.innerHTML= ele.salary 
    
        tr.append(td1, td2, td3, td4, td5)
    
    
        tableBody.append(tr)
    
    })
}
    
