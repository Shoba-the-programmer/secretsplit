import pumpwitch from './assets/pumpkinwitch.png';

function Book(){
    //a card element representing an available book to click and readthrough
    return(
        <div className="book_card">
            <img className='bookCoverImage' src={pumpwitch} alt='bitches love my pumpkin head'></img>
            <h2> Tutorial Book  Title</h2>
            <p>This is what the book is about</p>
        </div>
    );
}

export default Book;