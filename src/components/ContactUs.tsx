import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { SelectedPage } from '../constants/types';
import { motion } from 'framer-motion';
import ContactUsPageGrpahic from '../assets/ContactUsPageGraphic.png';

type ContactUsProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: ContactUsProps) => {
  const inputStyles =
    'mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white';

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="basis-3/5 text-3xl font-bold">
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </h1>
          <p className="my-5">
            Reignite your fitness journey with a five-part progressive program
            focused on balance and stability, functional strength, endurance,
            and HIIT. We’ll even help you kick it up a notch by introducing
            fitness accessories to increase your knowledge. Ready to move? We
            know you are.
          </p>
        </motion.div>

        {/* Form & Image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div>
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/a1ya1k2a9@gmail.com"
              method="POST"
            >
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === 'required' && 'This field is required'}
                  {errors.name.type === 'maxLength' &&
                    'Max length is 100 characters'}
                </p>
              )}
              <input
                type="text"
                className={inputStyles}
                placeholder="Name"
                {...register('name', { required: true, maxLength: 100 })}
              />

              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === 'required' && 'This field is required'}
                  {errors.email.type === 'pattern' && 'Invalid Email Format'}
                </p>
              )}
              <input
                type="email"
                className={inputStyles}
                placeholder="Email"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />

              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === 'required' &&
                    'This field is required'}
                  {errors.message.type === 'pattern' &&
                    'Max Length is 2000 characters'}
                </p>
              )}
              <textarea
                rows={4}
                cols={50}
                className={inputStyles}
                placeholder="Message"
                {...register('message', {
                  required: true,
                  maxLength: 2000,
                })}
              />

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                Submit
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                src={ContactUsPageGrpahic}
                alt="contact us"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
export default ContactUs;
