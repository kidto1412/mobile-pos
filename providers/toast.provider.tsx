// providers/ToastProvider.tsx
import { Toast, ToastTitle, useToast } from "@/components/ui/toast";
import { createContext, useContext } from "react";

interface ToastMessageContextType {
  showToast: (title: string, type?: "success" | "error") => void;
}

const ToastMessageContext = createContext<ToastMessageContextType>({
  showToast: () => {},
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const toaster = useToast();

  const showToast = (title: string, type: "success" | "error" = "success") => {
    toaster.show({
      placement: "top",
      duration: 2500,
      render: () => (
        <Toast
          action={type}
          variant="solid"
          className="px-4 py-3 rounded-xl shadow-md mt-10"
        >
          <ToastTitle>{title}</ToastTitle>
        </Toast>
      ),
    });
  };

  return (
    <ToastMessageContext.Provider value={{ showToast }}>
      {children}
    </ToastMessageContext.Provider>
  );
}

export function useToastMessage() {
  return useContext(ToastMessageContext);
}
