interface CardProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
}

const Card = ({ title, description, children }: CardProps) => {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-md box-border p-2  rounded-lg min-w-32">
      <div className="relative overflow-hidden rounded-md">{children}</div>
      <div className="p-4">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">{title}</h6>
        <p className="text-slate-600 leading-normal font-light overflow-auto h-38">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
