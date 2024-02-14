let searchInput = document.getElementById("searchInput")
let searchResults = document.getElementById("searchResults")
let speaner = document.getElementById("spinner")
function getandappend(text){
    speaner.classList.add("d-none")
    let searchresult = text.search_results
    searchResults.textContent = ""
    for (let i of searchresult){
    let firstarry = i   
   
    let title = document.createElement("a")
    title.href = firstarry.link
    title.target = "_blank"
    title.textContent = firstarry.title
    title.classList.add("result-title")
    searchResults.append(title)

    let breaks = document.createElement("br")
    searchResults.append(breaks)

    let url = document.createElement("a")
    url.href = firstarry.link
    url.target = "_blank"
    url.textContent = firstarry.link
    url.classList.add("result-url")
    searchResults.append(url)
    
    let description = document.createElement("p")
    description.textContent = firstarry.description
    description.classList.add("link-description")
    searchResults.append(description)
    

    }
    

    
}
searchInput.addEventListener("keyup",function(event){
    if(event.key === "Enter"){
        speaner.classList.remove("d-none")
        searchInput.textContent = ""

        let searchInputvalue = searchInput.value
        

        let url = "https://apis.ccbp.in/wiki-search?search="+searchInputvalue
        
        
        let option = {
            method:"GET"
        }
        fetch(url,option)
        .then(function(response){
            return response.json()
        })
        .then(function(text){
            getandappend(text)
        })
        
        
        

    }
   

    
})