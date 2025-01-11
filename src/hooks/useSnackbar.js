
import { useContext } from "react";
import { SnackbarContext } from "../contexts/SnackBarContext";

export const useSnackbar = () => useContext(SnackbarContext);