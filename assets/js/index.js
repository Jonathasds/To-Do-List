const table = document.getElementById('table');
const loadingMenssage = document.getElementById('loading-message');
const countList = document.getElementById('count-list');


function loadList() {
    const list = getList() || [];
    return list;
}


function updateCountList() {
    const allList = getList();
    countList.innerHTML = allList.length;
}

function fillTable() {
    const allList = getList();
    allList.forEach(addList);

    if (allList.length === 0) {
        loadingMenssage.innerHTML = "Vamos adicionar uma tarefa?";
    } else {
        loadingMenssage.innerHTML = "";



    }
    updateCountList();

}

function addList(list) {
    const tr = document.createElement('tr');
    tr.innerHTML = innerHTMLList(list);

    table.appendChild(tr);
}

function innerHTMLList(list) {
    const html = `
    <td>${list.description}</td>
    <td>${list.date}</td>
    <td>
        <input type="checkbox" class="check">
        <a href="#" onclick="removeList(${list.id})">
            <i class="fa-solid fa-trash-can"></i>
            
        </a>
    </td>
    
    `;
    return html;
}


function removeList(id) {
    const allList = getList();
    const listFiltered = allList.filter(list => list.id !== id);

    setList(listFiltered);
    reload();
}

function reload() {
    table.innerHTML = '';
    fillTable();
}