import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
    return(
        <Layout title="Gallery">

            <section className="p-10 min-h-screen min-w-full flex md:flex-row items-center justify-around bg-white flex-wrap sm:flex-col">

                <Link href="/gallery/rabbit">
                    <div className="h-64 w-64 relative cursor-pointer m-10">
                        <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl" />
                        <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
                            <div className="h-full w-full bg-white rounded-lg shadow-2xl">
                                <Image src="/../public/gallery/project1.png"
                                       alt="Picture of the author"
                                       width={500}
                                       height={400}
                                />
                                <p className="">便箋</p>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/">
                <div className="h-64 w-64 relative cursor-pointer m-10">
                    <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl" />
                    <div className="absolute inset-0 transform hover:rotate-90 hover:scale-75 transition duration-300">
                        <div className="h-full w-full bg-white rounded-lg shadow-2xl" />
                    </div>
                </div>
                </Link>

                <Link href="/">
                <div className="h-64 w-64 relative cursor-pointer m-10">
                    <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl" />
                    <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
                        <div className="h-full w-full bg-white rounded-lg shadow-2xl" />
                    </div>
                </div>
                </Link>

                <Link href="/">
                <div className="h-64 w-64 relative cursor-pointer m-10">
                    <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl" />
                    <div className="absolute inset-0 transform  hover:-rotate-45 transition duration-300">
                        <div className="h-full w-full bg-white rounded-lg shadow-2xl" />
                    </div>
                </div>
                </Link>

                <Link href="/">
                <div className="h-64 w-64 relative cursor-pointer m-10">
                    <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl" />
                    <div className="absolute inset-0 transform origin-left hover:-rotate-45 transition duration-300">
                        <div className="h-full w-full bg-white rounded-lg shadow-2xl" />
                    </div>
                </div>
                </Link>

                <Link href="/">
                <div className="h-64 w-64 relative cursor-pointer m-10">
                    <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl" />
                    <div className="absolute inset-0 transform hover:-translate-x-10 transition duration-300">
                        <div className="h-full w-full bg-white rounded-lg shadow-2xl" />
                    </div>
                </div>
                </Link>

                <Link href="/">
                <div className="h-64 w-64 relative cursor-pointer m-10">
                    <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl" />

                    <div className="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-150 transition duration-300">
                        <div className="h-full w-full bg-white rounded-lg shadow-2xl" />
                    </div>
                </div>
                </Link>

                <Link href="/">
                <div className="h-64 w-64 relative cursor-pointer m-10">
                    <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl" />
                    <div className="absolute inset-0 transform hover:skew-y-12 transition duration-300">
                        <div className="h-full w-full bg-white rounded-lg shadow-2xl" />
                    </div>
                </div>
                </Link>

            </section>
        </Layout>
    )
}

export default Gallery;