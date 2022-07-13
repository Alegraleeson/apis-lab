btn = document.querySelector("button")

function onClick(event){
    // console.log('Button clicked!')
    axios.get("https://swapi.dev/api/planets/?search=alderaan")
    .then(response =>{
        console.log(response.data);
        const people = response.data.results[0].residents;
        console.log(people);
        for(let i=0; i<people.length; i++ ){
            axios.get(`${people[i]}`)
            .then( res => {
                const person = document.createElement('h2');
                person.textContent = res.data.name;
                document.body.appendChild(person);

            }
                
            )
                

            
        

        }

    }) 
    
}



btn.addEventListener('click', onClick)