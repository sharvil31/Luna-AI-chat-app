import { motion } from 'framer-motion';

const Skeleton = () => {
  const skeletonVariant = {
    start: {},
    end: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const skeletonChildVariant = {
    start: { opacity: 0.5 },
    end: { opacity: 1 },
  };

  return (
    <motion.div
      variants={skeletonVariant}
      initial='start'
      animate='end'
    >
      {Array.from({ length: 3 }).map((index, item) => (
        <motion.div
          key={index}
          className='skeleton'
          variants={skeletonChildVariant}
          //   initial='start'
          //   animate='end'
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 0.5,
          }}
        ></motion.div>
      ))}
    </motion.div>
  );
};

export default Skeleton;
