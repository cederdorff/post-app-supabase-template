import { useState } from "react";
import { useNavigate } from "react-router";

const URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json",
};

export default function CreatePage() {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    // TODO: Send a POST request to Supabase
    // await fetch(URL, {
    //   method: "POST",
    //   headers,
    //   body: JSON.stringify({
    //     image: image.trim(),
    //     caption: caption.trim(),
    //   }),
    // });

    // TODO: Navigate back to the homepage after saving
    // navigate("/");
  }

  return (
    <main className="app">
      <h1 className="page-title">Create Post</h1>
      <form className="post-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="image">Image URL</label>
            <input
              id="image"
              name="image"
              placeholder="https://..."
              required
            />
            {/* TODO: Bind the image field to state and show preview */}
          </div>

          <div className="form-field">
            <label htmlFor="caption">Caption *</label>
            <textarea
              id="caption"
              name="caption"
              rows="4"
              placeholder="Write a caption for your post..."
              required
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </main>
  );
}
