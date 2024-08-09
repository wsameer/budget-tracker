import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { useResponsive } from '@/hooks/useResponsive';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Transactions } from './transactions';
import { TransactionTypes } from './types';

export const AddTransaction = () => {
  const [open, setOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState(TransactionTypes.EXPENSE);
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            className="rounded-full h-12 w-12"
            variant="destructive"
            size="icon"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader className='text-left'>
              <DrawerTitle>
                Record {selectedTab === TransactionTypes.TRANSFER ? 'a' : 'an'} {selectedTab}
              </DrawerTitle>
            </DrawerHeader>
            <div className='px-4'>
              <Transactions selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="secondary">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <div className={'fixed bottom-6 right-6'}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className="rounded-full h-12 w-12"
            variant="destructive"
            size="icon"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              Record {selectedTab === TransactionTypes.TRANSFER ? 'a' : 'an'} {selectedTab}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Transactions selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
