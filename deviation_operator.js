function delta(x, gamma = 0.12, psi = 0.03)
{
    return x - gamma * x + psi;
}

const steps = 120;
let x = 1.0;
let trajectory = [];

for (let i = 0; i < steps; i++) {
    x = delta(x);
    trajectory.push(x);
}

console.log(trajectory);
console.log("Final value:", x);
