import { motion } from 'framer-motion';
import { SelectedPage } from '../constants/types';
import Class from '../components/Class';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';

interface ClassType {
  name: string;
  description?: string;
  image: string;
}

const classes: Array<ClassType> = [
  {
    name: 'Weight Training',
    description:
      'Sculpt your physique with our dynamic weight training classes. Elevate your strength, tone your muscles, and achieve fitness goals with expert guidance.',
    image: image1,
  },
  {
    name: 'Yoga',
    description:
      'Immerse yourself in the serenity of yoga. Cultivate balance, flexibility, and inner peace as our experienced instructors guide you through rejuvenating sessions.',
    image: image2,
  },
  {
    name: 'Ab Core',
    description:
      'Unleash the power of your core with specialized Ab Core classes. Strengthen your abdominal muscles, improve posture, and enhance overall stability for a solid foundation.',
    image: image3,
  },
  {
    name: 'Adventure',
    description:
      'Embark on fitness adventures that blend excitement and exercise. Our Adventure classes offer a unique fusion of outdoor activities to keep you engaged and energized.',
    image: image4,
  },
  {
    name: 'Fitness',
    description:
      'Experience a holistic approach to fitness with our comprehensive Fitness classes. Tailored workouts designed to boost endurance, agility, and overall well-being.',
    image: image5,
  },
  {
    name: 'Training',
    description:
      'Elevate your fitness journey with targeted Training classes. From personalized plans to expert guidance, our trainers are dedicated to helping you achieve your fitness aspirations.',
    image: image6,
  },
];

type OurClassesProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: OurClassesProps) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <h1 className="basis-3/5 text-3xl font-bold">OUR CLASSES</h1>
            <p className="py-5">
              Discover a world of fitness possibilities with our diverse
              classes. From high-energy workouts to mindful practices, our
              expert-led sessions cater to all fitness levels. Join our
              supportive community, challenge yourself, and embark on a journey
              to a healthier, happier you. Explore "Our Classes" – where fitness
              meets personalized excellence.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
export default OurClasses;
