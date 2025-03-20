import { ReactElement } from "react";
import styles from "./comments-item.module.scss";
import { Comments } from "../../interfaces/comments";
import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
  item: Comments;
}

function CommentsItem({ item }: Props): ReactElement {
  return (
    <div className={styles.comments_item}>
      <div className={styles.comments_item__author__image}>
        <img src={`../../assets/image/${item.image}`} />
      </div>
      <div className={styles.comments_item__quote}>
        <Icon
          icon="material-symbols-light:format-quote-outline"
          width="40"
          height="40"
        />
      </div>
      <div className={styles.comments_item__text}>{item.text}</div>
      <div className={styles.comments_item__author__name}>{item.author}</div>
    </div>
  );
}

export default CommentsItem;
