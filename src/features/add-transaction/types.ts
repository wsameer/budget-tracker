import { z } from 'zod'

export enum TransactionTypes {
  INCOME = 'income',
  EXPENSE = 'expense',
  TRANSFER = 'transfer',
}

export type TransactionsProps = {
  selectedTab: TransactionTypes
  setSelectedTab: (value: TransactionTypes) => void
}

const CATEGORIES = ['', 'food', 'transport', 'housing', 'groceries'] as const
export const CategoryEnum = z.enum(CATEGORIES)
export type CategoryTypes = z.infer<typeof CategoryEnum>

export const AccountEnum = z.enum([
  'Chequing',
  'Savings',
  'Credit Card',
  'Cash',
])
