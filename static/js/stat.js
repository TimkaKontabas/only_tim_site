const stat = document.getElementById('stat');
const statText = document.getElementById('stat-text');
const statText2 = document.getElementById('stat-text2');
const statText3 = document.getElementById('stat-text3');


function fillStats(users, messages, parcels) {
    statText.textContent = users;
    statText2.textContent = messages;
    statText3.textContent = parcels;
}

const users = 100;
const messages = 500;
const parcels = 200;
fillStats(users, messages, parcels);