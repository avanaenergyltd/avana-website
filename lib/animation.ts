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

export const menu = {
  open: {
    width: "var(--width-to)",
    height: "95%",
    display: "block",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    width: "0",
    height: "0",
    display: "none",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const links = {
  closeLinks: {
    display: "none",
    opacity: 0,
    transition: {
      duration: 0.75,
      delay: 0.25,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  openLinks: {
    display: "flex",
    opacity: 1,
    transition: {
      duration: 0.75,
      delay: 0.25,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const experienceConVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

export const experienceChildVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay,
    },
  }),
};

export const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay,
    },
  }),
};

export const expertiseTextVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const expertiseContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const expertiseImageVariants = {
  hidden: { clipPath: "inset(0 50% 0 50%" },
  visible: {
    clipPath: "inset(0 0% 0 0%",
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

export const testimonialVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.5,
    },
  }),
};
