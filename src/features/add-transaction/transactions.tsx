import React, { useCallback } from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TransactionsProps, TransactionTypes } from './types'
import { ExpenseForm } from './expense-form';


export const Transactions = React.memo<TransactionsProps>(({ selectedTab, setSelectedTab }) => {
  const transactionTypes = Object.values(TransactionTypes);

  const renderContent = useCallback(
    () => {
      switch (selectedTab) {
        case TransactionTypes.EXPENSE:
          return <ExpenseForm />;

        case TransactionTypes.INCOME:
          return <ExpenseForm />;

        case TransactionTypes.TRANSFER:
          return <ExpenseForm />;

        default:
          return null;
      }
    },
    [selectedTab],
  )


  return (
    <Tabs
      defaultValue={selectedTab}
      onValueChange={(value) => setSelectedTab(value as TransactionTypes)}
    >
      <TabsList className="grid w-full grid-cols-3">
        {transactionTypes.map((type) => (
          <TabsTrigger
            key={type}
            value={type}
            className="w-full text-center capitalize"
          >
            {type}
          </TabsTrigger>
        ))}
      </TabsList>
      {transactionTypes.map((type) => (
        <TabsContent key={type} value={type}>
          {renderContent()}
        </TabsContent>
      ))}
    </Tabs>
  )
})
