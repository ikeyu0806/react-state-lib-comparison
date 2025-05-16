import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import CreatorLists from './CreatorLists'
import { useSelector } from 'react-redux'
import StoreProvider from '@/app/redux/StoreProvider'

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn(),
  Provider: ({ children }: { children: React.ReactNode }) => children
}))

const mockUnselectedCreators = [
  { name: 'クリエイター1', followers: 1000, totalLikes: 5000 },
  { name: 'クリエイター2', followers: 1500, totalLikes: 6000 },
]

describe('CreatorLists', () => {
  test('should render CreatorCards for each unselected creator', () => {
    vi.mocked(useSelector).mockReturnValue(mockUnselectedCreators)
    
    render(
      <StoreProvider>
        <CreatorLists />
      </StoreProvider>
    )

    expect(screen.getByText('クリエイター1')).toBeInTheDocument()
    expect(screen.getByText('クリエイター2')).toBeInTheDocument()
  })
})
