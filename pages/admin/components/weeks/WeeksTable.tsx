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
  Center,
  Link,
  IconButton
} from '@chakra-ui/react'
import { FiEdit2 } from 'react-icons/fi'
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
                <Th w="10%" />
              </Tr>
            </Thead>
            <Tbody>
              {weeks
                .sort((week1, week2) => week1.weekNumber - week2.weekNumber)
                .map((week) => (
                  <Tr key={week.weekNumber}>
                    <Td>{week.weekNumber}</Td>
                    <Td>
                      {DateTime.fromISO(week.date.toString()).toLocaleString()}
                    </Td>
                    <Td w="10%" textAlign="right">
                      <Link href={`/admin/weeks/${week._id}`}>
                        <IconButton
                          aria-label="Editer"
                          icon={<FiEdit2 />}
                          bg="white"
                          fontSize={20}
                          _hover={{
                            bg: 'gray.100'
                          }}
                        />
                      </Link>
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
