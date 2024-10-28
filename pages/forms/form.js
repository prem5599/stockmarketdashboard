let stockaddbtn = document.getElementById("stockaddbtn");
stockaddbtn.addEventListener("click", ()=>{
    let stocknameadd = document.getElementById("exampleInputUsername1");
    let stockpriceadd = document.getElementById("exampleInputPassword1");

    console.log(stocknameadd.value);
    console.log(stockpriceadd.value);


    let entereddata = document.getElementById("entereddata")
    console.log(datapass.rows.length);

    let rowCreate = entereddata.insertRow(entereddata.rows.length)
    console.log(rowCreate);

    let stocknameadddata = rowCreate.insertCell(0)
    let stockpriceadddata = rowCreate.insertCell(1)
    

    stocknameadddata.innerHTML = stocknameadd.value
    stockpriceadddata.innerHTML = stockpriceadd.value
    
})