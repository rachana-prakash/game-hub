import React from "react";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames({ ...gameQuery, page_size: 10 });
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) {
    return <Text>{error.message}</Text>;
  }
  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results.map((gameItem) => (
              <GameCardContainer key={gameItem.id}>
                <GameCard game={gameItem} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          marginY={5}
          disabled={isFetchingNextPage}
          className="btn btn-primary my-3"
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading" : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
