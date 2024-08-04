import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Avatar,
  Box,
  Badge,
} from '@chakra-ui/react';

const data = [
  { customer: 'John Doe', orderNo: '12345', amount: '$150.00', status: 'Completed', avatarUrl: 'https://bit.ly/dan-abramov' },
  { customer: 'Jane Smith', orderNo: '12346', amount: '$200.00', status: 'Pending', avatarUrl: 'https://bit.ly/kent-c-dodds' },
  { customer: 'Sam Johnson', orderNo: '12347', amount: '$300.00', status: 'Completed', avatarUrl: 'https://bit.ly/ryan-florence' },
  { customer: 'Alice Brown', orderNo: '12348', amount: '$120.00', status: 'Canceled', avatarUrl: 'https://bit.ly/prosper-baba' },
  { customer: 'John Doe', orderNo: '12345', amount: '$150.00', status: 'Completed', avatarUrl: 'https://bit.ly/dan-abramov' },
  { customer: 'Jane Smith', orderNo: '12346', amount: '$200.00', status: 'Pending', avatarUrl: 'https://bit.ly/kent-c-dodds' },
  
];

const statusColors = {
  Completed: 'green',
  Pending: 'orange',
  Canceled: 'red',
};

const CustomerTable = () => {
  return (
    <>
      <b style={{ fontSize: '20px'}}>Recent Orders</b>
      <TableContainer mt={5}>
        <Table>
          <Thead>
            <Tr>
              <Th color="white">Customer</Th>
              <Th color="white">Order No</Th>
              <Th color="white">Amount</Th>
              <Th color="white">Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row, index) => (
              <Tr key={index}>
                <Td>
                  <Flex align="center">
                    <Avatar src={row.avatarUrl} size="sm" name={row.customer} mr={2} />
                    {row.customer}
                  </Flex>
                </Td>
                <Td>{row.orderNo}</Td>
                <Td>{row.amount}</Td>
                <Td>
                  <Badge
                    bg={statusColors[row.status]}
                    color="white"
                    borderRadius="md"
                    textAlign="center"
                    fontSize="sm"
                  >
                    {row.status}
                  </Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CustomerTable;
