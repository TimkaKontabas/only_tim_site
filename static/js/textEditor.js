const mainTextEditor = document.getElementById('mainTextEditor');
const boldButton = document.getElementById('boldButton');
const italicButton = document.getElementById('italicButton');
const underlineButton = document.getElementById('underlineButton');
const leftButton = document.getElementById('leftButton');
const centerButton = document.getElementById('centerButton');
const rightButton = document.getElementById('rightButton');

const undoButton = document.getElementById('undoButton');
const redoButton = document.getElementById('redoButton');

const copyButton = document.getElementById('copyButton');
const cutButton = document.getElementById('cutButton');
const pasteButton = document.getElementById('pasteButton');

const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');
const clearButton = document.getElementById('clearButton');

const addLinkButton = document.getElementById('addLinkButton');
const addImageButton = document.getElementById('addImageButton');

document.execCommand('aShowDefaultUI', false, false);

mainTextEditor.addEventListener('input', () => {
    document.execCommand('defaultParagraphSeparator', false, 'div');
});


boldButton.addEventListener('click', () => {
    document.execCommand('bold', false, null);
});
italicButton.addEventListener('click', () => {
    document.execCommand('italic', false, null);
});
underlineButton.addEventListener('click', () => {
    document.execCommand('underline', false, null);
});
leftButton.addEventListener('click', () => {
    document.execCommand('justifyLeft', false, null);
});
centerButton.addEventListener('click', () => {
    document.execCommand('justifyCenter', false, null);
});
rightButton.addEventListener('click', () => {
    document.execCommand('justifyRight', false, null);
});

undoButton.addEventListener('click', () => {
    document.execCommand('undo', false, null);
});
redoButton.addEventListener('click', () => {
    document.execCommand('redo', false, null);
});

copyButton.addEventListener('click', () => {
    document.execCommand('copy', false, null);
});
cutButton.addEventListener('click', () => {
    document.execCommand('cut', false, null);
});
pasteButton.addEventListener('click', () => {
    document.execCommand('paste', false, null);
});

saveButton.addEventListener('click', () => {
    document.execCommand('save', false, null);
});
loadButton.addEventListener('click', () => {
    document.execCommand('load', false, null);
});
clearButton.addEventListener('click', () => {
    document.execCommand('clear', false, null);
});

addLinkButton.addEventListener('click', () => {
    let link = prompt('Введите ссылку:');
    document.execCommand('createLink', false, link);
});
addImageButton.addEventListener('click', () => {
    let image = prompt('Введите адрес картинки:');
    // document.execCommand('insertImage', false, image);
    addImage(image);
});

function addImage(image) {
    let dopDiv = document.createElement('div');
    let div = document.createElement('div');
    div.className = 'image';
    let img = document.createElement('img');
    img.src = image;
    div.appendChild(img);
    dopDiv.appendChild(div);
    document.execCommand('insertHTML', false, dopDiv.innerHTML);
}

saveButton.addEventListener('click', () => {
    localStorage.setItem('text', mainTextEditor.innerHTML);
});
loadButton.addEventListener('click', () => {
    mainTextEditor.innerHTML = localStorage.getItem('text');
});
clearButton.addEventListener('click', () => {
    let childs = [];
    mainTextEditor.childNodes.forEach((child) => {
        childs.push(child);
    })
    childs.forEach((child) => {
        mainTextEditor.removeChild(child);
    })
});


