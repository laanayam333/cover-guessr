import Link from "next/link"
import {
  ClapperboardIcon,
  Disc3Icon,
  Gamepad2Icon,
  ShapesIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const SelectCategory = () => {
  return (
    <div className="mt-2.5 flex gap-x-2.5">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/game?category=all"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <ShapesIcon className="h-5 w-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>All Media</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/game?category=albums"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <Disc3Icon className="h-5 w-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Albums</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/game?category=movies"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <ClapperboardIcon className="h-5 w-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Movies</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/game?category=videogames"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <Gamepad2Icon className="h-5 w-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Videogames</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}