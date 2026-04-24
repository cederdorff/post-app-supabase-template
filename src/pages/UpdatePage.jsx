import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

const URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json",
};

export default function UpdatePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  useEffect(() => {
    async function getPost() {
      // TODO: Fetch one post from Supabase and use it as start values
      // const response = await fetch(`${URL}?id=eq.${id}`, { headers });
      // const data = await response.json();
      // setImage(data[0].image);
      // setCaption(data[0].caption);
    }

    getPost();
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();

    // TODO: Send a PATCH request to Supabase
    // await fetch(`${URL}?id=eq.${id}`, {
    //   method: "PATCH",
    //   headers,
    //   body: JSON.stringify({
    //     image: image.trim(),
    //     caption: caption.trim(),
    //   }),
    // });

    // TODO: Navigate back to the detail page after saving
    // navigate(`/posts/${id}`);
  }

  return (
    <main className="app">
      <h1 className="page-title">Update Post</h1>

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
            {/* TODO: Make the image field controlled and show preview */}
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
