"use client"

import Link from "next/link"
import { Button } from "@nextui-org/button"
import { Tooltip } from "@nextui-org/tooltip"
import { HomeIcon } from "lucide-react"

import { useGameStore } from "@/lib/store"

export const HomeButton = () => {
  const gameStore = useGameStore()

  const handleReset = () => {
    gameStore.reset()
  }

  return (
    <Link href="/">
      <Tooltip content="Home">
        <Button
          isIconOnly
          size="sm"
          onClick={handleReset}
          variant="solid"
          color="primary"
        >
          <HomeIcon className="h-4 w-4" />
        </Button>
      </Tooltip>
    </Link>
  )
}
