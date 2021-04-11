import Layout from "../components/Layout";
import Image from "next/image";

export default function Profile() {
    return (
        <Layout title="Profile">
            <div className="bg-white text-center shadow-xl p-8 w-80 rounded-2xl dark:bg-gray-800 h-96">
                <div className="mt-4">
                    <p className="font-bold">Profile Card</p>
                </div>
                <div className="flex justify-center mt-4">
                    <Image
                        className="rounded-full relative inset-0 transform hover:-rotate-45 duration-1000 cursor-pointer"
                        src="/profile/S__31137960.jpg"
                        width={60}
                        height={60}
                        alt="Avatar"
                    />
                </div>
                <div className="mt-4">
                    <p className="font-bold my-1 text-gray-600">Hoi Ching Chan</p>
                    <p className="text-xs my-1 text-gray-600">Fashion Model</p>
                    <p className="font-bold">Location</p>
                    <p className="text-xs my-1 text-gray-600">Tokyo, Japan</p>
                    <p className="font-bold">E-mail</p>
                    <p className="text-xs my-1 text-gray-600">ruizu@gmail.com</p>

                </div>
                <div className="mt-8 flex justify-around">
                    <div>
                        <a
                            href="https://www.instagram.com/hoichingchan/"
                            target="_blank"
                        >
                            <svg
                                className="w-6 h-6 fill-current text-black-500 inset-0 transform  hover:scale-75 transition duration-300"
                                fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"/>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a
                            href=""
                            target="_blank"
                        >
                            <svg
                                className="w-6 h-6 fill-current text-black-500 inset-0 transform  hover:scale-75 transition duration-300"
                                fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"/>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a
                            // href="https://www.behance.net/ruizz"
                            href="#"
                            // target="_blank"
                        >
                            <svg
                                className="w-6 h-6 fill-current text-black-100 inset-0 transform  hover:scale-75 transition duration-300 opacity-30 cursor-not-allowed"
                                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="95.802px" height="95.802px"
                                viewBox="0 0 95.802 95.802">
                                <g>
                                    <path
                                        d="M38.664,44.689c0,0,9.065-0.673,9.065-11.306c0-10.632-7.417-15.819-16.813-15.819H13.622h-0.508H0v59.414h13.114h0.508    h17.294c0,0,18.873,0.597,18.873-17.536C49.79,59.442,50.613,44.689,38.664,44.689z M13.622,28.125h15.069h2.226    c0,0,4.203,0,4.203,6.181c0,6.181-2.473,7.077-5.275,7.077H13.622V28.125z M30.119,66.42H13.622V50.541h17.294    c0,0,6.264-0.08,6.264,8.16C37.18,65.572,32.599,66.351,30.119,66.42z"/>
                                    <rect x="62.18" y="21.064" width="24.514" height="7.317"/>
                                    <path
                                        d="M74.961,32.682c-22.848,0-22.828,22.826-22.828,22.826s-1.566,22.713,22.829,22.713c0,0,20.331,1.162,20.331-15.801    H84.837c0,0,0.349,6.391-9.526,6.391c0,0-10.455,0.699-10.455-10.34h30.785C95.641,58.471,99.009,32.682,74.961,32.682z     M84.255,50.541H64.738c0,0,1.277-9.158,10.455-9.158C84.372,41.382,84.255,50.541,84.255,50.541z"/>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
