const inputMemory: number[] = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 13, 19, 1, 10, 19, 23, 2, 9, 23, 27, 1, 6, 27, 31, 1, 10, 31, 35, 1, 35, 10, 39, 1, 9, 39, 43, 1, 6, 43, 47, 1, 10, 47, 51, 1, 6, 51, 55, 2, 13, 55, 59, 1, 6, 59, 63, 1, 10, 63, 67, 2, 67, 9, 71, 1, 71, 5, 75, 1, 13, 75, 79, 2, 79, 13, 83, 1, 83, 9, 87, 2, 10, 87, 91, 2, 91, 6, 95, 2, 13, 95, 99, 1, 10, 99, 103, 2, 9, 103, 107, 1, 107, 5, 111, 2, 9, 111, 115, 1, 5, 115, 119, 1, 9, 119, 123, 2, 123, 6, 127, 1, 5, 127, 131, 1, 10, 131, 135, 1, 135, 6, 139, 1, 139, 5, 143, 1, 143, 9, 147, 1, 5, 147, 151, 1, 151, 13, 155, 1, 5, 155, 159, 1, 2, 159, 163, 1, 163, 6, 0, 99, 2, 0, 14, 0];
//const input: number[] = [1,1,1,4,99,5,6,0,99];

function calculate() {
    for (let noun = 0; noun <= 99; noun++) {
        for (let verb = 0; verb <= 99; verb++) {
            const input: number[] = [...inputMemory];
            input[1] = noun;
            input[2] = verb;

            for (let i = 0; i < input.length; i += 4) {
                const opcode: number = input[i];

                if (opcode === 99) { console.log('Halt program'); break; }
                if (opcode !== 1 && opcode !== 2) { console.log('Something went wrong'); break; }

                const input1: number = input[input[i + 1]];
                const input2: number = input[input[i + 2]];
                const output: number = input[i + 3];

                //console.log(`${opcode}, ${input[i + 1]} -> ${input1}, ${input[i + 2]} -> ${input2}, ${output}`);

                if (opcode === 1) {
                    input[output] = input1 + input2;
                } else if (opcode === 2) {
                    input[output] = input1 * input2;
                } else {
                    return;
                }
            }

            if (input[0] === 19690720) {
                console.log(`Done! Noun: ${noun}, verb: ${verb}.`);
                return;
            }
        }
    }
}

calculate();