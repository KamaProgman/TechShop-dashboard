import { Dispatch, SetStateAction } from "react";
import { Input } from "../../components/ui/input";
import { CloudUpload } from "lucide-react";
import { uploadImages } from "../../lib/actions";

interface props {
  register: any;
  setImagesLinks: Dispatch<SetStateAction<string[]>>;
  imagesLinks: string[];
}

const FileUpload = ({ register, setImagesLinks, imagesLinks }: props) => {
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newLinks = await uploadImages(files);

      setImagesLinks((prevLinks) => [...prevLinks, ...newLinks]);
    }
  };

  return (
    <div className="flex-1">
      <label
        htmlFor="images"
        className="flex flex-col items-center justify-center p-2 mt-1 text-center border-2 border-dashed border-[rgb(204,207,211)] rounded-lg cursor-pointer transition duration-300 hover:border-[#85858a]"
      >
        <CloudUpload size={24} className="mb-2" />
        {!imagesLinks.length ? (
          <>
            <span className="mb-1 font-medium">Выберите файлы</span>
            <span className="text-sm text-[10px] text-[#6E7076]">
              JPG, JPEG или PNG до 5 MB
            </span>
          </>
        ) : (
          <div className="w-full flex space-x-2 overflow-y-scroll">
            {imagesLinks?.map((imageUrl, idx) => (
              <img
                key={idx}
                src={imageUrl}
                className="w-12 h-16 object-cover"
              />
            ))}
          </div>
        )}
      </label>
      <Input
        type="file"
        {...register("images")}
        id="images"
        accept=".jpg, .jpeg, .png"
        className="absolute w-full opacity-0 cursor-pointer"
        multiple={true}
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default FileUpload;
