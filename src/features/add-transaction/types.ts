export enum TransactionTypes {
  INCOME = 'income',
  EXPENSE = 'expense',
  TRANSFER = 'transfer',
}

export type TransactionsProps = {
  selectedTab: TransactionTypes
  setSelectedTab: (value: TransactionTypes) => void
}
