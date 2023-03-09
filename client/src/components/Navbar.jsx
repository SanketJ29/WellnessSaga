const NavbarItem = ({ title, classProps }) => {
    return (
        <li className = {'mx-4 cursor-pointer ${classProps}'}>
            {title}
        </li>
    )
}
const Navbar = () => {
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">

            </div>
            <ul className="text-black md:flex hiddent list-none flex-row justify-between items-center flex-initial">
                {["Dashboard", "Payment", "Login", "Wallets"].map((item,index) => (
                    <NavbarItem key={item+index} title={item}/>
                ))}
                <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    Login
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;