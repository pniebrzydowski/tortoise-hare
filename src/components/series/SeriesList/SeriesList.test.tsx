import React from "react";

import { FirebaseContext } from "../../../firebase";
import { BaseFirebaseMock, render, wait, screen } from "../../../utils/tests";
import SeriesList from "./SeriesList";
import {
  currentSeries,
  futureSeries,
  pastSeries,
  Series,
} from "../../../dummyData/series";
import * as useCollectionDocsData from "../../../firebase/hooks/useCollectionDocsData";

describe("Series List", () => {
  const collection = {
    orderBy: jest.fn(),
    where: jest.fn(),
    onSnapshot: jest.fn(),
  };

  beforeEach(() => {
    jest.resetAllMocks();
    jest
      .spyOn(firebase.firestore, "collection")
      .mockImplementation(() => collection);
    jest.spyOn(collection, "orderBy").mockImplementation(() => collection);
    jest.spyOn(collection, "where").mockImplementation(() => collection);
    jest
      .spyOn(collection, "onSnapshot")
      .mockImplementation(() => () => new Promise((resolve) => resolve()));
  });

  const firebase = new BaseFirebaseMock();

  const renderWithFirebase = () => {
    render(
      <FirebaseContext.Provider value={firebase}>
        <SeriesList />
      </FirebaseContext.Provider>
    );
  };

  it("calls the appropriate firebase actions", async () => {
    renderWithFirebase();

    await wait();

    expect(firebase.firestore.collection).toHaveBeenCalledWith("series");
    expect(collection.orderBy).toHaveBeenCalledWith("startDate", "asc");
    expect(collection.where).not.toHaveBeenCalled();
  });

  it("splits the data into current, future, and past series", () => {
    const data = [currentSeries, futureSeries, pastSeries];
    jest.spyOn(useCollectionDocsData, "default").mockReturnValue({
      data,
      loading: false,
    });

    renderWithFirebase();

    expect(screen.getByText("Current Series")).toBeVisible();
    expect(screen.getByText(currentSeries.name)).toBeVisible();

    expect(screen.getByText("Upcoming Series")).toBeVisible();
    expect(screen.getByText(futureSeries.name)).toBeVisible();

    expect(screen.getByText("Past Series")).toBeVisible();
    expect(screen.getByText(pastSeries.name)).toBeVisible();
  });

  it("displays only no current series message with no data", () => {
    const data: Series[] = [];
    jest.spyOn(useCollectionDocsData, "default").mockReturnValue({
      data,
      loading: false,
    });

    renderWithFirebase();

    expect(screen.getByText("Current Series")).toBeVisible();
    expect(screen.getByText("No current series")).toBeVisible();

    expect(screen.queryByText("Upcoming Series")).not.toBeInTheDocument();
    expect(screen.queryByText("Past Series")).not.toBeInTheDocument();
  });
});
