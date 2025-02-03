fetch('/view').then(response => response.json()).then(getData);

  function getData(data){
    const newTable = document.createElement("table");
    newTable.innerHTML = "<thead><th>Zabieg</th><th>Cena</th></thead>";
    for(service of data){
    const newRow = document.createElement("tr");
    const tdServices = document.createElement("td");
    const tdPrice = document.createElement("td");
    tdServices.textContent = service.nameServices;
    tdPrice.textContent = service.cena;    
    newRow.appendChild(tdServices);
    newRow.appendChild(tdPrice);
    newTable.appendChild(newRow);
    }

    const target = document.getElementById('target');
    target.appendChild(newTable);
    }