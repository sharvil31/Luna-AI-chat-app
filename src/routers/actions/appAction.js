import { redirect } from 'react-router-dom';
import { getConversationTitle, getAiResponse } from '../../api/geminiAPI';
import { account, databases } from '../../lib/appwrite';
import generateID from '../../utils/generateId';

const userPromptAction = async (formData) => {
  const userPrompt = formData.get('user_prompt');
  const user = await account.get();
  const conversationTitle = await getConversationTitle(userPrompt);
  let conversation = null;

  try {
    conversation = await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'conversations',
      generateID(),
      {
        title: conversationTitle,
        user_id: user.$id,
      },
    );
  } catch (error) {
    console.log(`Error creating conversation: ${error.message}`);
  }

  const aiResponse = await getAiResponse(userPrompt);

  try {
    await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'chats',
      generateID(),
      {
        user_prompt: userPrompt,
        ai_response: aiResponse,
        conversation: conversation.$id,
      },
    );
  } catch (error) {
    console.log('Error generating chat: ', error.message);
  }

  return redirect(`/${conversation.$id}`);
};

const conversationAction = async (formData) => {
  const conversationId = formData.get("conversation_id");
  const conversationTitle = formData.get("conversation_title");

  try {
    await databases.deleteDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      "conversations",
      conversationId
    );
    return { conversationTitle };
  } catch (error) {
    console.log("Error deleting conversation: ", error.message);
  }
}

const appAction = async ({ request }) => {
  const formData = await request.formData();
  const requestType = formData.get('request_type');

  if (requestType === 'user_prompt') {
    return await userPromptAction(formData);
  }
  
  if (requestType === 'delete_conversation') {
    return await conversationAction(formData);
  }
};

export default appAction;
