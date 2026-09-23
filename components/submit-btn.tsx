import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useTranslations } from 'next-intl';

export default function SubmitBtn({ loading }: { loading: boolean }) {
  const { pending } = useFormStatus();
  const translation = useTranslations();

  return (
    <button
      type="submit"
      className="group w-full h-14 bg-white dark:bg-transparent border border-transparent dark:border-slate-800 text-primary hover:text-white rounded-2xl flex items-center justify-center gap-3 font-bold hover:bg-[#62adb7] transition-all"
      disabled={loading}
    >
      {loading ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {translation('Send')}{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
