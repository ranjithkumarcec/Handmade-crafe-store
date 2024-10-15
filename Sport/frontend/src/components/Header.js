import { Link } from "react-router-dom";

export default function Header({ cartItems }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {/* Logo Section */}
            <div className="navbar-brand">
    <Link to="/">
        <img 
            width="63px" 
            height="60px" 
            src="/images/hari1.webp" 
            alt="Logo" 
            style={{ borderRadius: '0px' }}
        />
    </Link>

            
            </div>

            {/* Toggler for responsive design */}
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navigation Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">
                            Cart <span className="badge badge-pill badge-primary">{cartItems.length}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
