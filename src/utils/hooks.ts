import { useActiveSectionContext } from "./useContext";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "../types/sectionLink";
import { Dispatch, SetStateAction, useEffect } from "react";

export function useSectionInView(sectionName: SectionName, threshold = 0.3) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(sectionName);
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}

type UsePaginationProps = {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
};

export const usePagination = ({
  setCurrentPage,
  totalPages,
}: UsePaginationProps) => {
  const handlePageChange = (direction: "prev" | "next") => {
    setCurrentPage((prevPage) =>
      direction === "prev"
        ? Math.max(prevPage - 1, 1)
        : Math.min(prevPage + 1, totalPages)
    );
  };

  return { handlePageChange };
};
