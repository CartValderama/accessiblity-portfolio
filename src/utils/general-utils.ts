export const colorChecker = (language: string) => {
  switch (language) {
    case "C#":
      return "#178600";
    case "TypeScript":
      return "#225389";
    case "JavaScript":
      return "#7f631e";
    case "SCSS":
      return "#ad3972";
    default:
      return "#57534e";
  }
};

export const fadeInAnimationVariants = (
  direction: string,
  initialValue: number,
  animateValue: number
) => {
  return {
    initial: {
      opacity: 0,
      [direction]: initialValue, // Corrected dynamic key usage
    },
    animate: (index: number) => ({
      opacity: 1,
      [direction]: animateValue, // Corrected dynamic key usage
      transition: {
        delay: 0.075 * index,
      },
    }),
  };
};

export const textSplitter = (text: string) => {
  const letters = text.split("").map((char, i) => ({
    char,
    isSpace: char === " ",
    index: i,
  }));

  return letters;
};
