import React from 'react';
import { Score, Pacman } from '../components';
import { ArrowKeys, Boundaries, PacmanKeyboardMovementEvent, RotationClass } from '../../types';
import './PacmanAppRoot.css';

type AppProps = {
    initialX: number;
    initialY: number;
    initialRotationClass: RotationClass;
    initialSpeed: number;
    boundaries: Boundaries;
    initialMouthState: boolean;
    mouthUpdateInterval: number;
}

type AppState = {
    X: number;
    Y: number;
    rotationClass: RotationClass;
    currentScore: number;
    isMouthOpen: boolean;
}

export class PacmanAppRoot extends React.Component<AppProps, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            X: props.initialX,
            Y: props.initialY,
            rotationClass: props.initialRotationClass || 'rotateRight',
            currentScore: 0,
            isMouthOpen: props.initialMouthState
        };
        this.handleKeyboardInput = this.handleKeyboardInput.bind(this);
        this.handleUpArrow = this.handleUpArrow.bind(this);
        this.handleDownArrow = this.handleDownArrow.bind(this);
        this.handleLeftArrow = this.handleLeftArrow.bind(this);
        this.handleRightArrow = this.handleRightArrow.bind(this);
        this.updateMouthState = this.updateMouthState.bind(this);
    }
    componentDidMount() {
        window.addEventListener('keydown', (event: any) => {
            this.handleKeyboardInput(event);
        });
        setInterval(this.updateMouthState, this.props.mouthUpdateInterval);
    }

    private handleUpArrow(event: PacmanKeyboardMovementEvent) {
        if (event.key === ArrowKeys.Up) {
            const newYPos = parseInt(this.state.Y.toString()) - this.props.initialSpeed;
            return this.setState({
                Y: newYPos < this.props.boundaries.top ? this.props.boundaries.top : newYPos
            });
        }
    }

    private handleDownArrow(event: PacmanKeyboardMovementEvent) {
        if (event.key === ArrowKeys.Down) {
            const newYPos = parseInt(this.state.Y.toString()) + this.props.initialSpeed;
            this.setState({
                Y: newYPos > this.props.boundaries.bottom ? this.props.boundaries.bottom : newYPos
            });
        }
    }

    private handleLeftArrow(event: PacmanKeyboardMovementEvent) {
        if (event.key === ArrowKeys.Left) {
            const newXPos = parseInt(this.state.X.toString()) - this.props.initialSpeed;
            this.setState({
                X: newXPos < this.props.boundaries.left ? this.props.boundaries.left : newXPos
            });
        }
    }

    private handleRightArrow(event: PacmanKeyboardMovementEvent) {
        if (event.key === ArrowKeys.Right) {
            const newXPos = parseInt(this.state.X.toString()) + this.props.initialSpeed;
            this.setState({
                X: newXPos > this.props.boundaries.right ? this.props.boundaries.right : newXPos
            });
        }
    }

    private updateRotationClass(event: PacmanKeyboardMovementEvent) {
        const originalRotation = this.state.rotationClass;
        this.setState({
            rotationClass: this.getRotationClass(event.key) || originalRotation 
        });
    }

    private updateMouthState(event: PacmanKeyboardMovementEvent) {
        this.setState({
            isMouthOpen: !this.state.isMouthOpen
        });
    }

    private getRotationClass(key: ArrowKeys): RotationClass | undefined {
        if (key === ArrowKeys.Left) {
            return 'rotateLeft';
        }
        if (key === ArrowKeys.Right) {
            return 'rotateRight';
        }
        if (key === ArrowKeys.Up) {
            return 'rotateUp';
        }
        if (key === ArrowKeys.Down) {
            return 'rotateDown';
        }
    }

    handleKeyboardInput(event: PacmanKeyboardMovementEvent) {
        this.handleUpArrow(event);
        this.handleLeftArrow(event);
        this.handleRightArrow(event);
        this.handleDownArrow(event);
        this.updateRotationClass(event);
    }

    render(): React.ReactNode {
        return (
            <div className='Pacman-App-Root'>
                <div className='Pacman-Score-Container'>
                    <Score currentScore={this.state.currentScore} />
                </div>
                <div className='Pacman-Game-Container'>
                    <Pacman
                        X={this.state.X}
                        Y={this.state.Y}
                        rotationClass={this.state.rotationClass}
                        isMouthOpen={this.state.isMouthOpen}
                    />
                </div>
            </div>
        )
    }
}