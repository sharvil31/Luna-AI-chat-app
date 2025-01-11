import { motion } from 'framer-motion';
import PageTitle from '../components/PageTitle';
import { useLoaderData, useLocation } from 'react-router-dom';
import UserPrompt from '../components/UserPrompt';
import AiResponse from '../components/AiResponse';
import PromptPreloader from '../components/PromptPreloader';
import { usePromptPreloader } from '../hooks/usePromptPreloader';

const Conversation = () => {
  const {
    conversation: { title, chats },
  } = useLoaderData() || {};

  const { promptPreloaderValue } = usePromptPreloader();

  const loaction = useLocation();

  return (
    <>
      <PageTitle title={`${title} | Luna`} />

      <motion.div
        className='max-w-[700px] mx-auto !will-change-auto'
        initial={!loaction.state?._isRedirect && { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.05,
          ease: 'easeOut',
        }}
      >
        {chats.map((chat) => (
          <div key={chat.$id}>
            <UserPrompt text={chat.user_prompt} />
            <AiResponse aiResponse={chat.ai_response} />
          </div>
        ))}
      </motion.div>

      {promptPreloaderValue && (
        <PromptPreloader promptValue={promptPreloaderValue} />
      )}
    </>
  );
};

export default Conversation;
