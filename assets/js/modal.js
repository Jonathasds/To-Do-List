
const modal = document.getElementById('modal');
const inputDescription = document.getElementById('descriptio');
const inputDate = document.getElementById('date');
const btnSave = document.getElementById('btn-create-list');
const alertA = document.getElementById('alert');





function createList(e) {
    e.preventDefault();

    if(!inputDescription.value || !inputDate.value) {
        alertA.style.display = 'block';
        closeAlert();
        return;
    }
    
    const newList = {
        description: inputDescription.value,
        date: new Date(inputDate.value).toLocaleDateString('pt-BR', {timeZone: 'UTC'}),
        id: Math.floor(Math.random() * 1000)
    }



    const allList = loadList();

    console.log('ALL LIST: ', allList)

   

  setList([...allList, newList ]);
    reload();
    toggleModal();
    clearFields();

}

function toggleModal() {
    modal.classList.toggle('modal-visible');
}

function clearFields() {
    inputDate.value = '';
    inputDescription.value = '';
}

function closeAlert() {
    setTimeout(() => {
        alertA.style.display = 'none';
    }, 2000);
}

btnSave.addEventListener('click', createList);