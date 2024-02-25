const toolPanel = document.getElementById('TextEditorSarbToolPanel');

let copy_text = '';


function addButtonsToToolPanel() {
    const buttonData = [
        { id: 'boldButton', text: 'Жирным', img: 'bold.svg' },
        { id: 'italicButton', text: 'Курсивом', img: 'italic.svg' },
        { id: 'underlineButton', text: 'Подчеркнутым', img: 'underline.svg' },
        { id: 'leftButton', text: 'По левому краю', img: 'align-left.svg' },
        { id: 'centerButton', text: 'По центру', img: 'align-center.svg' },
        { id: 'rightButton', text: 'По правому краю', img: 'align-right.svg' },
        { id: 'justifyButton', text: 'По ширине', img: 'align-justify.svg' },
        { id: 'numberedListButton', text: 'Нумерованный список', img: 'numbered-list.png' },
        { id: 'bulletedListButton', text: 'Маркированный список', img: 'bulleted-list.png' },
        { id: 'undoButton', text: 'Отменить', img: 'undo.svg' },
        { id: 'redoButton', text: 'Вернуть', img: 'redo.svg' },
        { id: 'copyButton', text: 'Копировать', img: 'copy.svg' },
        { id: 'cutButton', text: 'Вырезать', img: 'cut.svg' },
        { id: 'pasteButton', text: 'Вставить', img: 'paste.svg' },
        { id: 'saveButton', text: 'Сохранить', img: 'save.svg' },
        { id: 'loadButton', text: 'Загрузить', img: 'load.svg' },
        { id: 'clearButton', text: 'Очистить', img: 'clear.svg' },
        { id: 'addLinkButton', text: 'Добавить ссылку', img: 'link.svg' },
        { id: 'addImageButton', text: 'Добавить картинку', img: 'image.svg' },
    ];

    buttonData.forEach(button => {
        const newButton = document.createElement('button');
        newButton.id = button.id;
        newButton.className = 'TextEditorSarbToolButton';
        if (button.img === undefined) {
            newButton.textContent = button.text;
        } else {
            newButton.style.backgroundImage = `url(../static/img/textEditor/text-${button.img})`;
        }
        toolPanel.appendChild(newButton);
    });

    addHandlersToButtons();
}

function addHandlersToButtons() {
    const mainTextEditor = document.getElementById('TextEditorSarbTextArea');
    const boldButton = document.getElementById('boldButton');
    const italicButton = document.getElementById('italicButton');
    const underlineButton = document.getElementById('underlineButton');
    const leftButton = document.getElementById('leftButton');
    const centerButton = document.getElementById('centerButton');
    const rightButton = document.getElementById('rightButton');
    const justifyButton = document.getElementById('justifyButton');
    const numberedListButton = document.getElementById('numberedListButton');
    const bulletedListButton = document.getElementById('bulletedListButton');

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
justifyButton.addEventListener('click', () => {
    document.execCommand('justifyFull', false, null);
});
numberedListButton.addEventListener('click', () => {
    document.execCommand('insertOrderedList', false, null);
});
bulletedListButton.addEventListener('click', () => {
    document.execCommand('insertUnorderedList', false, null);
});

undoButton.addEventListener('click', () => {
    document.execCommand('undo', false, null);
});
redoButton.addEventListener('click', () => {
    document.execCommand('redo', false, null);
});

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

async function copyContent(text) {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
      /* Resolved - text copied to clipboard successfully */
    } catch (err) {
      console.error('Failed to copy: ', err);
      /* Rejected - text failed to copy to the clipboard */
    }
  }


copyButton.addEventListener('click', () => {
    let text = getSelectionText();
    copyContent(text);
});
cutButton.addEventListener('click', () => {
    let text = getSelectionText();
    document.execCommand('cut', false, null);
    copyContent(text);
});
pasteButton.addEventListener('click', () => {
    let text = navigator.clipboard.readText().then(text => {
        console.log(text);
        document.execCommand('insertText', false, text);
    });
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

}




addButtonsToToolPanel();


document.execCommand('aShowDefaultUI', false, false);


