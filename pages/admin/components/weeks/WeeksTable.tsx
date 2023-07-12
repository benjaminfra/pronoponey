import { DateTime } from 'luxon'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spinner,
  Center
} from '@chakra-ui/react'
import { IWeek } from '../../../../server/db/models/weekModel'

type WeeksTableProps = {
  weeks: IWeek[]
  loading?: boolean
}

function WeeksTable({ weeks, loading = false }: WeeksTableProps) {
  return (
    <>
      {loading && (
        <Center>
          <Spinner mt="10em" />
        </Center>
      )}
      {!loading && (
        <TableContainer bg="white" rounded="lg">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Journée</Th>
                <Th>Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {weeks.map((week) => (
                <Tr key={week.weekNumber}>
                  <Td>{week.weekNumber}</Td>
                  <Td>
                    {DateTime.fromISO(week.date.toString()).toLocaleString()}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}

export default WeeksTable
