var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
request.send();
var data ;
request.onload=function(){
    var res = JSON.parse(request.response);
   data = res;

};

const itemsperPage = 10 ;
let currentPage = 1;

function renderData(){
    const table = document.querySelector("#data-table tbody");
    table.innerHTML = "";
    const start = (currentPage -1) * itemsperPage;
    const end = start + itemsperPage;

    for(let i =start; i< end ; i++){
        if(data[i]){
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);

            cell1.innerHTML = data[i].id;
            cell2.innerHTML = data[i].name;
            cell3.innerHTML = data[i].email;
        }
    }
    document.querySelector("#pageInfo").textContent = `${currentPage}`;
}


function navigatePage(direction){
    if(direction == "prev" && currentPage > 1){
        currentPage -- ;

    } else if (direction == "next" && currentPage < Math.ceil(data.length/ itemsperPage)){
        currentPage++;
    } else if (direction == "1" && currentPage >1){
        currentPage;
    }else if (direction == "2" && currentPage <=1){
        currentPage = 2;
    }else if (direction == "3" && currentPage <=1){
        currentPage=3;
    }else if (direction == "4" && currentPage <=3){
        currentPage =4;
    }else if (direction == "5" && currentPage <=4){
        currentPage = 5;
    }else if (direction == "6" && currentPage <=5){
        currentPage = 6 ;
    }else if (direction == "7" && currentPage <=6){
        currentPage = 7;
    }else if (direction == "8" && currentPage <=7){
        currentPage = 8;
    }else if (direction == "9" && currentPage <=8){
        currentPage = 9;
    }else if (direction == "10" && currentPage <=9){
        currentPage = 10;
    }
   renderData(currentPage);
}


document.querySelector("#prevpage").addEventListener("click",() => navigatePage("prev"));
document.querySelector("#nextPage").addEventListener("click",() => navigatePage("next"));
document.querySelector("#one").addEventListener("click",() => navigatePage("1"));
document.querySelector("#two").addEventListener("click",() => navigatePage("2"));
document.querySelector("#three").addEventListener("click",() => navigatePage("3"));
document.querySelector("#four").addEventListener("click",() => navigatePage("4"));
document.querySelector("#five").addEventListener("click",() => navigatePage("5"));
document.querySelector("#six").addEventListener("click",() => navigatePage("6"));
document.querySelector("#seven").addEventListener("click",() => navigatePage("7"));
document.querySelector("#eight").addEventListener("click",() => navigatePage("8"));
document.querySelector("#nine").addEventListener("click",() => navigatePage("9"));
document.querySelector("#ten").addEventListener("click",() => navigatePage("10"));





