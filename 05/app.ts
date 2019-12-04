const start: number = 240298;
// const end: number = 784956;
const end: number = 250000;

for (let i = start; i <= end; i++) {
    const arr: string[] = String(i).split('');
    // console.log(arr);
    
    for (let c = 0; c < arr.length; c++) {
        if (arr[c] <= arr[c - 1] && c !== 0) {
            arr[c] = arr[c - 1];
            console.log(arr[c]);
        }       
    }
}