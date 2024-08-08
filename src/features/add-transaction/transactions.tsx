import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Transactions() {
  return (
    <Tabs defaultValue="expense" className="">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="income">Income</TabsTrigger>
        <TabsTrigger value="expense">Expense</TabsTrigger>
        <TabsTrigger value="transfer">Transfer</TabsTrigger>
      </TabsList>
      <TabsContent value="income">
        Income
      </TabsContent>
      <TabsContent value="expense">
        Expense
      </TabsContent>
      <TabsContent value="transfer">
        Transfer
      </TabsContent>
    </Tabs>
  )
}
