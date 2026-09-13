# FWA Deviation Operator: JavaScript Simulation

## Overview

This project presents the JavaScript implementation of the FWA deviation operator and demonstrates the iterative evolution of a dynamic configuration.

## Mathematical Model

The deviation operator is defined as:

Δ(x) = x - γx + ψ

which can also be written as:

Δ(x) = (1 - γ)x + ψ

The iterative update is:

xₙ₊₁ = Δ(xₙ)

For this simulation, the parameters are:

1. γ = 0.12
2. ψ = 0.03
3. Initial value: x₀ = 1.0
4. Number of steps: 120

## Simulation

The JavaScript program repeatedly applies the deviation operator and records the resulting trajectory over 120 steps.

The numerical simulation is implemented using JavaScript and the result is visualized in a web browser using Chart.js.

## Result

Starting from x₀ = 1.0, the trajectory decreases and approaches the stable value:

x* = 0.25

This value is obtained from the fixed-point condition:

x* = 0.88x* + 0.03

Therefore:

x* = 0.25

## Files

- `deviation_operator.js` — JavaScript implementation of the iterative simulation.
- `index.html` — Browser-based visualization of the simulation.

## Running the Numerical Simulation

Make sure Node.js is installed, then run:

node deviation_operator.js

## Visualization

Open `index.html` in a web browser to view the trajectory graph.
