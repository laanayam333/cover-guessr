import type { Metadata } from "next"
import { Card, CardBody } from "@nextui-org/card"

import { LeaderboardButton } from "@/components/game/leaderboard-button"
import { SelectCategory } from "@/components/game/select-category"

export const metadata: Metadata = {
  title: "Game Over",
}

export default async function GameOverRoute({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { score } = searchParams

  return (
    <div className="relative flex flex-col items-center">
      <h1 className="text-bold mt-5 text-4xl font-bold uppercase leading-none tracking-tighter md:text-5xl">
        Game Over
      </h1>
      <Card className="mt-5 border border-primary md:mt-10">
        <CardBody className="flex flex-col items-center">
          <h2 className="font-medium">Score</h2>
          <p className="text-3xl  font-bold">{score}</p>
        </CardBody>
      </Card>

      <div className="mt-10 flex flex-col items-center justify-center">
        <p>Pick a category to play again</p>
        <SelectCategory />
      </div>
    </div>
  )
}
