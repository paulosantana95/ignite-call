import { useState } from 'react'
import { CalendarStep } from './CalendarStep'
import { ConfirmStep } from './ConfirmStep'

export function ScheduleForm() {
  const [selectedDatetime, setSelectedDateTime] = useState<Date | null>(null)

  function handleClearSelectDateTime() {
    setSelectedDateTime(null)
  }

  if (selectedDatetime) {
    return (
      <ConfirmStep
        schedulingDate={selectedDatetime}
        onCancelConfirmation={handleClearSelectDateTime}
      />
    )
  }

  return (
    <>
      <CalendarStep onSelectDateTime={setSelectedDateTime} />
    </>
  )
}
