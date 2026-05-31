// components/WaitlistForm.tsx
"use client";

import { useActionState, useEffect, useRef } from "react";
import { joinWaitlist } from "@/actions/waitlist";

const initialState = { success: false, message: "" };

export function WaitlistForm() {
  const [state, action, isPending] = useActionState(joinWaitlist, initialState);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state.success && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [state.success]);

  return (
    <div className="w-full max-w-md mx-auto">
      <form action={action} className="relative">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <input
              ref={inputRef}
              name="email"
              type="email"
              required
              disabled={isPending || state.success}
              placeholder="your@email.com"
              className="
                w-full h-14 px-5
                bg-white/[0.04] border border-white/[0.12]
                rounded-2xl text-[15px] text-white/90 placeholder:text-white/30
                focus:outline-none focus:border-white/30 focus:bg-white/[0.06]
                transition-all duration-200
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            />
          </div>

          <button
            type="submit"
            disabled={isPending || state.success}
            className="
              h-14 px-7 rounded-2xl
              bg-white text-[#080808]
              text-[13px] font-medium tracking-widest uppercase
              hover:bg-white/90 active:scale-[0.98]
              transition-all duration-200
              disabled:opacity-60 disabled:cursor-not-allowed
              whitespace-nowrap flex items-center justify-center gap-2
              min-w-[180px]
            "
          >
            {isPending ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                <span>Joining...</span>
              </>
            ) : state.success ? (
              <>
                <CheckIcon />
                <span>You&apos;re In</span>
              </>
            ) : (
              "Join the Waitlist"
            )}
          </button>
        </div>

        {/* Feedback message */}
        {state.message && (
          <div
            className={`
              mt-4 px-4 py-3 rounded-xl text-sm text-center
              animate-in fade-in slide-in-from-bottom-2 duration-300
              ${
                state.success
                  ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                  : "bg-red-500/10 border border-red-500/20 text-red-400"
              }
            `}
          >
            {state.success ? "✦ " : ""}
            {state.message}
          </div>
        )}
      </form>

      <p className="mt-5 text-center text-[12px] text-white/25 tracking-wide">
        No spam. Ever. Unsubscribe anytime.
      </p>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 3.5L6 10.5L2.5 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
