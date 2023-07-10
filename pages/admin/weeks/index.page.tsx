/* eslint-disable import/prefer-default-export */
import useAdminWeeks from '../hooks/useAdminWeeks'

export function Page() {
  const { weeks, createNewWeek, isWeeksLoading } = useAdminWeeks()
  return <></>
}
