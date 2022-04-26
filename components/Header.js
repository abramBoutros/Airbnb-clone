import Image from "next/image";
import {
	SearchIcon,
	GlobeAltIcon,
	MenuIcon,
	UserCircleIcon,
	UsersIcon,
} from "@heroicons/react/solid";

function Header() {
	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
			{/*Left*/}
			<div className="relative flex items-center h-10 cursor-pointer my-auto">
				<Image
					src="https://links.papareact.com/qd3"
					layout="fill"
					objectFit="contain"
					objectPosition="left"
					alt="airbnb logo"
				/>
			</div>
			{/*Mid*/}
			<div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
				<input
					className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
					type="text"
					placeholder="Start your search"
				/>
				<SearchIcon
					className="hidden md:mx-2 md:inline-flex h-8 bg-red-400 text-white 
        rounded-full p-2 cursor-pointer"
				/>
			</div>
			{/*Right*/}
			<div className="flex items-center justify-end space-x-4 text-gray-500">
				<p className="hidden md:inline-flex cursor-pointer">Become a host</p>
				<GlobeAltIcon className="h-6 cursor-pointer" />
				<div className="flex items-center space-x-2 border-2 shadow-sm rounded-full px-3 py-2">
					<MenuIcon className="h-6 cursor-pointer" />
					<UserCircleIcon className="h-6 cursor-pointer" />
				</div>
			</div>
		</header>
	);
}

export default Header;
