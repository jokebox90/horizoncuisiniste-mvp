import dynamic from "next/dynamic";
import {
  useState,
  createContext,
  useContext,
  ReactNode,
  MouseEventHandler
} from "react";
import Button from "@/components/Button/Button";

interface CalendlyPopUpContextType {
  isCalendlyPopUpOpen: boolean;
  openCalendlyPopUp?: () => void;
  closeCalendlyPopUp?: () => void;
}

const CalendlyPopUpContext = createContext<CalendlyPopUpContextType>({
  isCalendlyPopUpOpen: false,
});

interface CalendlyPopUpProviderProps {
  children: ReactNode[] | ReactNode;
}

export const CalendlyPopUpProvider = ({
  children,
}: CalendlyPopUpProviderProps) => {
  const [isCalendlyPopUpOpen, setIsCalendlyPopUpOpen] = useState(false);

  const openCalendlyPopUp = () => setIsCalendlyPopUpOpen(true);
  const closeCalendlyPopUp = () => setIsCalendlyPopUpOpen(false);

  return (
    <CalendlyPopUpContext.Provider
      value={{ isCalendlyPopUpOpen, openCalendlyPopUp, closeCalendlyPopUp }}
    >
      {children}
    </CalendlyPopUpContext.Provider>
  );
};

export const useCalendlyPopUpContext = () => useContext(CalendlyPopUpContext);

interface CalendlyPopUpToggleButtonProps {
  children: ReactNode[] | ReactNode;
}

export function CalendlyPopUpToggleButton({
  children,
}: CalendlyPopUpToggleButtonProps) {
  const { isCalendlyPopUpOpen, openCalendlyPopUp, closeCalendlyPopUp } =
    useCalendlyPopUpContext();

  return (
    <Button
      onClick={
        (isCalendlyPopUpOpen
          ? closeCalendlyPopUp
          : openCalendlyPopUp) as MouseEventHandler
      }
    >
      {children}
    </Button>
  );
}

const CalendlyPopUpBase = dynamic(
  () => import("react-calendly").then((mod) => mod.PopupModal),
  {
    ssr: false,
  }
);

export function CalendlyPopUp() {
  const { isCalendlyPopUpOpen, closeCalendlyPopUp } = useCalendlyPopUpContext();
  return (
    <CalendlyPopUpBase
      url={process.env.NEXT_PUBLIC_CALENDLY_EVENT_URL as string}
      rootElement={
        (typeof window !== "undefined"
          ? document.getElementById("__next")
          : null) as HTMLElement
      }
      onModalClose={closeCalendlyPopUp as MouseEventHandler}
      open={isCalendlyPopUpOpen}
    />
  );
}
