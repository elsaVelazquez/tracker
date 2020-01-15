// https://dog.ceo/api/breeds/image/random


import * as url from './mutation-types'

export const initDogs = ({commit}) => {  //to commit mutations

	fetch('https://api.thedogapi.com/v1/images/search?limit=1.json?api-key=b15f7ee2-0c1d-4c10-a85f-58a31fb87f06', 
		{
			method: 'GET'
		})

	.then(response => response.json())
	.then(json => commit(url.INIT_TIMELINE, json))

}
