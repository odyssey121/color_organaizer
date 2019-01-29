const customSort = sort => (obj1, obj2) =>{
	return obj2[sort] - obj1[sort]
	}	

export default customSort