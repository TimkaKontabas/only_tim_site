const settingInfoElements = document.getElementsByClassName('settings-info-element');
const settingsSearch = document.getElementById('settings-search');
const settingElements = document.getElementsByClassName('settings-element');
const settingsEmptyDescription = document.getElementById('settings-empty-description');


settingsSearch.addEventListener('input', (event) => {
    const searchValue = event.target.value.toLowerCase();
    let settingsEmpty = true;
    for (let i = 0; i < settingElements.length; i++) {
        if (settingElements[i].textContent.toLowerCase().includes(searchValue)) {
            settingElements[i].style.display = 'flex';
            settingsEmpty = false;
        } else {
            settingElements[i].style.display = 'none';
        }
    }
    console.log(settingsEmpty);
    if (settingsEmpty) {
        settingsEmptyDescription.style.display = 'flex';
    } else {
        settingsEmptyDescription.style.display = 'none';
    }
});

function openSetting(nomer) {
    alert(nomer);
}

function setNomerSettings(nomer) {
    for (let i = 0; i < settingInfoElements.length; i++) {
        if (i == nomer) {
            settingInfoElements[i].style.display = 'flex';
        } else {
            settingInfoElements[i].style.display = 'none';
        }
    }
}