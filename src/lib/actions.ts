
export async function uploadImages(files: FileList) {
  const imagePromises = Array.from(files).map(file => {
    if (!file.type.includes("image/jpeg") && !file.type.includes("image/png")) {
      alert("Only JPG and PNG formats are allowed.")
      return Promise.reject(new Error("Invalid file type"))
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File size should not exceed 5MB.")
      return Promise.reject(new Error("File size too large"))
    }

    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
    })
  })
  const result = await Promise.all(imagePromises)

  return result
}