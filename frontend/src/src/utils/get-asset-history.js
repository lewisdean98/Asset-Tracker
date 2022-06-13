if (re.test(asset_tag)) 
            try {
                //Call API
                const uri = "http://localhost:8000/assets/scan/" + asset_tag;
                
                //Call API and set bottom text to HTTP response
                fetch(uri).then(response=>response.text()).then(data => {setResponseText(data);});
            } catch (error) {
                alert(error)
            }
        
        else {
            setResponseText("Asset tag invalid, please try again")
        }

const getAssetHistory = (asset_tag) => {
    
    const uri = "http://localhost:8000/assets/gethistory/" + asset_tag;
    
        try {
            fetch(uri).then(response=>response.text()).then(data => {return(data);});
        } catch (error) {
            alert(error)
        }
    
    return (
        "test"
    );
};

export default getAssetHistory;