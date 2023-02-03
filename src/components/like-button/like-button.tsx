import { HeartIcon, SpinnerIcon } from "./icons";
import { useState } from "react";

import classes from "./like-button.module.css";

export default function LikeButton({
  url,
  requestApi = fetch,
  initialLikedState = false,
}: {
  url: string;
  requestApi?: (url: string, options: any) => Promise<any>;
  initialLikedState?: boolean;
}) {
  const [isLiked, setIsLiked] = useState(initialLikedState);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div>
      <button
        disabled={isLoading}
        className={`${classes.btn} ${
          isLiked ? classes.liked : classes.deafult
        }`}
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
        {isLoading ? <SpinnerIcon /> : <HeartIcon />}{" "}
        {isLiked ? "Liked" : "Like"}
      </button>
      {errorMessage && (
        <p className={classes["error-message"]}>{errorMessage}</p>
      )}
    </div>
  );
}
