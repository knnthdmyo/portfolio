import { FunctionComponent } from "react";

interface TagProps {
  name: string;
}

const Tag: FunctionComponent<TagProps> = ({ name }) => {
  return (
    <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-2 border-1 bg-gray-200 text-gray-700 gap-1 rounded-full">
      {name}
    </div>
  );
};

export default Tag;
