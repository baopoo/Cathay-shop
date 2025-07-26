import { useState } from "react";
import CategoryTabs from "./CategoryTabs";
import ToolbarActions from "./ToolbarActions";

import { defaultCategoryTab } from "@/client/constants";

const Toolbar = () => {
  const [activeTab, setActiveTab] = useState(defaultCategoryTab);

  return (
    <div className="flex justify-between items-center py-4">
      <CategoryTabs active={activeTab} onChange={setActiveTab} />
      <ToolbarActions />
    </div>
  );
};

export default Toolbar;
