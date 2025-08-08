/**
 * - Зберігає стан count
 * - Збільшує поточне значення count при onClick
 * - Рендериться у App
 */

import { useState } from "react";

interface ClickCounterProps {
  clicks: number;
  onClick: () => void;
}

export default function ClickCounter({ clicks, onClick }: ClickCounterProps) {
  return <button onClick={onClick}>Clicks: {clicks}</button>;
}
