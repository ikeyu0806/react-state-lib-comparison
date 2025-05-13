import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import CreatorLists from './CreatorLists'

// モジュール全体をモック化
// 以下のようなセレクタの動作をエミュレートするために、
// useCreatorStoreをモック化
// const unselectedCreators = useCreatorStore(
//   (state) => state.unselectedCreators,
// )
vi.mock('@/store/zustand/creator_store', () => ({
  useCreatorStore: (selector: any) => {
    const state = {
      unselectedCreators: [
        { name: 'クリエイター1', followers: 1000, totalLikes: 5000 },
        { name: 'クリエイター2', followers: 1500, totalLikes: 6000 },
      ],
      selectedCreators: [],
      addToSelected: vi.fn(),
      removeFromSelected: vi.fn(),
    }

    // セレクタを適用して値を返す
    return selector(state)
  },
}))

describe('CreatorLists', () => {
  test('should render CreatorCards for each unselected creator', () => {
    render(<CreatorLists />)

    // クリエイター名が表示されていることを確認
    expect(screen.getByText('クリエイター1')).toBeInTheDocument()
    expect(screen.getByText('クリエイター2')).toBeInTheDocument()
  })
})
