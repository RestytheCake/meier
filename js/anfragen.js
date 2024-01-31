function anfragen() {
    for (let [key, value] of Object.entries(localStorage)) {
        if (key != "image") {

            const array = value;
            const array2 = array.split(",");

            const no_support = document.getElementById("no-support");
            no_support.hidden;
            no_support.style.display = "none";

            const tbody = document.getElementById("tbody");
            const tr = document.createElement("tr");
            tr.id = key
            tr.className = "table-body";
            const t1 = document.createElement("td");
            t1.textContent = array2[0];
            t1.className = "support-th";
            const t2 = document.createElement("td");
            t2.textContent = array2[1];
            t2.className = "support-th";
            const t3 = document.createElement("td");
            t3.textContent = array2[2];
            t3.className = "support-th";
            tr.appendChild(t1)
            tr.appendChild(t2)
            tr.appendChild(t3);
            tbody.appendChild(tr)
        }
        else {
            
        }
      }
}

function Warenkorb() {
    for (let [key, value] of Object.entries(localStorage)) {
        if (key.includes("warenkorb")) {

            const array = value;
            const array2 = array.split(",");

            const no_support = document.getElementById("nocard");
            no_support.hidden;
            no_support.style.display = "none";

            const list = document.getElementById("list");
            const section = document.createElement("section");
            const div = document.createElement("div");
            div.id = array2[0];
            div.className = "cart-item";

            const title = document.createElement("h3");
            title.textContent =  array2[0]
            title.id = array2[0]

            const Preis = document.createElement("p");
            Preis.textContent =  "Preis: " + array2[1];

            const Menge = document.createElement("p");
            Menge.textContent =  "Menge: " + array2[2] + " Stunden"
            
            div.appendChild(title)
            div.appendChild(Preis)
            div.appendChild(Menge)
            list.appendChild(div)
        }
        else {
            
        }
      }
}