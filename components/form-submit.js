'use client';
import { useFormStatus } from "react-dom";

export default function FormSubmit() {
  const { pending } = useFormStatus();

  if (pending) {
    return <p>Submitting...</p>;
  }

  return <>
           <button type="reset">Reset</button>
           <button>Create Post</button>
</>;
}