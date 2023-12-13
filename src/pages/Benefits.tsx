import { motion } from 'framer-motion';
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';
import BenefitsPageGraphic from '../assets/BenefitsPageGraphic.png';
import ActionButton from '../components/ActionButton';
import Benefit from '../components/Benefit';
import { SelectedPage } from '../constants/types';

interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'State of the Art Faicilites',
    description:
      'Experience the epitome of fitness with our cutting-edge facilities equipped with the latest in exercise technology. From state-of-the-art workout machines to innovative training spaces, our fitness center is designed to provide you with an unparalleled exercise environment, ensuring every visit exceeds your expectations.',
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: '100s of Diverse Classes',
    description:
      'Elevate your fitness journey with our extensive range of diverse classes tailored to suit every fitness level and preference. Whether you are into high-intensity workouts, calming yoga sessions, or energetic dance routines, our fitness classes offer a dynamic and inclusive environment. Join a community of like-minded individuals and discover the joy of achieving your fitness goals together.',
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'Expert and Pro Trainers',
    description:
      'Unleash your full potential with guidance from our team of expert and professional trainers. Our trainers are dedicated to helping you achieve your fitness objectives by providing personalized workout plans, valuable insights, and continuous motivation. Benefit from their wealth of experience and knowledge, ensuring that every step of your fitness journey is guided by expertise and encouragement.',
  },
];

const variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type BenefitsProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: BenefitsProps) => {
  return (
    <section id="benefits" className="mx-auto min-h-auto w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="basis-3/5 text-3xl font-bold">MORE THAN JUST GYM</h1>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={variants}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphic */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            src={BenefitsPageGraphic}
            alt="benefits image"
            className="mx-auto"
          />

          {/* Description - title */}
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <h1 className="basis-3/5 text-3xl font-bold">
                    MILLIONS OF HAPPY MEMBERS GETTING{' '}
                    <span className="text-primary-500">FIT</span>
                  </h1>
                </motion.div>
              </div>
            </div>

            {/* Description - body */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Embark on a transformative fitness journey with millions of
                happy members who are achieving their health and wellness goals.
                Our dynamic gym community is dedicated to fostering a supportive
                environment where everyone, from fitness enthusiasts to
                beginners, finds the motivation to get fit. Experience the joy
                of being part of a thriving fitness family that celebrates each
                member's success, making every step of your fitness adventure
                truly rewarding.
              </p>
              <p className="mb-5">
                Discover the power of a global fitness community where millions
                of members are actively getting fit and embracing a healthier
                lifestyle. Our gym app connects you with a diverse and inclusive
                community that spans the globe. From personalized workout plans
                to shared success stories, join the ranks of happy members who
                have found their fitness tribe. Together, we celebrate the joy
                of achieving fitness milestones, making your journey not only
                effective but also enjoyable. Get ready to join the ranks of
                millions who are redefining what it means to be fit and happy!
              </p>
            </motion.div>

            {/* Button */}
            <div className="relative mt-10">
              <div className="before:absolute before:-bottom-20 before:right-40 before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Benefits;
