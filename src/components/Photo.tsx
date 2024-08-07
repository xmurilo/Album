import { FunctionComponent } from "react";

interface PhotoProps {
  data: {
    urls: {
      small: string;
    };
    alt_description: string;
  };
}

const Photo: FunctionComponent<PhotoProps> = ({ data }) => {
  return (
    <div className="photo">
      <img src={data.urls.small} alt={data.alt_description} />
    </div>
  );
};

export default Photo;
