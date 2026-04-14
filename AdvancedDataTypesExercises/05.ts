type WithDiagnostics = {
    partName: string;
    runDiagnostics(): string;
};

function carDiagnostics(
    carBody: { material: string; state: string } & WithDiagnostics,
    tires: { airPressure: number; condition: string } & WithDiagnostics,
    engine: { horsepower: number; oilDensity: number } & WithDiagnostics
): void { }

function runDiagnostics(this: WithDiagnostics): string {
    return this.partName;
}

carDiagnostics(
    { material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics },
    { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics },
    { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics }
);