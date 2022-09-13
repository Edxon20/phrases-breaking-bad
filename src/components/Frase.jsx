import React,{Fragment} from   'react';


const Frase = ({frase}) => {

    const {quote,author} = frase;

    return (
        <Fragment>                      
            <h1>{quote}</h1>
            <p>--{author}</p>
        </Fragment>
    );
}

export default Frase;


