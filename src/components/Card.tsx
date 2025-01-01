import { ReactNode } from "react";

interface CardProps {
  buttonText?: string | ReactNode;
  children?: React.ReactNode;
  title?: string;
  description?: string;
}

const Card = ({ title, buttonText, description, children }: CardProps) => {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-md box-border p-2  rounded-lg min-w-32">
      <div className="relative overflow-hidden rounded-md">{children}</div>
      <div className="p-4">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">{title}</h6>
        <p className="text-slate-600 leading-normal font-light overflow-auto h-38">
          {description}
        </p>
      </div>
      {buttonText && (
        <div className="px-4 pb-4 pt-0 mt-2 flex justify-end">
          <button
            className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;