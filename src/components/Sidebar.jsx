import React from 'react';
import Logo from './Logo';
import { ExtendedFab, IconBtn } from './Button';
import { NavLink, useLoaderData, useParams, useSubmit } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import deleteConversation from '../utils/deleteConversation';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const {
    conversations: { documents: conversationData },
  } = useLoaderData() || {};

  const { conversationId } = useParams();
  const submit = useSubmit();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={`sidebar ${isSidebarOpen ? 'active' : ''}`}
      >
        <div className='sidebar-inner'>
          <div className='h-16 grid items-center px-4 mb-4'>
            <Logo />
          </div>

          <ExtendedFab
            href='/'
            text='New chat'
            classes='mb-4'
            onClick={toggleSidebar}
            disabled={!conversationId}
          />

          <div className='overflow-y-auto -me-2 pe-1'>
            <p className='text-sm h-9 grid items-center px-4'>Recent</p>

            <nav>
              {conversationData.map((item) => (
                <div
                  key={item.$id}
                  className='relative group'
                >
                  <NavLink
                    to={item.$id}
                    className='nav-link'
                    title={item.title}
                    onClick={toggleSidebar}
                  >
                    <span className='material-symbols-rounded icon-small'>
                      chat_bubble
                    </span>

                    <span className='truncate'>{item.title}</span>
                    <div className='state-layer'></div>
                  </NavLink>

                  <IconBtn
                    icon='delete'
                    size='small'
                    title='Delete'
                    classes='absolute top-1/2 right-1.5 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 group:focus-within:opacity-100 hidden lg:grid'
                    onClick={() => {
                      deleteConversation({
                        id: item.$id,
                        title: item.title,
                        submit,
                      });
                    }}
                  />
                </div>
              ))}
            </nav>
          </div>

          <div className='mt-4 h-14 px-4 grid items-center text-sm font-medium leading-5 tracking-[0.1px] text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant border-t border-light-surfaceContainerHigh dark:border-dark-surfaceContainerHigh truncate'>
            &copy; 2025 Sharvil31
          </div>
        </div>
      </motion.div>

      <div
        onClick={toggleSidebar}
        className={`overlay ${isSidebarOpen ? 'active' : ''}`}
      ></div>
    </>
  );
};

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool,
  toggleSidebar: PropTypes.func,
};

export default Sidebar;
