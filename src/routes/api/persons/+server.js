import * as api from '$lib/script/api';  

import { api_endpoint } from '$lib/app/env.js';
import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export const GET = async ({ cookies, request }) => {

 // console.log('request cookies object', cookies.get('jwt'));

  const jwt = cookies.get('jwt');   
  const { response, json } = await api.get(api_endpoint, 'people', {aud: jwt});
 
  if (json.errors) {                

    throw error(response.status, {
          errors: json.errors
    });
  }   
  
  if (response.status !== 200) {
        throw response.error || new Error(`Request failed with status ${response.status}`);
  }

  return new Response(JSON.stringify(json));  

} 

/** @type {import('./$types').RequestHandler} */

export const POST = async ({ cookies, request, locals }) => {

  const jwt = cookies.get('jwt');   
  const data = await request.json();   

  // console.log('post data object', data);  

  const { response, json } = await api.post(api_endpoint,`people/`, data, {aud: jwt} );  

  // console.log('json, response.status', json, response.status);

  if (response.status !== 200 && response.status !== 500) {
    throw response.error || new Error(`Request failed with status ${response.status}, ${json.error}`) ;
  }

  return new Response(JSON.stringify(json));
  
}

/** @type {import('./$types').RequestHandler} */
export const PUT = async ({ cookies, request, locals, url }) => {

  const personId = url.searchParams.get('personId'); 
  const data = await request.json();    
  const { response, json } = await api.put(api_endpoint, `people/${personId}`, data );  

  // console.log('from put method', data, personId);

  // console.log('json, response.status', json, response.status);

  if (response.status !== 200 && response.status !== 501) {
    throw response.error || new Error(`Request failed with status ${response.status}, ${json.error}`) ;
  }

  return new Response(JSON.stringify(json));
}

/** @type {import('./$types').RequestHandler} */
export const DELETE = async ({ cookies, request, url }) => {

  const personId = url.searchParams.get('personId'); 
  const data = await request.json();    
  const { response, json } = await api.del(api_endpoint, `people/${personId}`, {aud:"aud"} );  

  // console.log('from put method', data, personId);

  console.log('json, response.status', json, response.status);

  if (response.status !== 200 && response.status !== 501) {
    throw response.error || new Error(`Request failed with status ${response.status}, ${json.error}`) ;
  }

  return new Response(JSON.stringify(json));
}
