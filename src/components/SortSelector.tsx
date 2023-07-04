import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSort: (sort: string) => void;
  sortSelected: string;
}
const SortSelector = ({ onSelectSort, sortSelected }: Props) => {
  const sortOrders = [
    { label: "Relevance", value: "" },
    { label: "Date Added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release date", value: "-released" },
    { label: "Popularity", value: "-rating" },
    { label: "Average Rating", value: "-metacritic" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortSelected
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sort) => (
          <MenuItem
            key={sort.value}
            value={sort.value}
            onClick={() => onSelectSort(sort.value)}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
