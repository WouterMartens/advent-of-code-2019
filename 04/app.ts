window.addEventListener('load', init);

const path1String: string = 'R8,U5,L5,D3';
const path2String: string = 'U7,R6,D4,L4';

const path1: string[] = path1String.split(',');
const path2: string[] = path2String.split(',');
const paths: string[][] = [path1, path2];

const crossedTiles = new Set();
const doubleTiles = new Set();

let x = 0;
let y = 0;

paths.forEach(path => {
    x = 0;
    y = 0;
    path.forEach(instruction => {
        const direction = instruction[0];
        const amount = Number(instruction.substr(1));
        for (let i = 0; i < amount; i++) {
            if (direction === 'L') {
                x -= 1;
            } else if (direction === 'U') {
                y += 1;
            } else if (direction === 'R') {
                x += 1;
            } else if (direction === 'D') {
                y -= 1;
            }
            const obj = { x, y };
            if (crossedTiles.has(obj)) {
                doubleTiles.add(obj);
            } else {
                crossedTiles.add(obj);
            }
            if (x === 3 && y === 3) {
                console.log(crossedTiles);
            }
        }
    });
    console.log('path');
});

console.log(crossedTiles.has({ value: { x: 3, y: 3 } }));

/*function endPath(array: string[], colour: string, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    let x: number = canvas.width / 2;
    let y: number = canvas.height / 2;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = colour;

    array.forEach(element => {
        const e = element[0];
        const number = Number(element.substr(1));
        if (e === 'L') {
            x -= number;
        } else if (e === 'U') {
            y -= number;
        } else if (e === 'R') {
            x += number;
        } else if (e === 'D') {
            y += number;
        }

        ctx.lineTo(x, y);
    });
    ctx.stroke();
    return { x, y };
}*/

function init() {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //console.log(endPath(path1, 'red', canvas, ctx), endPath(path2, 'blue', canvas, ctx));
}

