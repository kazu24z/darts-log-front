export interface DefaultGameOption {}

export const ZeroOneOptionValues = ['Open', 'Master', 'Double'] as const
export type ZeroOneOptionValues = (typeof ZeroOneOptionValues)[number]

export interface ZeroOneOption extends DefaultGameOption {
  inOption: ZeroOneOptionValues
  outOption: ZeroOneOptionValues
}

export interface NonOption extends DefaultGameOption {}

export type GameOption = ZeroOneOption | NonOption

export const GameOptions = {
  ZeroOne: {
    inOption: ZeroOneOptionValues,
    outOption: ZeroOneOptionValues
  },
  CountUp: {}
} as const
