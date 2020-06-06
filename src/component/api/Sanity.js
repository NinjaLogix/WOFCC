/*eslint-disable no-throw-literal*/
import sanityClient from '@sanity/client'
import {config} from "../../config/config";

const client = sanityClient(config.sanity_config);

// run any query
const queryData = async (clientRef, groqObj) => {
  try {
    if (testGroq(groqObj))
      throw "Incorrect groq object"

    const data = await clientRef.fetch(groqObj.query, groqObj.params);

    console.log('data:', data);
  }
  catch (error) {
    console.error(error);
  }
}

// listen to a query
const listenToQuery = (clientRef, groqObj) => {
  try {
    if (testGroq(groqObj))
      throw "Incorrect groq object"

    clientRef.listen(groqObj.query, groqObj.params).subscribe(update => console.log('update: ', update))
  }
  catch (error) {
    console.error(error);
  }
}

// stop listening
const stopListeningToQuery = subscription => subscription.unsubscribe();

// test groqObj
const testGroq = groqObj => {
  const keys = ['query', 'params'];

  return Object.keys(groqObj).every(key => keys.includes(key));
}

export {
  client,
  queryData,
  listenToQuery,
  stopListeningToQuery
}