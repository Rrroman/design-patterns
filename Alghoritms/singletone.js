#!/usr/bin/env ts-node

import { fetch } from "fetch-h2";

// Determine whether the sentiment of text is positive
// Use a web service
async function isPositive(text: string): Promise<boolean> {
  const response = await fetch(`http://text-processing.com/api/sentiment/`, {
    method: "POST",
    body: `text=${text}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const json = await response.json();
  return json.label === "pos";
}



contains(value) {
  if (!this.root) {
    return;
  }

  let temp = this.root;
  while (temp) {
    if (value === temp.value) {
      return true;
    }

    if (value < temp.value) {
      temp = temp.left;
    } else if (value > temp.value) {
      temp = temp.right;
    } else {
      return true;
    }
  }
  return false;
}