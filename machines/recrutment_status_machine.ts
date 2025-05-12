import { start } from 'repl'
import { assign, createMachine, AnyEventObject } from 'xstate'

type RecruitmentStatus =
  | 'unpublished'
  | 'recruiting'
  | 'published'
  | 'cancelled'
  | 'ended'

interface RecruitmentMachineContext {
  status: RecruitmentStatus
  startDate: Date | null
  endDate: Date | null
  cancellationDate: Date | null
}

const recruitmentMachine = createMachine(
  {
    id: 'recruitment',
    initial: 'unpublished',
    context: {
      status: 'unpublished' as RecruitmentStatus,
      startDate: null,
      endDate: null,
      cancellationDate: null,
    } as RecruitmentMachineContext,
    states: {
      unpublished: {
        on: {
          PUBLISH: {
            target: 'recruiting', // 未公開 → 募集中
            actions: assign({
              status: () => 'recruiting' as RecruitmentStatus,
              startDate: () => new Date(), // 現在の日付を開始日として設定
            }),
          }
        },
      },
      recruiting: {
        on: {
          CANCEL: {
            target: 'cancelled', // 募集中 → キャンセル
            actions: assign({
              status: () => 'cancelled' as RecruitmentStatus,
              cancellationDate: () => new Date(), // 現在の日付をキャンセル日として設定
            }),
          },
          END: {
            target: 'ended', // 募集中 → 募集終了
            actions: assign({
              status: () => 'ended' as RecruitmentStatus,
              endDate: () => new Date(), // 現在の日付を終了日として設定
            }),
          }
        },
      },
      published: {
        on: {
          CANCEL: {
            target: 'cancelled', // 公開中 → キャンセル
            actions: assign({
              status: () => 'cancelled' as RecruitmentStatus,
              cancellationDate: () => new Date(), // 現在の日付をキャンセル日として設定
            }),
          }
        },
      },
      cancelled: {
        on: {
          PUBLISH: {
            target: 'recruiting', // キャンセル → 募集中
            actions: assign({
              status: () => 'recruiting' as RecruitmentStatus,
              startDate: () => new Date(), // 現在の日付を開始日として設定
            }),
          },
        },
        type: 'final', // キャンセル状態も最終状態
      },
      ended: {
        type: 'final', // 募集終了状態も最終状態
      },
    },
  },
)

export default recruitmentMachine
