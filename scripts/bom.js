// Obtener elementos del DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Obtener lista desde localStorage o usar un arreglo vacío
let chaptersArray = getChapterList() || [];

// Mostrar los capítulos guardados en pantalla
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// EVENT LISTENER DEL BOTÓN
button.addEventListener('click', () => {
  if (input.value != '') {            // que no esté vacío
    displayList(input.value);         // mostrar en la lista
    chaptersArray.push(input.value);  // agregar al array
    setChapterList();                 // guardar en localStorage
    input.value = '';                 // limpiar input
    input.focus();                    // regresar el foco
  }
});

// FUNCIÓN displayList
function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');

  li.textContent = item;
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete');

  li.append(deletebutton);
  list.append(li);

  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

// FUNCIÓN setChapterList — guarda en localStorage
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// FUNCIÓN getChapterList — obtiene del localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// FUNCIÓN deleteChapter — elimina del array y localStorage
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // quitar ❌
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
