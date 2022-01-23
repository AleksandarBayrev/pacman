export enum ArrowKeys {
    Left = "ArrowLeft",
    Right = "ArrowRight",
    Up = "ArrowUp",
    Down = "ArrowDown"
}

export type PacmanAppConfiguration = {
    initialX: number;
    initialY: number;
    initialSpeed: number;
    initialRotationClass: RotationClass;
}

export type Degree = `${number}deg`

export type RotationClass = '.rotateUp' | '.rotateDown' | '.rotateLeft' | '.rotateRight'

export type Boundaries = {
    top: number;
    left: number;
    right: number;
    bottom: number;
}

export type PacmanKeyboardMovementEvent = React.KeyboardEvent<HTMLImageElement> & {key: ArrowKeys}