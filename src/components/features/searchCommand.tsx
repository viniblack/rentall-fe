import { useEffect, useState } from "react";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import * as React from "react"
import { Search } from "lucide-react";

export function SearchCommand() {
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center w-full max-w-sm ml-3 px-3 py-2 text-sm bg-gray-900 border border-gray-700 rounded-lg focus:outline-none hover:bg-gray-800"
      >
        <Search className="w-4 h-4 text-gray-500" />
        <span className="ml-2 text-gray-400">Search product...</span>
        <kbd className="ml-3 px-2 py-1 text-xs text-gray-400 bg-gray-800 border border-gray-700 rounded">
          ⌘ + K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
