const selectTable = document.getElementById('select_tables');
const table = document.getElementById('table');


selectTable.addEventListener('change', (event) => {
    const table = event.target.value;
    const text = event.target.options[event.target.selectedIndex].text;
    let data = {
        tableName: text
    };
    fetch('/get_table', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Обработка полученных данных
        setTableData(data.tableData);
    })
    .catch(error => {
        // Обработка ошибок
        console.error(error);
    });
})

function setTableData(tableData) {

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    tableData.forEach((row) => {
        const rowElement = document.createElement('tr');
        row.forEach((cell) => {
            const cellElement = document.createElement('td');
            cellElement.textContent = cell;
            rowElement.appendChild(cellElement);
        });
        table.appendChild(rowElement);
    });

}