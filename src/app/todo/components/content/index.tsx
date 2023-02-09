"use client"

import React from "react";
import styles from "../../page.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import { Poppins } from "@next/font/google";
import clsx from "clsx";
import { NoteItem } from "../note/NoteItem";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});
type Props = {};

export const Content = (props: Props) => {
  return (
    <div className={styles["app-content"]}>
      <div className={styles["app-content--search"]}>
        <SearchOutlined className={styles["app-content--search-icon"]} />
        <input 
          className={clsx(styles["app-content--search-input"], poppins.className)} 
          type="text" 
          placeholder="Search..."
        />
      </div>
      <h1 className={styles["app-content--title"]}>Notes</h1>
      <div className={styles["app-content--grid"]}>
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
      </div>
    </div>
  );
};
