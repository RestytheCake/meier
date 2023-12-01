function heart(ID) {

    var item = document.getElementById(ID);
    var lsl = localStorage.getItem("Heart");
    var heartlist = JSON.parse(lsl);

    console.log(heartlist);
    console.log("--------------------");

    if (heartlist.length === 0) {
        console.log("l=0");
        item.style.color = "red";
        heartlist.push(ID);
        localStorage.setItem("Heart", JSON.stringify(heartlist));
    }
    else {
        if ( heartlist.includes(ID) ) {
            console.log("found id");
            item.style.color = "";
            remove(heartlist, ID);
            localStorage.setItem("Heart", JSON.stringify(heartlist));
        }
        else {
            console.log("not found id");
            item.style.color = "red";
            heartlist.push(ID);
            localStorage.setItem("Heart", JSON.stringify(heartlist));
        }


    }

}

function remove(arr, ID) {
    var index = arr.indexOf(ID);

    while (index !== -1) {
        arr.splice(index, 1);
        index = arr.indexOf(ID);
    }
    console.log(index);
}

function check_heart() {
    console.log("check_heart");

    var lsl = localStorage.getItem("Heart");
    var heartlist = JSON.parse(lsl);
    console.log(heartlist);

    if (heartlist.length === 0) {
        console.log("lh=0");
    }
    else {
        console.log("lh!=0");
        for (i in heartlist) {
            console.log(i);
            console.log(heartlist[i]);
            var item = document.getElementById(heartlist[i]);
            item.style.color = "red";
        }
    }
}