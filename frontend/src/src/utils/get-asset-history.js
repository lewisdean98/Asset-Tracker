const getAssetHistory = (asset_tag) => {
    
    try {
        return(fetch(uri).then(response => {response.text}).then(data => {return(data)}));
       
    } catch (error) {
        return(error)
    }
};

export default getAssetHistory;