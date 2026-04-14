type HallwaysWithPass = {
    hallway: 'A';
    pass?: 'Guest';
};

type HallwayWithoutPass = {
    hallway: 'C';
};

type FirstFloor = {
    number: 1;
    train: () => void;
    pass?: 'Guest';
} & (HallwaysWithPass | HallwayWithoutPass);

type SecondFloor = {
    number: 2;
    hallway: 'A' | 'C';
    dine: () => void;
} & (HallwaysWithPass | HallwayWithoutPass);

type ThirdFloor = {
    number: 3;
    hallway: 'A' | 'C';
    sleep: () => void;
    pass?: 'Guest';
}


function visitFloor(floor: FirstFloor | SecondFloor | ThirdFloor
) {
    switch (floor.number) {
        case 1: floor.train(); return;
        case 2: floor.dine(); return;
        case 3: floor.sleep(); return;
    }
}