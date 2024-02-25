const statusesButtons = document.getElementsByClassName('parcels-info-element');
const statusesInfo = document.getElementsByClassName('statuses');

function setParcelInfo(nomer) {
    for (let i = 0; i < statusesInfo.length; i++) {
        if (i == nomer) {
            statusesInfo[i].style.display = 'flex';
        } else {
            statusesInfo[i].style.display = 'none';
        }
    }
}

setParcelInfo(0);