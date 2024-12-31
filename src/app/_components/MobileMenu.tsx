'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Hamburger from 'hamburger-react'

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" className={'p-0'}>
          <Hamburger size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent></SheetContent>
    </Sheet>
  )
}
