import Butter from "buttercms";

export let butterCMS = undefined;
try {
  const apiKey = '7cb2bc6dd18e8895e6c3945da0e05e9cef3b0f92';
  const preview = import.meta.env.VITE_APP_BUTTER_CMS_PREVIEW !== "false";
  butterCMS = Butter(apiKey, preview);
} catch (error) {
  console.error(error);
}
