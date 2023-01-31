import { HeartIcon, SpinnerIcon } from "./icons";
import { useState } from "react";

import "./like-button.css";

export default function LikeButton({
  url,
  requestApi = fetch,
}: {
  url: string;
  requestApi?: (url: string, options: any) => Promise<any>;
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div>
      <button
        disabled={isLoading}
        className={isLiked ? "liked" : "default"}
        onClick={async () => {
          try {
            setIsLoading(true);
            const response = await requestApi(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                action: isLiked ? "unlike" : "like",
              }),
            });
            setIsLoading(false);
            if (response.ok) {
              setIsLiked(!isLiked);
              setErrorMessage("");
            }
          } catch (error: any) {
            setErrorMessage(error.error);
          } finally {
            setIsLoading(false);
          }
        }}
      >
        {isLoading ? <SpinnerIcon /> : <HeartIcon />} Like
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
