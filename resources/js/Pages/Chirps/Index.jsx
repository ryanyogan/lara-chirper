import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Index({ auth }) {
  const form = useForm({ message: "" });

  const submit = (e) => {
    e.preventDefault();
    form.post(route("chirps.store"), { onSuccess: () => form.reset() });
  };

  return (
    <AuthenticatedLayout>
      <Head title="Chirps" />

      <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <form onSubmit={submit}>
          <textarea
            value={form.data.message}
            placeholder="What is on your mind?"
            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
            onChange={(e) => form.setData("message", e.target.value)}
          ></textarea>
          <InputError message={form.errors.message} className="mt-2" />
          <PrimaryButton className="mt-4" disabled={form.processing}>
            Chirp
          </PrimaryButton>
        </form>
      </div>
    </AuthenticatedLayout>
  );
}