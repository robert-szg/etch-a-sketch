const body = document.querySelector('body');
const container = document.querySelector('.container');
const button = document.querySelector('button');

let grid;

button.addEventListener('click', () => buildGrid());

function buildGrid(){

    if(container.firstChild) reset();

    let size = prompt(`Choose the Grid's Size  (LIMIT: 100)`, 16);
    if(size > 100){
        alert('Size Above the Limit (100)');
        size = 100;
    }
    
    for(let i = 0; i < size; i++){
        let newRow = document.createElement('div');
        newRow.classList.add('row', 'element');
        container.appendChild(newRow);

        for(let j = 0; j < size; j++){
            let newColumn = document.createElement('div');
            newColumn.classList.add('col', 'element');
            newRow.appendChild(newColumn);
        }

        grid = document.querySelectorAll('.col');

        grid.forEach(row => {
            row.addEventListener('mouseenter', () => {
                // 16777215 is the number of possible colors in Hex 
                // 'toString(16)' is used to convert the random number to hexadecimal (0-F)
                let backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                row.style['background-color'] = backgroundColor;
            });
        });
    }
}

function reset(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}
