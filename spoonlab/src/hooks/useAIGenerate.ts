"use client";

import { useState, useCallback } from "react";
import type { AIGenerateInput, AIRecipeOutput } from "@/lib/ai";

interface GenerateState {
  status: "idle" | "loading" | "success" | "error";
  recipe: AIRecipeOutput | null;
  error: string | null;
  usage: { remaining: number; limit: number; tier: string } | null;
}

export function useAIGenerate() {
  const [state, setState] = useState<GenerateState>({
    status: "idle",
    recipe: null,
    error: null,
    usage: null,
  });

  const generate = useCallback(async (input: AIGenerateInput) => {
    setState({ status: "loading", recipe: null, error: null, usage: null });

    try {
      const res = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      const data = await res.json();

      if (!res.ok) {
        setState({
          status: "error",
          recipe: null,
          error: data.error ?? "Generation failed",
          usage: data.usage ?? null,
        });
        return null;
      }

      setState({
        status: "success",
        recipe: data.recipe,
        error: null,
        usage: data.usage,
      });
      return data.recipe as AIRecipeOutput;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Network error. Please try again.";
      setState({ status: "error", recipe: null, error: message, usage: null });
      return null;
    }
  }, []);

  const reset = useCallback(() => {
    setState({ status: "idle", recipe: null, error: null, usage: null });
  }, []);

  return { ...state, generate, reset };
}
