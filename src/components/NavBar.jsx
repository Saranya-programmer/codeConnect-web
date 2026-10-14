import { useSelector } from "react-redux";
import { useEffect } from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    // const store=useSelector((store)=>store.user);
    // console.log(store);

    const store = useSelector((state) => state.user);
    useEffect(() => {
        console.log(store);
    }, [store]);


    return (
        <>
            <div className="navbar bg-base-300 shadow-sm">
                <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">CodeConnect</Link>
                </div>
                {store && (<div className="flex gap-2">
                    <div className="form-control">Welcome,{store.firstName}</div>
                    {/* <input type="text" placeholder="Search" className="input w-24 md:w-auto" /> */}
                    <div className="dropdown dropdown-end mx-5 flex">
                        <p className="px-4"></p>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-5">
                            <div className="w-10 rounded-full ">
                                <img
                                    alt="user phot"
                                    src={store.photoUrl} />
                            </div>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to="/profile" className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>

                </div>)}
            </div>
        </>
    );
};

export default NavBar;