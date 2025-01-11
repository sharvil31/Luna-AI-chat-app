import React, { useEffect } from "react";
import PageTitle from "../components/PageTitle";
import { Form, useNavigation, useActionData } from "react-router-dom";
import TextField from "../components/TextField";
import bannerImg from "../assets/banner.webp";
import { Button } from "../components/Button";
import { CircularProgress, LinearProgress } from "../components/Progress";
import { useSnackbar } from "../hooks/useSnackbar";
import { AnimatePresence } from "framer-motion";
import Logo from "../components/Logo";

const ResetPassword = () => {
  const error = useActionData();
  const navigation = useNavigation();

  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (error?.message) {
      showSnackbar({ message: error.message, type: "error" });
    }
  }, [error, showSnackbar]);

  return (
    <>
      <PageTitle title='Set new password' />
      <div className='relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-4'>

          <Logo classes="mb-auto mx-auto lg:mx-0" />

          <div className='flex flex-col gap-2 max-w-[480px] w-full mx-auto'>
            <h2 className='text-4xl leading-10 font-semibold text-light-onBackground dark:text-dark-onBackground text-center'>
              Set a new password
            </h2>
            <p className='tracking-[0.5px] leading-6 text-[#3F4945] dark:text-[#BFC9C4] mt-1 mb-5 text-center px-2'>
              Please choose a password that hasn't been used before. Must be
              atleast 8 characters long.
            </p>

            <Form
              method='POST'
              className='grid grid-cols-1 gap-4'
            >
              <TextField
                type='password'
                name='password'
                label='Password'
                placeholder='Enter your password'
                fieldClasses='tracking-[5px] placeholder:tracking-normal'
                required={true}
                autoFocus={true}
              />

              <Button
                type='submit'
                disabled={navigation.state === "submitting"}
              >
                {/* <CircularProgress size='small' /> */}
                {navigation.state === "submitting" ? (
                  <CircularProgress size='small' />
                ) : (
                  "Reset password"
                )}
              </Button>
            </Form>
          </div>

          <p className='mt-auto mx-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-sm leading-5 tracking-[0.25px] lg:mx-0'>
            &copy; 2025 sharvil31. All rights reserved.
          </p>
        </div>

        <div className='hidden img-box lg:block lg:relative lg:rounded-2xl lg:overflow-hidden'>
          <img
            src={bannerImg}
            alt=''
            className='img-cover'
          />

          <p className='absolute bottom-10 left-12 right-12 z-10 text-[57px] tracking-[-0.25px] leading-tight font-semibold text-right text-light-onSurface drop-shadow-sm 2xl:text-[72px]'>
            Chat with Luna to empower your thoughts
          </p>
        </div>
      </div>

      <AnimatePresence>
        {navigation.state === "loading" && (
          <LinearProgress classes='absolute top-0 left-0 right-0' />
        )}
      </AnimatePresence>
    </>
  );
};

export default ResetPassword;
