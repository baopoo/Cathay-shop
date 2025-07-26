import { Toolbar, FilterPanel } from "@/client/components";
import type { FilterVal } from "@/client/types/filters";
import { useState } from "react";

const Home = () => {
  const [filters, setFilters] = useState<FilterVal>({
    sortBy: "Default",
    price: "All",
    color: "All",
    tags: [],
  });

  return (
    <div>
      <Toolbar />

      <FilterPanel
        value={filters}
        onChange={(key) => {
          setFilters({ ...filters, ...key });
        }}
      />
    </div>
  );
};

export default Home;
