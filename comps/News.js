const url =
  "https://newsapi.org/v2/everything?q={coronavirus,COVID-19}&sortBy=popularity&language=en&pageSize=30&apiKey=" + '9a873ea2d67343ce80c357db11bcf569';


  

export async function getNews() {
  let result = await fetch(url).then(response => response.json());  
  return result.articles;
}
