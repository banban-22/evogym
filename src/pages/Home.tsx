import { SelectedPage } from '../constants/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import HomePageText from '../assets/HomePageText.png';
import HomePageGraphic from '../assets/HomePageGraphic.png';
import RedBull from '../assets/SponsorRedBull.png';
import Forbes from '../assets/SponsorForbes.png';
import Fortune from '../assets/SponsorFortune.png';
import ActionButton from '../components/ActionButton';

type HomeProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: HomeProps) => {
  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Heading */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="homepage-text" />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, dustaion: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 cursor-pointer"
              onClick={() => setSelectedPage(SelectedPage.Contact)}
              href={`#${SelectedPage.Contact}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* Image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="homepage-graphic" />
        </div>
      </motion.div>

      {/* Sponsors */}
      {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto pt-3 w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8 grayscale">
              <img src={RedBull} alt="Redbull" />
              <img src={Forbes} alt="Forbes" />
              <img src={Fortune} alt="Fortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Home;
