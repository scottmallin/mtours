import { createDestination } from "@/app/actions/destination";

export default function NewDestinationForm() {
  return (
    <form className="new-destination-form" action={createDestination}>
      <input
        type="text"
        name="title"
        id="destination_title"
        placeholder="Title"
      />
      <textarea
        name="description"
        id="destination_description"
        placeholder="Description"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
