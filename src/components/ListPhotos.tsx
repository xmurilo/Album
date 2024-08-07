import { FunctionComponent } from "react";
import Photo from "./Photo";

interface PhotoData {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
}

interface PhotosProps {
  photos: PhotoData[];
}

const ListPhotos: FunctionComponent<PhotosProps> = ({ photos }) => {
  return (
    <div className="album">
      {photos.map(photo => (
        <Photo key={photo.id} data={photo} />
      ))}
    </div>
  );
};

export default ListPhotos;
