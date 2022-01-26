function callAPI(){
    fetch("https://cs684api.7g2rji63c728k.us-east-1.cs.amazonlightsail.com/hw3?team=Transformers", {
        method: 'GET',
    }
    )
    .then(res => {
        if (res.ok){
            console.log('SUCCESS')
        } else{
            console.log('Not Successful')
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
}