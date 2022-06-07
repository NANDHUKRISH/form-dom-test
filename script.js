var submit=document.querySelector("#submit");
submit.addEventListener("click", function(){
    displaydetails(); 
});

function displaydetails()
{   var tablerow=1;
    var fname =document.querySelector("#firstname").value;
    var lname =document.querySelector("#lastname").value;
    var pincode =document.querySelector("#pincode").value;
    var address =document.querySelector("#address").value;
    var gender =document.querySelector("#gender").value;
  
        let checkboxes = document.querySelectorAll('input[name="food"]:checked');
        let values = [];
        checkboxes.forEach((checkbox) => {
            values.push(checkbox.value);
        });
        let food=values;

    var state =document.querySelector("#state").value;
    var country =document.querySelector("#country").value;

    if (values.length<2)
          {
              alert("You must choose atleast 2 favourite food out of 5 option");
              return; }

    else if(!fname || !lname || !pincode || !address || !gender || !food || !state || !country)
    {  
         alert("MANDATORY TO FILL ALL THE BOXES");
         return  }
          
var tablebody = document.querySelector("#table-body");

var tablerow =
`<tr>
 <td>${fname}</td>
 <td>${lname}</td>
 <td>${pincode}</td>
 <td>${address}</td>
 <td>${gender}</td>
 <td>${food}</td>
 <td>${state}</td>
 <td>${country}</td>
</tr>`

tablebody.innerHTML +=tablerow;
document.querySelector("#firstname").value="";
document.querySelector("#lastname").value="";
document.querySelector("#pincode").value="";
document.querySelector("#address").value="";
document.querySelector("#gender").value="";
checkboxes.forEach((checkbox) => { checkbox.checked = false;});
document.querySelector("#state").value="";
document.querySelector("#country").value="";

}