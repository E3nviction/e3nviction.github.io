import logo from './assets/logo.svg';

function Navbar() {
  return (
	    <div id="Navbar" className="fixed top-0 w-full bg-[rgba(1,1,1,0.9)] backdrop-blur-[10px] border-b border-[#fff1] z-[1000]">
		<div className="flex justify-between items-center p-4 max-w-[1400px] mx-auto">
			<div>
				<a href="/">
					<img src={logo} alt="Enviction Logo" className='w-[40px] h-[40px] scale-[1.5]'/>
				</a>
			</div>
			<div className="flex gap-4 text-white">
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/projects">Projects</a>
				<a href="mailto:e3nviction@gmail.com">Contact</a>
			</div>
		</div>
	</div>
  );
}

export default Navbar;
