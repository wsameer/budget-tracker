import React, { useState } from 'react'

import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { ACCOUNTS } from '../types';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { cn } from '@/utils/cn';
import { FormControl } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

type Props = {
  selected: string;
  onSelect: (value: string) => void;
}

export const AccountSelector = React.memo<Props>(({ selected, onSelect }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-3/4 justify-between",
              !selected && "text-muted-foreground"
            )}
          >
            {selected
              ? ACCOUNTS.find(
                (account) => account.value === selected
              )?.label
              : "Select account"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-max p-0">
        <Command>
          <CommandInput placeholder="Search account..." />
          <CommandList>
            <CommandEmpty>No account found.</CommandEmpty>
            <CommandGroup>
              {ACCOUNTS.map((account) => (
                <CommandItem
                  value={account.label}
                  key={account.value}
                  onSelect={() => {
                    onSelect(account.value!);
                    setIsPopoverOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      account.value === selected
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {account.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
})

AccountSelector.displayName = "AccountSelector";