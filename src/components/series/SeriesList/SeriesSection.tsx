import React, { FunctionComponent } from "react";

import { Series } from "../../../dummyData/series";
import { formatDate } from "../../../utils/date";
import ListingItem from "../../ui/ListingItem";

interface Props {
  series: Series[];
  title: string;
}

const SeriesSection: FunctionComponent<Props> = ({ series, title }) =>
  series.length === 0 ? null : (
    <section>
      <header>
        <h2>{title}</h2>
        <ul>
          {series &&
            series.map((s) => (
              <ListingItem
                key={s.id}
                linkUrl={`/series/${s.id}`}
                title={s.name}
                info={[`${formatDate(s.startDate)} - ${formatDate(s.endDate)}`]}
              />
            ))}
        </ul>
      </header>
    </section>
  );

export default SeriesSection;
