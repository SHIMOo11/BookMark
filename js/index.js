var siteName= document.getElementById("siteName");
var siteUrl= document.getElementById("siteUrl");
var check= document.getElementById('check');
var check1= document.getElementById('check1');
var check2= document.getElementById('check2');

if(localStorage.getItem("sites") != null){
    sites=JSON.parse(localStorage.getItem("sites"));
    displaySites();
}
    var regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

var sites=[];
function addSites(){
    if(siteName.value === "" || siteUrl.value ==="" || !siteUrl.value.match(regex)){
        if(siteName.value===  ""){
            check.innerHTML="Enter Site Name";
            alert("Enter Site Name ");

        }else if(siteUrl.value ===""){
            check1.innerHTML="Enter Site URL";
            alert("Enter Site URL");
        }
        else if(!regex.test(siteUrl.value)){
            check1.innerHTML="Enter Valid URL";
            alert('Enter Valid URL ');
        }
        

    }
    

    else if(siteName.value != "" && siteUrl.value != "" && regex.test(siteUrl.value)=== true){

    siteMarker={
        name:siteName.value,
        url:siteUrl.value,
    }
            sites.push(siteMarker);
                displaySites();
                localStorage.setItem("sites" , JSON.stringify(sites));
                clearForm();
                check.innerHTML="";
                check1.innerHTML="";

}
}
function clearForm(){
    siteName.value="";
    siteUrl.value="";
}
function displaySites(){
    var cartoona =``;
    for(var i=0; i< sites.length; i++){
        cartoona+=`   <div class="catoonaSites d-flex justify-content-between align-items-center mb-2" >
        <h5 class="mb-0">${i}</h5>
        <h4 class="mb-0" >${sites[i].name}</h4>
        <button class="btn px-4"><a class="visit" href="${sites[i].url}" target="_blank">Visit</a></button>
        <button onclick="deleteSite(${i});" class="btn px-4">Delete</button>
        </div>
        `
    }
    document.getElementById('mySites').innerHTML=cartoona;
}

function deleteSite(deleteIndex){
    sites.splice(deleteIndex, 1);
    localStorage.setItem("sites" , JSON.stringify(sites));
    displaySites();

}
