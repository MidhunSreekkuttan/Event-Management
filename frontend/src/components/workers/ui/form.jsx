import { createContext, useContext, useId } from "react";

/* =====================
   FORM CONTEXT
===================== */

const FormItemContext = createContext(null);

const Form = ({ onSubmit, children, className = "" }) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
};

/* =====================
   FORM ITEM
===================== */

const FormItem = ({ children, className = "" }) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={`space-y-2 ${className}`}>
        {children}
      </div>
    </FormItemContext.Provider>
  );
};

/* =====================
   LABEL
===================== */

const FormLabel = ({ children, error, className = "" }) => {
  const ctx = useContext(FormItemContext);

  return (
    <label
      htmlFor={ctx?.id}
      className={`text-sm font-medium ${
        error ? "text-red-600" : "text-gray-700"
      } ${className}`}
    >
      {children}
    </label>
  );
};

/* =====================
   CONTROL
===================== */

const FormControl = ({ children }) => {
  const ctx = useContext(FormItemContext);

  return (
    <div>
      {children &&
        typeof children === "function"
        ? children(ctx?.id)
        : children}
    </div>
  );
};

/* =====================
   DESCRIPTION
===================== */

const FormDescription = ({ children, className = "" }) => (
  <p className={`text-sm text-gray-500 ${className}`}>
    {children}
  </p>
);

/* =====================
   ERROR MESSAGE
===================== */

const FormMessage = ({ error, className = "" }) => {
  if (!error) return null;

  return (
    <p className={`text-sm font-medium text-red-600 ${className}`}>
      {error}
    </p>
  );
};

export {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
};