export type ViewType = 'Standard' | 'Cricket'
export type CalcMethod = 'addition' | 'subtraction' | 'closure'

export interface GameSetting {
  initialValue: number
  calcMethod: CalcMethod
  roundNumber: number
  roundScore: ViewType
  score: ViewType
  inputButton: ViewType
}

export interface GameSettings {
  CountUp: GameSetting
  CricketCountUp: GameSetting
  ThreeOhOne: GameSetting
  FiveOhOne: GameSetting
  SevenOhOne: GameSetting
  StandardCricket: GameSetting
}

export const GameSettings: GameSettings = {
  CountUp: {
    initialValue: 0,
    calcMethod: 'addition',
    roundNumber: 8,
    roundScore: 'Standard',
    score: 'Standard',
    inputButton: 'Standard'
  },
  CricketCountUp: {
    initialValue: 0,
    calcMethod: 'addition',
    roundNumber: 8,
    roundScore: 'Standard',
    score: 'Standard',
    inputButton: 'Cricket'
  },
  ThreeOhOne: {
    initialValue: 301,
    calcMethod: 'subtraction',
    roundNumber: 10,
    roundScore: 'Standard',
    score: 'Standard',
    inputButton: 'Standard'
  },
  FiveOhOne: {
    initialValue: 501,
    calcMethod: 'subtraction',
    roundNumber: 15,
    roundScore: 'Standard',
    score: 'Standard',
    inputButton: 'Standard'
  },
  SevenOhOne: {
    initialValue: 701,
    calcMethod: 'subtraction',
    roundNumber: 15,
    roundScore: 'Standard',
    score: 'Standard',
    inputButton: 'Standard'
  },
  StandardCricket: {
    initialValue: 0,
    calcMethod: 'closure',
    roundNumber: 20,
    roundScore: 'Cricket',
    score: 'Cricket',
    inputButton: 'Cricket'
  }
} as const
