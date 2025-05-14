import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import RecruitmentStatusComponent from './page'

vi.mock('@xstate/react', () => {
  return {
    useMachine: () => [
      { context: { status: 'unpublished' } },
      vi.fn()
    ]
  }
})

describe('RecruitmentStatusComponent', () => {
  test('should render the current status', () => {
    render(<RecruitmentStatusComponent />)

    expect(screen.getByText('Current Status: unpublished')).toBeInTheDocument()
  })
})