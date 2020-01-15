import * as types from './mutation-types'

export const mutations = {
	[types.INIT_TIMELINE] (state, payload) {
	state.timeline.push(...payload)
	}	
}

