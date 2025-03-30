const draggables = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.drop-zone');

draggables.forEach(item => {
    item.addEventListener('dragstart', event => {
        event.dataTransfer.setData('text', event.target.id);
    });
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', event => {
        event.preventDefault();
    });

    zone.addEventListener('drop', event => {
        event.preventDefault();
        const itemId = event.dataTransfer.getData('text');
        const draggedItem = document.getElementById(itemId);
        draggedItem.classList.remove('correct', 'incorrect');
        
        if ((zone.id === 'good-practices' && (itemId === 'firewall' || itemId === 'https' || itemId === 'vpn' || itemId === '2fa')) ||
            (zone.id === 'threats' && (itemId === 'phishing' || itemId === 'virus' || itemId === 'ransomware' || itemId === 'trojan'))) {
            draggedItem.classList.add('correct');
        } else {
            draggedItem.classList.add('incorrect');
        }
        zone.appendChild(draggedItem);
    });
});