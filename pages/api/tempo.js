async function tempo(request, response) {
    const dynamicDate = new Date();

    const rua = await fetch("https://brasilapi.com.br/api/cep/v1/02543000");
    const ruaJson = await rua.json();
    const ruaString = ruaJson.street;

    response.json({
        date: dynamicDate.toGMTString(),
        rua: ruaString
    })
}

export default tempo;