import { Dispatch, SetStateAction } from "react";
import { Input } from "../../components/ui/input";
import { CloudUpload, Trash } from "lucide-react";
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

  const handleImageRemove = (e: React.MouseEvent<HTMLDivElement>, url: string) => {
    e.preventDefault()

    setImagesLinks((prev) => prev.filter((link) => link != url))
  }

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
            {
              imagesLinks?.map((imageUrl, idx) => (
                <div key={idx} className="relative group z-50">
                  <img src={imageUrl} className="w-16 h-20 object-cover rounded-sm" />
                  <div
                    className="w-full h-full bg-accent-foreground/60 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-sm"
                    onClick={(e) => handleImageRemove(e, imageUrl)}
                  >
                    <Trash size={24} color="#ffffff" />
                  </div>
                </div>
              ))
            }
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
