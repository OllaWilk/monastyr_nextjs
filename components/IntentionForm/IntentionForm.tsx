"use client";

export const IntentionForm = () => {
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("intention");
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input type="text" name="website" />

      <label htmlFor="intention">Treść intencji</label>
      <textarea
        id="intention"
        placeholder="Napisz swoją intencję…"
        value={'intention'}
      />

      <button type="submit">"Wyślij intencję"</button>
    </form>
  );
};
