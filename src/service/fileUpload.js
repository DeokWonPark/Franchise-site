class FileUpload{
    async uploadFile(file){
        const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLINT_ID}/auto/upload`;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "zfhffhko");

        const response = await fetch(url, {
            method: "POST",
            body: formData
        });
        return await response.json();
    }
}
export default FileUpload;