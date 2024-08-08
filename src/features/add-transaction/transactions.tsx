import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TransactionsProps, TransactionTypes } from './types'


export const Transactions = React.memo<TransactionsProps>(({ selectedTab, setSelectedTab }) => {
  const transactionTypes = Object.values(TransactionTypes);
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
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </TabsContent>
      ))}
    </Tabs>
  )
})
