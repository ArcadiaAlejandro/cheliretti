const Section1 = () => {

return (
        <>
            <div className="relative h-screen">
                <img alt="" src = "https://images.unsplash.com/photo-1611418130714-261e39115105?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="absolute inset-0 w-full h-full object-cover"  
                ></img>
                <div className="absolute inset-0 bg-[#0000006a] flex flex-col justify-center p-12 md:p-24 lg:p-48">
                    <div className="relative text-left bg-[#0000006a] bg-opacity-75 p-6 md:p-12">
                    <div className="absolute top-0 left-0 w-2 bg-yellow-500 h-full"></div>
                    <h1 className="text-4xl lg:text-6xl font-bold text-white">
                        SERVICIOS <br /> 
                    </h1>
                    <p className="text-xl lg:text-2xl mt-2 text-gray-400 italic">
                        porque cada proyecto es diferente
                    </p>
                    <p className="text-lg lg:text-xl mt-2 text-white">
                        En el mercado de la construcción CHELIRETTI, es especialista en
                        construir una gran red de Telecomunicaciones
                    </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section1;
