// https://www.codewars.com/kata/5384df88aa6fc164bb000e7d/typescript
class Player {
  // called at the beginning of each game. Parameter: a number of cakes on the table
  constructor(cakes: number) {
  }
  // called after the constructor. Must return true if you want to move first, false is you want to move after your opponent
  // Parameter: number of cakes on the table left (same as in constructor)
  firstmove(cakes: number): boolean {
  }
  // called before each of your moves. First parameter: number of cakes left on the table. Second parameter: amount of cakes took by your opponent last move. Must return 1, 2 or 3 depending of how much cakes you want to take.
  move(cakes: number, last: number): number {
  }
}