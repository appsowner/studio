import { connect } from "react-redux"
import { Link } from "react-router-dom"
import logo_appsowner from 'assets/img/logo.png'
import loading from 'assets/img/loading.gif'

function NavBar() {
    return (
        <nav className="w-full py-4 top-0 fixed">
            <div className=" bg-white px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <div className="ml-4 mt-2">
                        <img
                            src={logo_appsowner}
                            width={140}
                            height={120}
                            className=""
                        />
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <Link to='/casos' className="text-lg inline-flex font-semibold leading-6 text-gray-900 border-b-2 border-transparent hover:border-orange-500 transition duration-300 ease-in-out mx-4">Casos</Link>
                        <Link to='/servicios' className="text-lg inline-flex font-semibold leading-6 text-gray-900 border-b-2 border-transparent hover:border-orange-500 transition duration-300 ease-in-out mx-4">Servicios</Link>
                        <Link to='/nosotros' className="text-lg inline-flex font-semibold leading-6 text-gray-900 border-b-2 border-transparent hover:border-orange-500 transition duration-300 ease-in-out mx-4">Nosotros</Link>
                        <Link to='/carreras' className="text-lg inline-flex font-semibold leading-6 text-gray-900 border-b-2 border-transparent hover:border-orange-500 transition duration-300 ease-in-out mx-4">Carreras</Link>
                        <Link to='/blog' className="text-lg inline-flex font-semibold leading-6 text-gray-900 border-b-2 border-transparent hover:border-orange-500 transition duration-300 ease-in-out mx-4">Blog</Link>
                        <Link to='/contacto' className="text-lg inline-flex font-semibold leading-6 text-gray-900 border-b-2 border-transparent hover:border-orange-500 transition duration-300 ease-in-out mx-4">Contacto</Link>
                        <Link
                            to="/contacto"
                            className="inline-flex ml-12 items-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        >
                            Hire us
                            {/* <img src={loading} className="w-7 h-2 mt-1 ml-2" /> */}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateProps = state => ({

})

export default connect(mapStateProps, {
})(NavBar)