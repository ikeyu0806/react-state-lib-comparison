import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import CreatorLists from './CreatorLists'
import {
  SelectedCreatorContext,
  UnselectedCreatorContext,
} from '@/app/use_context/page'

const mockDispatchSelected = vi.fn()
const mockDispatchUnselected = vi.fn()

const unselectedCreators = [
  { name: 'クリエイター1', followers: 1000, totalLikes: 5000 },
  { name: 'クリエイター2', followers: 1500, totalLikes: 6000 },
]

describe('CreatorLists', () => {
  test('should render CreatorCards for each unselected creator', () => {
    render(
      <SelectedCreatorContext.Provider value={[[], mockDispatchSelected]}>
        <UnselectedCreatorContext.Provider
          value={[unselectedCreators, mockDispatchUnselected]}
        >
          <CreatorLists />
        </UnselectedCreatorContext.Provider>
      </SelectedCreatorContext.Provider>,
    )

    expect(screen.getByText('クリエイター1')).toBeInTheDocument()
    expect(screen.getByText('クリエイター2')).toBeInTheDocument()
  })

  test('should call dispatchSelected and dispatchUnselected when a creator is clicked', () => {
    render(
      <SelectedCreatorContext.Provider value={[[], mockDispatchSelected]}>
        <UnselectedCreatorContext.Provider
          value={[unselectedCreators, mockDispatchUnselected]}
        >
          <CreatorLists />
        </UnselectedCreatorContext.Provider>
      </SelectedCreatorContext.Provider>,
    )

    const creator1Card = screen.getByText('クリエイター1')
    fireEvent.click(creator1Card)

    expect(mockDispatchSelected).toHaveBeenCalledWith({
      type: 'ADD_TO_SELECTED',
      creator: unselectedCreators[0],
    })
    expect(mockDispatchUnselected).toHaveBeenCalledWith({
      type: 'REMOVE_FROM_SELECTED',
      creator: unselectedCreators[0],
    })
  })
})
