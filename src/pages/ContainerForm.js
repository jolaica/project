import React, { useState } from "react";
import styles from "@/styles/Container.module.css";

function ContainerForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);

    fetch(
      "https://5d31-2001-4455-16a-4a00-3022-e484-e8b8-a625.ap.ngrok.io/api/blog/",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    document.getElementById("fileInput").click();
  };

  return (
    <form onSubmit={handleSubmit} className={styles["form-container"]}>
      <label htmlFor="title">TITLE</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label htmlFor="content">CONTENT</label>
      <textarea
        id="content"
        name="content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />

      <div className={styles.image_box}>
        {image ? (
          <span>{image.name}</span>
        ) : (
          <span className={styles.no_file}>No file chosen</span>
        )}
        <button
          className={styles.upload}
          type="button"
          id="uploadButton"
          name="uploadButton"
          onClick={handleUpload}
        >
          Upload
        </button>
        <input
          type="file"
          id="fileInput"
          name="fileInput"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>

      <button type="submit">Publish</button>
      <button type="cancel">Cancel</button>
      <button type="draft">Save as draft</button>
    </form>
  );
}

export default ContainerForm;
