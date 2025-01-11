import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/register";
import registerAction from "./actions/registerAction";
import Login from "../pages/Login";
import loginAction from "./actions/loginAction";
import registerLoader from "./loaders/registerLoader";
import loginLoader from "./loaders/loginLoader";
import ResetLink from "../pages/ResetLink";
import resetLinkAction from "./actions/resetLinkAction";
import ResetPassword from "../pages/ResetPassword";
import resetPasswordAction from "./actions/resetPasswordAction";
import resetLinkLoader from "./loaders/resetLinkLoader";
import resetPasswordLoader from "./loaders/resetPasswordLoader";
import appLoader from "./loaders/appLoader";
import appAction from "./actions/appAction";
import Conversation from "../pages/Conversation";
import conversationLoader from "./loaders/conversationLoader";
import conversationAction from "./actions/conversationAction";
import ConversationError from "../pages/ConversationError";
import RootError from "../pages/RootError";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        loader: appLoader,
        action: appAction,
        errorElement: <RootError />,
        children: [
            {
                path: "/:conversationId",
                element: <Conversation />,
                loader: conversationLoader,
                action: conversationAction,
                errorElement: <ConversationError />,
            }
        ]
    },

    {
        path: "/register",
        element: <Register />,
        loader: registerLoader,
        action: registerAction,
    },

    {
        path: "/login",
        element: <Login />,
        loader: loginLoader,
        action: loginAction,
    },

    {
        path: "/reset-link",
        element: <ResetLink />,
        loader: resetLinkLoader,
        action: resetLinkAction,
    },

    {
        path: "/reset-password",
        element: <ResetPassword />,
        loader: resetPasswordLoader,
        action: resetPasswordAction,
    }
]);

export default router;