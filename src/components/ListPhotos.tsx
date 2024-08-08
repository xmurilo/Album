import { FunctionComponent } from "react";
import Photo from "./Photo";

export interface PhotoData {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface PhotosProps {
  photos: PhotoData[];
  setAmplifiedPhoto: (data: PhotoData) => void;
}

const ListPhotos: FunctionComponent<PhotosProps> = ({ photos, setAmplifiedPhoto }) => {
  return (
    <div className="album">
      {photos.map(photo => (
        <Photo key={photo.id} data={photo} setAmplifiedPhoto={setAmplifiedPhoto} />
      ))}
    </div>
  );
};

export default ListPhotos;
