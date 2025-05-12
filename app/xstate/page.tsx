'use client'

import React from 'react'
import { useMachine } from '@xstate/react'
import recruitmentMachine from '@/machines/recrutment_status_machine'

const RecruitmentStatusComponent = () => {
  const [current, send] = useMachine(recruitmentMachine)

  const publish = () => {
    send({
      type: 'PUBLISH',
    })
  }

  const cancel = () => {
    send({
      type: 'CANCEL',
    })
  }

  const end = () => {
    send({
      type: 'END',
    })
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">
          Current Status: {current.context.status}
        </h2>
      </div>

      <div className="space-x-4">
        {current.context.status === 'unpublished' && (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={publish}
          >
            Publish
          </button>
        )}

        {current.context.status === 'recruiting' && (
          <>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={cancel}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded"
              onClick={end}
            >
              End
            </button>
          </>
        )}

        {current.context.status === 'published' && (
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={cancel}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  )
}

export default RecruitmentStatusComponent
