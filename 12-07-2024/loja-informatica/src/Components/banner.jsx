const Banner = () => {
    const bannerStyle = {
        background: 'url("https://fastly.picsum.photos/id/583/1200/400.jpg?grayscale&hmac=SyUIryDnjB6_7YmckeXlYfrc7tbUnkszXmz47setw5o") no-repeat center center',
        backgroundSize: 'cover',
        color: 'white',
        padding: '100px 0',
        textAlign: 'center'
        
    }


    return (
        <div style={bannerStyle}>
            <div className=""> 
               <h1 className="display-4">Bem vindo ao meu site</h1>
               <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempore quia nam est sint nostrum itaque in quo. Expedita in rem sequi ullam ut minima maiores qui itaque odio! Deleniti.</p>

           </div>
        </div>
    )
}

export default Banner;