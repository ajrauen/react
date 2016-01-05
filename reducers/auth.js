const auth = (state = false, action) => {
	if(action.type === "SIGN_IN"){
		return true
	}else if(action.type === "SIGN_OUT"){
		return false
	}
  return state;
}


module.exports = auth