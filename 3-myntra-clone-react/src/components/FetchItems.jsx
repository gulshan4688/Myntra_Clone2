import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    dispatch(fetchStatusActions.markFetchingStarted());
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(process.env.BASE_URL, { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items));
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          // console.log("Fetch aborted");
        } else {
          // console.error("Fetch error:", error);
        }
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return (
    <>
    </>
  );
};

export default FetchItems;
