import React from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CategoryEnum, AccountEnum } from './types';
import { DateSelector } from './forms-fields/date-selector';

const formSchema = z.object({
  transactionDate: z.date({
    required_error: "A date is required"
  }),
  note: z.optional(
    z.string().max(128, { message: "note can be of max 128 characters" })
  ),
})

// const formSchema = z.object({
//   date: z.date({
//     required_error: "A date is required"
//   }),
//   amount: z.number({
//     required_error: "Amount is required",
//     invalid_type_error: "Amount must be a number",
//   }).nonnegative(),
//   category: z.nullable(CategoryEnum),
//   account: AccountEnum,
//   note: z.optional(z.string().max(100)),
// })

export const ExpenseForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      transactionDate: new Date(),
      note: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="transactionDate"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center mt-4 space-y-0 space-x-2">
                <FormLabel htmlFor="transactionDate" className="w-1/4">Date</FormLabel>
                <DateSelector
                  selected={field.value}
                  onSelect={(value: Date) => field.onChange(value)}
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center mt-4 space-y-0 space-x-2">
                <FormLabel htmlFor="note" className="w-1/4">note</FormLabel>
                <FormControl className="m-0">
                  <Input className="w-3/4" placeholder="sameer" {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full' variant="destructive" type="submit">Submit</Button>
      </form>
    </Form>
  )
}
