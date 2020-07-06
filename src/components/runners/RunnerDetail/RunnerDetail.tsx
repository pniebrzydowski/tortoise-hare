import React, { FunctionComponent } from "react";

import { Runner } from "../../../dummyData/runners";
import useDocData from "../../../firebase/hooks/useDocData";

interface Props {
  id: string;
}

const RunnerDetail: FunctionComponent<Props> = ({ id }) => {
  const { data: runner, loading } = useDocData<Runner>({
    collection: "runners",
    id,
  });

  if (loading || !runner) {
    return null;
  }

  return (
    <header>
      <h2>{runner.name}</h2>
    </header>
  );
};

export default RunnerDetail;
