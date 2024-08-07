import React from 'react'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useResponsive } from '@/hooks/useResponsive'

export const AddTransaction = () => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <Button
        className="rounded-full h-12 w-12"
        variant="destructive"
        size="icon"
      >
        <Plus className="h-6 w-6" />
      </Button>
    )
  }

  return (
    <div className={'fixed bottom-6 right-6'}>
      <Button
        className="rounded-full h-12 w-12"
        variant="destructive"
        size="icon"
      >
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  )
}
