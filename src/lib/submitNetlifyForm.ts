/**
 * POST to Netlify Forms static endpoint (OpenNext / Next on Netlify).
 * @see https://opennext.js.org/netlify/forms
 */
export async function submitNetlifyForm(form: HTMLFormElement): Promise<Response> {
  const formData = new FormData(form);
  const body = new URLSearchParams();
  formData.forEach((value, key) => {
    body.append(key, typeof value === "string" ? value : value.name);
  });
  return fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
}
