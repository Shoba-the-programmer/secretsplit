function Header(){
    return(
        <header>
            <h1 className="split_logo"> Split </h1>
            <nav> 
                <ul>
                    <li> <a href = "#"> Home </a></li>
                    <li> <a href = "#">About </a>  </li>
                    <li> <a href = "#"> Account </a> </li>
                    <li> <a href = "#">Community Dashboard  </a> </li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header; //export to be used elsewhere