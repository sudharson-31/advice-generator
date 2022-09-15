export default async function randomAdvice(){
    let request = await fetch('https://api.adviceslip.com/advice');
    const response = await request.json()
    return response;
}