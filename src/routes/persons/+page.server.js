import * as api from '$lib/script/api';
import { base_endpoint } from '$lib/app/env.js';
import { API_PATHS } from '$lib/config';



async function getPersons() {
  try {
    const { response, json } = await api.get(base_endpoint, API_PATHS.PERSONS, { aud: "aud" });

    if (!response.ok || !Array.isArray(json)) {
      return []; // Always return an array
    }

    return json;
  } catch (error) {
    console.error(`Error fetching persons: ${error.message}`, error);
    return []; // Return an empty array on error
  }
}

export const load = async () => {
  let persons = await getPersons(); // Use 'let' to allow reassignment

  if (persons.length === 0) {
    console.warn('No persons found. Using fallback data.');
    persons = [
      {
        id: 'de393e6a-1c08-4e6e-9aad-0994fcf0d981',
        name: 'Saul Goodman',
        email: 'saul@example.com',
        company: 'Saul Goodman & Associates',
        job: 'Attorney',
      }
    ];
  }

  return {
    persons,
  };
};
