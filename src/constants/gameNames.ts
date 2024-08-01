export const GameNames = {
  CountUP: 'Count Up',
  CricketCountUp: 'Cricket Count Up',
  ThreeOhOne: '301',
  FiveOhOne: '501',
  SevenOhOne: '701',
  StandardCricket: 'Standard Cricket'
} as const

export type GameName = (typeof GameNames)[keyof typeof GameNames]
