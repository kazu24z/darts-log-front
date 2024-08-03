export type ViewType = 'Standard' | 'Cricket'

export interface GameView {
  roundNumber: number
  roundScore: ViewType
  score: ViewType
  inputButton: ViewType
}

export interface GameViewSettings {
  CountUp: GameView
  CricketCountUp: GameView
  ThreeOhOne: GameView
  FiveOhOne: GameView
  SevenOhOne: GameView
  StandardCricket: GameView
}

export const GameViewSettings: GameViewSettings = {
  CountUp: {
    roundNumber: 8,
    roundScore: 'Standard',
    score: 'Standard',
    inputButton: 'Standard'
  },
  CricketCountUp: {
    roundNumber: 8,
    roundScore: 'Standard',
    score: 'Standard',
    inputButton: 'Cricket'
  },
  ThreeOhOne: {
    roundNumber: 10,
    roundScore: 'Standard',
    score: 'Standard',
    inputButton: 'Standard'
  },
  FiveOhOne: {
    roundNumber: 15,
    roundScore: 'Standard',
    score: 'Standard',
    inputButton: 'Standard'
  },
  SevenOhOne: {
    roundNumber: 15,
    roundScore: 'Standard',
    score: 'Standard',
    inputButton: 'Standard'
  },
  StandardCricket: {
    roundNumber: 20,
    roundScore: 'Cricket',
    score: 'Cricket',
    inputButton: 'Cricket'
  }
} as const
