import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IProduct, ProductFormValues } from "../../types/product";
import ProductsApi from "../../api/products";
import { getSubcategories, useCategories } from "../../lib/hooks/categories";
import { ICategory } from "../../types/categories";
import { FirestoreTransformer } from "../../utils/transformData";
import FileUpload from "./FileUpload";
import { useEffect, useState } from "react";
import { IdType } from "../../types";
import { useProductById } from "../../lib/hooks/products";

interface props {
  type: "create" | "edit"
  productId?: IdType
  handleClose: () => void
}

const ProductForm = ({ type, handleClose, productId }: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProductFormValues>();
  const queryClient = useQueryClient();
  const { data: categories } = useCategories();
  const subcategories = getSubcategories(categories ?? []);
  const [imagesLinks, setImagesLinks] = useState<string[]>([]);
  const { data: product } = useProductById(productId ?? "")

  useEffect(() => {
    if (type == "edit" && product) {
      setValue("title", product?.title);
      setValue("description", product?.description);
      setValue("color", product?.attributes?.color);
      setValue("specific", product?.attributes.specific ? product?.attributes.specific.join(", ") : "");
      setValue("price", product?.price);
      setValue("quantity", product?.quantity);
      setValue("category", product?.category?.title);
      setImagesLinks(product?.images_links || []);
    }
  }, [product, type]);

  const actionMutation = useMutation({
    mutationFn: (newProduct: Partial<IProduct>) => {
      const transformedData =
        FirestoreTransformer.toFirestoreFormat(newProduct);

      return type == "create"
        ? ProductsApi.addNewProduct(transformedData)
        : ProductsApi.updateProductById(productId!, transformedData)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });

      handleClose()
      console.log("submit happened");
    },
    onError: (error) => {
      console.error("Failed to add product:", error);
    },
  });

  const handleFormSubmit: SubmitHandler<ProductFormValues> = async (
    data: ProductFormValues
  ) => {
    const res = categories
      ?.flatMap((category: ICategory) => category.subcategories)
      .find((subcategory) => subcategory.title === data.category);

    const newProduct: Partial<IProduct> = {
      title: data.title,
      description: data.description,
      category: {
        id: res?.id ?? "",
        title: res?.title ?? "",
      },
      attributes: {
        color: data.color,
        specific: [data.specific],
      },
      images_links: imagesLinks,
      price: data.price,
      quantity: data.quantity,
    };

    actionMutation.mutate(newProduct);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="title" className="block mb-1">
            Title
          </label>
          <Input
            {...register("title", { required: "Title is required" })}
            placeholder="Macbook Air 13 M2"
            className="w-full"
          />
          {errors.title && (
            <span className="text-red-600 text-sm">{errors.title.message}</span>
          )}
        </div>
        <div className="flex-1">
          <label htmlFor="description" className="block mb-1">
            Description
          </label>
          <Input
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="some text"
            className="w-full"
          />
          {errors.description && (
            <span className="text-red-600 text-sm">
              {errors.description.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="color" className="block mb-1">
            Color
          </label>
          <Input
            {...register("color")}
            placeholder="product color"
            className="w-full"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="specific" className="block mb-1">
            Specific
          </label>
          <Input
            {...register("specific")}
            placeholder="8-Core CPU, 256GB SSD..."
            className="w-full"
          />
        </div>
      </div>

      <div className="flex-1">
        <label htmlFor="category" className="block mb-1">
          Category
        </label>
        <Select
          onValueChange={(value) => setValue("category", value)}
          value={product?.category?.title}>
          <SelectTrigger>
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent className="max-h-52 overflow-y-auto">
            {subcategories.map((subcategory) => (
              <SelectItem key={subcategory} value={`${subcategory}`}>
                {subcategory}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <FileUpload
          register={register}
          setImagesLinks={setImagesLinks}
          imagesLinks={imagesLinks}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="price" className="block mb-1">
            Price
          </label>
          <Input
            type="number"
            {...register("price", { required: "Price is required" })}
            placeholder="product price"
            className="w-full"
          />
          {errors.price && (
            <span className="text-red-600">{errors.price.message}</span>
          )}
        </div>
        <div className="flex-1">
          <label htmlFor="quantity" className="block mb-1">
            Quantity
          </label>
          <Input
            type="number"
            {...register("quantity", { required: "Quantity is required" })}
            placeholder="product quantity"
            className="w-full"
          />
          {errors.quantity && (
            <span className="text-red-600">{errors.quantity.message}</span>
          )}
        </div>
      </div>

      <Button type="submit" className="mt-4 ">
        {actionMutation.isPending ? "Loading..." : `${type == "create" ? "Add" : "Edit"} product`}

      </Button>
    </form>
  );
};

export default ProductForm;
