import React from 'react'; 

function Main (){
    return(
        <div>
            <div className= 'Contacts'>
                <img src="https://dog.ceo/api/breeds/image/random/"></img>
                <h3>Dags Pic</h3>
                <p>this is dag's picture</p>
                <p>Email.Adress</p>
            </div>

            <div className= 'Contacts'>
                <img src="https://dog.ceo/api/breeds/image/random/"></img>
                <h3>Cats Pic</h3>
                <p>this is dag's picture</p>
                <p>Email Adress</p>
            </div>

            <div className= 'Contacts'>
                <img src="https://dog.ceo/api/breeds/image/random/"></img>
                <h3>Birds Pic</h3>
                <p>this is dag's picture</p>
                <p>Email Adress</p>
            </div>
        </div>
    )
}


export default Main