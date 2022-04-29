function getList() {
    return JSON.parse(localStorage.getItem('@GoList')) || [];
}


function setList(list) {
    localStorage.setItem('@GoList', JSON.stringify(list));
}
