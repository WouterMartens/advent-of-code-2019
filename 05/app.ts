const start: number = 240298;
const end: number = 784956;
// const end: number = 250000;

const uniques: Set<number> = new Set();

for (let i = start; i <= end; i++) {
    if (correctNumber(i)) {
        uniques.add(i);
    }
}

function correctNumber(value: number): boolean {
    const arr: number[] = String(value).split('').map(Number);
    let doubleCheck: boolean = false;
    let increasing: boolean = true;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] === arr[i] || arr[i + 1] === arr[i]) {
            doubleCheck = true;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (i !== 0 && arr[i] < arr[i - 1]) {
            increasing = false;
            break;
        }
    }

    if (doubleCheck && increasing) {
        return true;
    }
    return false;
}

console.log(uniques);