import { it, expect } from 'vitest'
import { sum } from './sum'

it('should sum 1 + 2', () => {
    expect(sum (1, 2)).toBe( 3 )
})

it('should sum 1 + 2', () => {
    expect(sum (1, 2, 3)).toBe( 6 )
})

it('should sum 1 + 2', () => {
    expect(sum (1, 2, 3, 4)).toBe( 10 )
})