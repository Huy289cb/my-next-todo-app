"use client"

import { Poppins } from "@next/font/google";
import clsx from "clsx";
import styles from "./page.module.scss";
import { Sidebar } from "./components/sidebar";
import { Content } from "./components/content";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={clsx(poppins.className, styles["app-container"])}>
      <div className={styles["app-wrapper"]}>
        <Sidebar />
        <Content />
      </div>
    </main>
  );
}
