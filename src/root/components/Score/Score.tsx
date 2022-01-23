import React from 'react';

type ScoreProps = {
    currentScore: number;
}

export class Score extends React.Component<ScoreProps> {
    render(): React.ReactNode {
        return (
            <div className='Pacman-App-Score-Container'>
                <div className='Pacman-App-Score'>Current score: {this.props.currentScore}</div>
            </div>
        )
    }
}