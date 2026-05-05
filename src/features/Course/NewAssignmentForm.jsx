export default function NewAssignmentForm() {
  return (
    <form action="">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" value="Example title" />

      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        value="Example description"
      />

      <label htmlFor="">Assignment Type</label>
      <input type="radio" name="assignment-type" id="value1" />
      <label htmlFor="value1">Value1</label>
      <input type="radio" name="assignment-type" id="value2" />
      <label htmlFor="value1">Value2</label>
      <input type="radio" name="assignment-type" id="value3" />
      <label htmlFor="value1">Value3</label>

      <label htmlFor="points">Highest points</label>
      <input type="number" name="points" id="points" value="100" />

      <label htmlFor="due-date">Due Date</label>
      <input type="date" name="due-date" id="due-date" />
      <label htmlFor="available-from">Available From</label>
      <input type="date" name="available-from" id="available-from" />
      <label htmlFor="available-until">Available Until</label>
      <input type="date" name="available-until" id="available-until" />

      <label htmlFor="">Submission Type</label>
      <input type="checkbox" name="submission-type" id="link" />
      <label htmlFor="submission-type">Link</label>
      <input type="checkbox" name="submission-type" id="file" />
      <label htmlFor="submission-type">File</label>
      <input type="checkbox" name="submission-type" id="text" />
      <label htmlFor="submission-type">Text</label>

      <label htmlFor="">Published?</label>
      <input type="radio" name="published" id="true" />
      <label htmlFor="true">Yes</label>
      <input type="radio" name="published" id="false" />
      <label htmlFor="false">No</label>

      <label htmlFor="instructions">Instructions</label>
      <textarea name="instructions" id="instructions" value="instructions" />

      <button>Create Assignment</button>
    </form>
  );
}
