"use client"

import React from "react";
import DropdownButton from "./DropdownButton";
import styles from "../../page.module.scss";
import clsx from "clsx";
import { Pacifico } from "@next/font/google";

const pacifico = Pacifico({ weight: "400", subsets: ["vietnamese"] });

type Props = {};

export const Sidebar = (props: Props) => {
  return (
    <div className={styles["app-sidebar"]}>
      <h4 className={clsx(styles["app-sidebar--title"], pacifico.className)}>HUY</h4>
      {/* use dropdown with custom render dropdownitem */}
      <DropdownButton />
    </div>
  );
};
