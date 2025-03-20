import * as api from '$lib/script/api';
import { base_endpoint } from '$lib/app/env.js';
import { API_PATHS } from '$lib/config';

async function getPersons() {
  try {
    const { response, json } = await api.get(base_endpoint, API_PATHS.PERSONS, { aud: "aud" });

    if (!response.ok) {
      console.error(`Failed to fetch persons. Status: ${response.status}`);
      throw new Error(`API error: ${response.status}`);
    }

    return Array.isArray(json) ? json : []; // Always return an array
  } catch (error) {
    console.error(`Error fetching persons: ${error.message}`, error);
    return [
      {
        id: 'de393e6a-1c08-4e6e-9aad-0994fcf0d981',
        name: 'Saul Goodman',
        email: 'saul@example.com',
        company: 'Saul Goodman & Associates',
        job: 'Attorney',
      },
    ]; // Provide a default fallback directly
  }
}

export const load = async () => {
  const persons = await getPersons();

  return {
    persons,
  };
};
