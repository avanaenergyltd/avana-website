export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delay: 1,
      staggerChildren: 0.4,
    },
  },
};

export const itemVariants = {
  hidden: { y: 100 },
  visible: {
    y: 0,
    transition: {
      duration: 2,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

export const valueVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.125,
    },
  }),
};
