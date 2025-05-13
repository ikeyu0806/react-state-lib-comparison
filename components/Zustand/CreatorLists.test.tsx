import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import CreatorLists from './CreatorLists'
import { Creator } from '@/types/creator'
import { useCreatorStore } from '@/store/zustand/creator_store'

vi.mock('@/store/zustand/creator_store', () => {
  const useCreatorStore = vi.fn()
  return { useCreatorStore }
})

describe('CreatorLists', () => {
  test('should render CreatorCards for each unselected creator', async () => {
    const mockCreators: Creator[] = [
      { name: 'クリエイター1', followers: 1000, totalLikes: 5000 },
      { name: 'クリエイター2', followers: 1500, totalLikes: 6000 },
    ]

    useCreatorStore.mockImplementation((selector) => {
      if (selector.toString().includes('unselectedCreators')) {
        return mockCreators
      }
      if (selector.toString().includes('addToSelected')) {
        return vi.fn()
      }
      return undefined
    })

    render(<CreatorLists />)

    expect(screen.getByText('クリエイター1')).toBeInTheDocument()
    expect(screen.getByText('クリエイター2')).toBeInTheDocument()
  })
})