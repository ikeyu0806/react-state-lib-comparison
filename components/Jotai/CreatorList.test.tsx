import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import CreatorLists from './CreatorLists'

const mockUnselectedCreators = [
  { name: 'Creator One', followers: 1000, totalLikes: 5000 },
  { name: 'Creator Two', followers: 2000, totalLikes: 8000 },
]

const mockSetSelectedCreators = vi.fn()
const mockSetUnselectedCreators = vi.fn()

vi.mock('jotai', async () => {
  const actualJotai = await vi.importActual('jotai')
  return {
    ...actualJotai,
    useSetAtom: vi.fn(() => mockSetSelectedCreators),
    useAtom: vi.fn(() => [mockUnselectedCreators, mockSetUnselectedCreators]),
  }
})

describe('CreatorLists', () => {
  test('should render CreatorCards for each unselected creator', () => {
    render(<CreatorLists />)

    expect(screen.getByText('Creator One')).toBeInTheDocument()
    expect(screen.getByText('Creator Two')).toBeInTheDocument()
  })

  test('should add creator to selectedCreators and remove from unselectedCreators on click', () => {
    render(<CreatorLists />)

    const creator1Card = screen.getByText('Creator One')

    fireEvent.click(creator1Card)

    expect(mockSetSelectedCreators).toHaveBeenCalledWith(expect.any(Function))
    expect(mockSetUnselectedCreators).toHaveBeenCalledWith(expect.any(Function))
  })
})
