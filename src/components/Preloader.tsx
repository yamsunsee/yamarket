"use client";

import { StoreType } from "@/utils/types";
import { FC, useRef, useEffect, useState } from "react";
import useStores from "../stores";

const Preloader: FC<{ initialState: Partial<StoreType> }> = ({ initialState }) => {
  const { setStores } = useStores();
  const isLoaded = useRef(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted && !isLoaded.current) {
    setStores(initialState);
    isLoaded.current = true;
  }

  return null;
};

export default Preloader;
