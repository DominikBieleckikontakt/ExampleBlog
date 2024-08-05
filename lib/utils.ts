import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r =
      (crypto.getRandomValues(new Uint8Array(1))[0] & 0x0f) |
      (c === "x" ? 0 : 0x8);
    return r.toString(16);
  });
}
