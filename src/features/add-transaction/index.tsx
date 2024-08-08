import React from 'react'

import { Plus } from 'lucide-react'
import { useResponsive } from '@/hooks/useResponsive';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Transactions } from './transactions';

export const AddTransaction = () => {
  const [open, setOpen] = React.useState(false)
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
              <DrawerTitle>Add a transaction</DrawerTitle>
            </DrawerHeader>
            <div className='p-4'>
              <Transactions />
            </div>
            <DrawerFooter>
              <Button variant="destructive">Add</Button>
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
            <DialogTitle>Add a transaction</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Transactions />
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
