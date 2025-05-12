import { assign, createMachine } from 'xstate'

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

const recruitmentMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QCcwGNkFcCWAXAtmAHa4B0mRADpgEYA22sAFpAMQAKAqgEIAyAkgGUAEgG0ADAF1EoSgHtYebHKIyQAD0QAWAKwBmUgDYA7AEYAHAE5LhrefOm9pgDQgAnogBMxrUZ2HPc30dSz1xS28AX0jXVAwcAmIyOKwlIihWAGEAQQA5TIBRXglpJBB5RVxlVTLNBF1jUktxAJ1jANDLXT1XDwQHUh1xYfFPLS7PTx1HaNj0VMSSUhSE7HTWAtyAERK1CqUVNTrjcV9jK3D9QyHzLU9exAtxQfPTLT0IkxNPWZAVvEIS2o9EYLAgWTyhWKUj2CgONVAdVMhkMg1M-j0ek8yO8phaD36jSGIxMlmMlnMhnRv3+izIaAAhkQ0GA6HQ2Fw+EIxDCyvsqodatp9EYzFYbHYHE4CaZzqRxK93p92sYfr8iHIIHA1LTAbhYZVqkdEABaQwEs3ykbWm0KmnzBJ68hUWgMZiQA3w40IMKosbYymWRymTx6fQEzwU0imSzBcbiCzePT2+IApLLB1pKCegUIjSIHQDf3YzGTfwBCOnaOyktaQwRIJTFMLJ3At1gnNGoX1e7uR6mUzyj4Kwx6LTiIZ3ZuO9OM5ms9kQTuCxFeKykILo+zNLp3c19hB4yykc7NWyGUZkrQD6dppbELVLvlw3PehyoymqzGUrHvcyVzwN2+HRdCGWxTmMaJoiAA */
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
        },
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
        },
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
        },
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
})

export default recruitmentMachine
