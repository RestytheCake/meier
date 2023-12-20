function anfragen() {
    for (let [key, value] of Object.entries(localStorage)) {
        if (key != "image" || key != "lsl") {

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