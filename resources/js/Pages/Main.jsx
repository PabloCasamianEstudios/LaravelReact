import Layout from "@/Layouts/Layout.jsx";

export default function Main(props) {
    const nombre = props.nombre;
    const numero = props.numero;

    return (
        <Layout>

            <h1> Hola {nombre}</h1>
            <h2> Número: {numero}</h2>

            <div className="max-w-[1400px] px-4 mx-auto md:grid md:grid-cols-2 min-h-[calc(100vh-5rem)]">
                <div className="flex flex-col justify-end h-full py-8">
                    <h1 className='fadeInDown transition-all delay-1000 font-bold uppercase text-3xl md:text-7xl tracking-tight'>This is a landing page of a new component</h1>
                    <p className='text-xl md:text-2xl color-white/70'>This is a landing page an the description will be here.</p>
                </div>
                <div className="relative">
                    <div className="w-1/3 h-1/3 absolute bottom-0 right-0 border-b-2 border-r-2 border-white/70"></div>
                </div>
            </div>
        </Layout>
    )
}
