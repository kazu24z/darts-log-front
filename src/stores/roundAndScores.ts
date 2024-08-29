import { defineStore } from 'pinia'

interface Round {
  round: number
  scores: (number | null)[]
  sum: number
}

export const useRoundAndScoreStore = defineStore('roundAndScores', {
  state: () => {
    return {
      gameRoundNum: 0,
      rounds: <Round[]>[
        {
          round: 1,
          scores: [null, null, null],
          sum: 0
        }
      ],
      currentRound: 1,
      currentThrow: 1,
      isGameOver: false
    }
  },
  actions: {
    setGameRoundNum(roundNum: number) {
      this.gameRoundNum = roundNum
    },
    setGameOver(status: boolean) {
      this.isGameOver = status
    },
    setScoreValue(scoreValue: number) {
      if (this.currentThrow < 4) {
        this.rounds[this.currentRound - 1].scores[this.currentThrow - 1] = scoreValue
        this.rounds[this.currentRound - 1].sum = this.currentRoundSum
        this.currentThrow++
      }
    },
    addNewRound() {
      this.rounds[this.currentRound - 1].scores.forEach((score, index, array) => {
        if (score === null) {
          array[index] = 0
        }
      })

      const nextRoundNumber = this.currentRound + 1
      if (this.rounds.length < this.gameRoundNum) {
        this.rounds.push({ round: nextRoundNumber, scores: [null, null, null], sum: 0 })
        this.currentRound = nextRoundNumber
        this.currentThrow = 1
      } else if (this.rounds.length === this.gameRoundNum) {
        this.currentThrow = 4
        this.isGameOver = true
      }
    },
    async fillTheRound() {
      this.rounds[this.currentRound - 1].scores.forEach((score, index, array) => {
        if (score === null) {
          array[index] = 0
        }
      })
      this.currentThrow = 4
    },
    bustTheRound() {
      this.rounds[this.currentRound - 1].scores.forEach((score, index, array) => {
        array[index] = 0
      })
      this.rounds[this.currentRound - 1].sum = 0

      if (this.gameRoundNum > this.currentRound) {
        this.currentThrow = 4
      } else if (this.gameRoundNum === this.currentRound) {
        this.currentThrow = 4
        this.isGameOver = true
      }
    },
    backTheThrow() {
      if (this.currentRound >= 1 && this.currentThrow === 1) {
        this.currentRound--
        this.currentThrow = 3
      } else {
        this.currentThrow > 1 ? this.currentThrow-- : this.currentThrow
      }
    },
    clearGame() {
      const temp = this.gameRoundNum
      this.$reset()
      this.setGameRoundNum(temp)
    }
  },
  getters: {
    currentRoundSum(): number {
      return this.rounds[this.currentRound - 1].scores.reduce((sum: number, element) => {
        if (element === null) {
          element = 0
        }
        return sum + element
      }, 0)
    },
    roundsSum(): number {
      return this.rounds.reduce((sum, round) => sum + round.sum, 0)
    }
  }
})
