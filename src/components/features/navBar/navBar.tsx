'use client'
import { LogOut, Menu } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { useState } from 'react'
import { Flex } from '@/components/ui/flex'
import { LogoIcon } from '@/components/ui/logo'
import * as React from "react"

import { Link } from '@/components/ui/link'

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from '@/components/ui/button'
import { SearchCommand } from '@/components/features/searchCommand'
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'


export const NavBar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const isAdmin = false

  const handleSignOut = () => {
    signOut()
  }


  return (
    <Flex
      padding="md"
      align="center"
      width="full"
      height="xl"
      justify='between'
      className="border-grey-500 border-1px fixed left-0 right-0 top-0 z-10 border-b bg-navbar-background bg-cover"
    >
      <Flex justify='between'>
        <Flex className="hidden md:inline">
          <LogoIcon size={120} />
        </Flex>
        <Flex className="sm:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                icon={<Menu className="size-7" />}
              >
              </Button>
            </DrawerTrigger>
            <DrawerContent className='px-5'>
              <DrawerHeader>
                <DrawerTitle>Lista de categorias</DrawerTitle>
                <DrawerDescription>Selecione uma categoria</DrawerDescription>
              </DrawerHeader>
              <div className="flex flex-col max-h-[300px] overflow-y-auto">
                <Link
                  size={'lg'}
                  margin={'md'}
                  href="#"
                  onClick={() => setDrawerOpen(false)}
                >
                  Camping
                </Link>
                <Link
                  size={'lg'}
                  margin={'md'}
                  href="#"
                  onClick={() => setDrawerOpen(false)}
                >
                  Esports
                </Link>
                <Link
                  size={'lg'}
                  margin={'md'}
                  href="#"
                  onClick={() => setDrawerOpen(false)}
                >
                  Tools
                </Link>
              </div>
            </DrawerContent>
          </Drawer>
        </Flex>
        <Flex>
          <SearchCommand />
        </Flex>
        <Flex className='hidden md:inline' >
          <NavigationMenu className='ml-1'>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Camping</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <ListItem href="#" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </ListItem>
                    <ListItem href="#" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem href="#" title="Typography">
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Esports</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <ListItem href="#" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </ListItem>
                    <ListItem href="#" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem href="#" title="Typography">
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <ListItem href="#" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </ListItem>
                    <ListItem href="#" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem href="#" title="Typography">
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Flex>
      </Flex>
      <Flex >
        <Button variant="link">
          Login
        </Button>
      </Flex>
    </Flex>
  )
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
