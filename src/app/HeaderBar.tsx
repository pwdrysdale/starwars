import Link from 'next/link';

const HeaderBar = () => {
    const menuItems: { id: number; name: string; link: string }[] = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'About', link: '/about' },
    ];

    return (
        <div className="w-full h-16 bg-yellow-500 dark:bg-yellow-700 fixed flex items-center top-0">
            <div className="container mx-auto flex w-full justify-between h-full">
                <div className="h-full flex items-center">
                    <Link href="/">
                        <span className="font-black uppercase text-lg font-sw cursor-pointer">
                            Star Wars
                        </span>
                    </Link>
                </div>
                <div>
                    <ul className="flex flex-row gap-4 ml-auto h-full">
                        {menuItems.map(item => (
                            <Link href={item.link} key={item.id}>
                                <li className="cursor-pointer hover:bg-red-700 h-full px-4 flex items-center">
                                    <span className="font-sw">{item.name}</span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HeaderBar;
