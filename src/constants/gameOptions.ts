export interface DefaultGameOption {}

export const BullOptionValues = ['Separate', 'Fat']
export type BullOptionValues = (typeof BullOptionValues)[number]
export const ZeroOneOptionValues = ['Open', 'Master', 'Double'] as const
export type ZeroOneOptionValues = (typeof ZeroOneOptionValues)[number]

export interface ZeroOneOption extends DefaultGameOption {
  bullOption: BullOptionValues
  inOption: ZeroOneOptionValues
  outOption: ZeroOneOptionValues
}

export interface NonOption extends DefaultGameOption {}

export type GameOption = ZeroOneOption | NonOption

export const GameOptions = {
  ZeroOne: {
    bullOption: BullOptionValues,
    inOption: ZeroOneOptionValues,
    outOption: ZeroOneOptionValues
  },
  CountUp: {}
} as const
