import Link from "next/link"

const HeaderBar = () => {
    const menuItems: { id: number; name: string; link: string }[] = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "About", link: "/about" },
    ]

    return (
        <div className="fixed top-0 flex items-center w-full h-16 bg-yellow-500 dark:bg-yellow-700">
            <div className="container flex justify-between w-full h-full px-2 mx-auto md:px-0">
                <div className="flex items-center h-full">
                    <Link href="/">
                        <span className="text-lg font-black uppercase cursor-pointer font-sw">
                            Star Wars
                        </span>
                    </Link>
                </div>
                <div>
                    <ul className="flex flex-row h-full gap-4 ml-auto">
                        {menuItems.map((item) => (
                            <Link href={item.link} key={item.id}>
                                <li className="flex items-center h-full px-4 cursor-pointer hover:bg-red-700">
                                    <span className="font-sw">{item.name}</span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderBar
