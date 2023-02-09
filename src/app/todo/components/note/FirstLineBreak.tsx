"use client"
import React, { useState, useEffect } from 'react';
import styles from "./note.module.scss";

type Props = {
    text: string
}

const FirstLineBreak = ({ text }: Props) => {
  const [formattedText, setFormattedText] = useState(text);

  useEffect(() => {
    const firstLine = formattedText.substr(0, formattedText.indexOf("\n"));
    if (firstLine.length > 150) {
      setFormattedText(firstLine + "\n" + formattedText.substr(formattedText.indexOf("\n") + 1));
    } else {
      setFormattedText(formattedText);
    }
  }, [formattedText]);

  return (
    <textarea value={formattedText} className={styles["note-input"]} />
  );
};

export default FirstLineBreak;