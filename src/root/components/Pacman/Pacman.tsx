import React from 'react';
import { RotationClass } from '../../../types';
import pacmanHeadMouthOpen from './pacman-head-mouth-open.png';
import pacmanHeadMouthClosed from './pacman-head-mouth-closed.png';
import './Pacman.css';

type PacmanProps = {
    X: number;
    Y: number;
    rotationClass: RotationClass;
    isMouthOpen: boolean;
}

export class Pacman extends React.Component<PacmanProps> {
    render(): React.ReactNode {
        return (
            <div className={`pacman-container`}>
                {this.props.isMouthOpen ? 
                    <img id='pacman-head'
                    className={`${this.props.rotationClass}`}
                    src={pacmanHeadMouthOpen}
                    style={{
                        position: 'absolute',
                        top: this.props.Y,
                        left: this.props.X
                    }}
                    alt={'pacman-head'} />
                :
                    <img id='pacman-head'
                        className={`${this.props.rotationClass}`}
                        src={pacmanHeadMouthClosed}
                        style={{
                            position: 'absolute',
                            top: this.props.Y,
                            left: this.props.X
                        }}
                        alt={'pacman-head'} />}
            </div>
        )
    }
}