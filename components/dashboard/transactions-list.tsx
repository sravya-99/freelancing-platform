import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function TransactionsList() {
  const transactions = [
    {
      id: "TX-1234",
      date: "Dec 10, 2023",
      description: "Milestone Payment - E-commerce Website",
      amount: "$1,200.00",
      status: "Completed",
      type: "Credit",
    },
    {
      id: "TX-1233",
      date: "Dec 8, 2023",
      description: "Withdrawal to Bank Account",
      amount: "$2,500.00",
      status: "Completed",
      type: "Debit",
    },
    {
      id: "TX-1232",
      date: "Dec 5, 2023",
      description: "Milestone Payment - Mobile App",
      amount: "$1,800.00",
      status: "Completed",
      type: "Credit",
    },
    {
      id: "TX-1231",
      date: "Dec 1, 2023",
      description: "Milestone Payment - Brand Identity",
      amount: "$950.00",
      status: "Pending",
      type: "Credit",
    },
    {
      id: "TX-1230",
      date: "Nov 28, 2023",
      description: "Withdrawal to Crypto Wallet",
      amount: "$1,500.00",
      status: "Completed",
      type: "Debit",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Transaction ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">{transaction.id}</TableCell>
            <TableCell>{transaction.date}</TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>
              <Badge variant={transaction.status === "Completed" ? "default" : "outline"}>{transaction.status}</Badge>
            </TableCell>
            <TableCell>
              <span className={transaction.type === "Credit" ? "text-green-500" : "text-red-500"}>
                {transaction.type}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
