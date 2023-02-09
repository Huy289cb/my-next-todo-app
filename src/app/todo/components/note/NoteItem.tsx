"use client";

import React from "react";
import styles from "./note.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import clsx from "clsx";
import FirstLineBreak from "./FirstLineBreak";

type Props = {};

export const NoteItem = (props: Props) => {

  return (
    <div className={styles["note"]}>
      <FirstLineBreak
        text="This is a very long line of text that will wrap at any point if the content exceeds 150 pixels wide. This is the second line of text and it will not wrap."
      />
    </div>
  );
};
