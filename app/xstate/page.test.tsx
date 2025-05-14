import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import RecruitmentStatusComponent from './page'

// モジュールを先頭でモック化
vi.mock('@xstate/react')

// モックされたモジュールをモック化の後にインポート
import { useMachine } from '@xstate/react'

describe('RecruitmentStatusComponent', () => {
  // 各テスト前にモックをリセット
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('should render the current status', () => {
    // モックを設定
    vi.mocked(useMachine).mockReturnValue([
      // 以下の警告が出るが動作には影響せず対応辛いのでignore
      // 型 '{ context: { status: string; }; }' を型 'MachineSnapshot<any, any, any, any, any, any, any, any>' に割り当てることはできません。
      // 型 '{ context: { status: string; }; }' には 型 'StoppedMachineSnapshot<any, any, any, any, any, any, any, any>' からの次のプロパティがありません: status, output, error, machine、10 など。
      // @ts-ignore
      { context: { status: 'unpublished' } },
      vi.fn(),
    ])

    render(<RecruitmentStatusComponent />)
    expect(screen.getByText('Current Status: unpublished')).toBeInTheDocument()
  })

  test('should render the current status after state change', () => {
    // モックを設定
    vi.mocked(useMachine).mockReturnValue([
      // @ts-ignore
      { context: { status: 'recruiting' } },
      vi.fn(),
    ])

    render(<RecruitmentStatusComponent />)
    expect(screen.getByText('Current Status: recruiting')).toBeInTheDocument()
  })

  test('should call publish function when Publish button is clicked', () => {
    const sendMock = vi.fn()
    vi.mocked(useMachine).mockReturnValue([
      // @ts-ignore
      { context: { status: 'unpublished' } },
      sendMock,
    ])

    render(<RecruitmentStatusComponent />)
    const button = screen.getByText('Publish')
    button.click()

    expect(sendMock).toHaveBeenCalledWith({ type: 'PUBLISH' })
  })
})
