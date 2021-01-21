async function tempo(request, response) {
    const dynamicDate = new Date();

    const aulaAgora = await fetch("http://192.168.15.136:8081/aovivo");
    const aulaAgoraJson = await aulaAgora.json();
    const aula = aulaAgoraJson.aula;

    response.json({
        date: dynamicDate.toGMTString(),
        aula: aula
    })
}

export default tempo;